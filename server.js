'use strict';
require('./env');
const express = require('express');
const fetch   = require('node-fetch');
const xml2js  = require('xml2js');
const fs      = require('fs');
const path    = require('path');

const app   = express();
const PORT  = process.env.PORT || 3000;
const TOKEN = process.env.MAPBOX_TOKEN;
if (!TOKEN) { console.error('MAPBOX_TOKEN not set in environment'); process.exit(1); }

// ── Load app assets at startup ───────────────────────────────────────────────
const CSS   = fs.readFileSync(path.join(__dirname, 'app_css.txt'),   'utf8');
const HTML  = fs.readFileSync(path.join(__dirname, 'app_html.txt'),  'utf8');
let   LOGIC = fs.readFileSync(path.join(__dirname, 'app_logic.js'),  'utf8');

// Patch the logic: inject real token at runtime (placeholder in source file)
LOGIC = LOGIC.replace('%%MAPBOX_TOKEN%%', TOKEN);
// Patch: replace rss2json proxy with our own /api/feed endpoint
LOGIC = LOGIC.replace(
  /var PROXY\s*=\s*'[^']+';/,
  "var PROXY = '/api/feed-proxy?url=';"
);
// Patch: replace corsproxy.io Yahoo Finance with our /api/market endpoint
LOGIC = LOGIC.replace(
  /var proxy\s*=\s*'https:\/\/corsproxy\.io\/\?'\s*\+\s*encodeURIComponent\(url\);/,
  "var proxy = '/api/market/' + encodeURIComponent(t.yf);"
);

// Also patch fetchFeed to use our server feed endpoint instead of rss2json
// Our /api/feed returns {articles:[{source,title,link,date},...]}
// We'll replace fetchAll to just hit /api/feed once
const FETCH_ALL_PATCH = `
function fetchFeed(){ return Promise.resolve([]); }
function fetchAll(){
  FEEDS.forEach(function(f){ setFeedStatus(f.id,'wait'); });
  return fetch('/api/feed',{cache:'no-store'})
    .then(function(r){ return r.json(); })
    .then(function(d){
      var arts = (d.articles||[]).map(function(it){
        setFeedStatus(it.source,'ok');
        return {
          title: (it.title||'').replace(/<[^>]+>/g,'').trim(),
          desc:  '',
          link:  it.link||'',
          source: it.source,
          date:  new Date(it.date||Date.now()),
        };
      });
      arts.sort(function(a,b){ return b.date-a.date; });
      return arts;
    })
    .catch(function(e){
      FEEDS.forEach(function(f){ setFeedStatus(f.id,'fail'); });
      console.warn('[feed]',e);
      return [];
    });
}
`;

// Replace the original fetchFeed + fetchAll block
LOGIC = LOGIC.replace(
  /function fetchFeed\(feed\)\{[\s\S]*?^function fetchAll\(\)\{[\s\S]*?^\}/m,
  FETCH_ALL_PATCH
);

// ── /bundle — serves token + css + html + patched JS in one JSON response ────
// This endpoint is what app.js calls. The token travels over HTTPS only.
// View Source on index.html shows nothing useful. /app.js only bootstraps.
app.get('/bundle', (req, res) => {
  res.json({
    token: TOKEN,
    css:   CSS,
    html:  HTML,
    logic: LOGIC,
  });
});

// ── Static public shell ───────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── /api/feed — server-side RSS proxy ────────────────────────────────────────
const FEEDS = [
  { id:'BBC',    url:'http://feeds.bbci.co.uk/news/world/rss.xml' },
  { id:'REU',    url:'https://feeds.reuters.com/reuters/worldNews' },
  { id:'AJZ',    url:'https://www.aljazeera.com/xml/rss/all.xml' },
  { id:'CNN',    url:'http://rss.cnn.com/rss/edition_world.rss' },
  { id:'NPR',    url:'https://feeds.npr.org/1004/rss.xml' },
  { id:'GUARD',  url:'https://www.theguardian.com/world/rss' },
  { id:'EOBS',   url:'https://www.euobserver.com/rss/2/articles.xml' },
  { id:'POLIT',  url:'https://www.politico.eu/feed/' },
  { id:'LEMND',  url:'https://www.lemonde.fr/rss/une.xml' },
  { id:'LEFIG',  url:'https://www.lefigaro.fr/rss/figaro_actualites.xml' },
  { id:'SPIEG',  url:'https://www.spiegel.de/international/index.rss' },
  { id:'DW',     url:'https://rss.dw.com/rdf/rss-en-world' },
  { id:'ANSA',   url:'https://www.ansa.it/sito/ansait_rss.xml' },
  { id:'ELPAIS', url:'https://feeds.elpais.com/mrss-s/pages/ep/site/english.elpais.com/portada' },
  { id:'DUTCHN', url:'https://nltimes.nl/rss.xml' },
  { id:'NOTES',  url:'https://notesfrompoland.com/feed/' },
  { id:'LOCAL',  url:'https://www.thelocal.se/feed/' },
  { id:'KYIVP',  url:'https://kyivpost.com/rss' },
  { id:'MEDUZA', url:'https://meduza.io/rss/en/all' },
];

let feedCache = null, feedCacheAt = 0;
const CACHE_TTL = 4 * 60 * 1000;

async function fetchOneFeed(feed) {
  try {
    const r = await fetch(feed.url, {
      timeout: 9000,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WNHM/1.0)' }
    });
    if (!r.ok) return [];
    const xml = await r.text();
    const parsed = await xml2js.parseStringPromise(xml, { explicitArray: false });
    const ch = parsed?.rss?.channel || parsed?.feed || {};
    const items = ch.item || ch.entry || [];
    const arr = Array.isArray(items) ? items : [items];
    return arr.slice(0, 30).map(it => ({
      source: feed.id,
      title:  String(it.title?._ || it.title || '').trim(),
      link:   String(it.link?.href || (Array.isArray(it.link) ? it.link[0] : it.link) || '').trim(),
      date:   String(it.pubDate || it.updated || it['dc:date'] || '').trim(),
    })).filter(it => it.title && it.link);
  } catch { return []; }
}

async function refreshFeeds() {
  const results = await Promise.all(FEEDS.map(fetchOneFeed));
  feedCache  = results.flat();
  feedCacheAt = Date.now();
  console.log(`[feeds] ${feedCache.length} articles cached`);
}

app.get('/api/feed', async (req, res) => {
  try {
    if (!feedCache || Date.now() - feedCacheAt > CACHE_TTL) await refreshFeeds();
    res.json({ articles: feedCache, cachedAt: feedCacheAt });
  } catch (e) { res.status(500).json({ error: 'feed error' }); }
});

// ── /api/market/:symbol — Yahoo Finance proxy ─────────────────────────────────
app.get('/api/market/:symbol', async (req, res) => {
  try {
    const sym = encodeURIComponent(req.params.symbol);
    const r = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=1d`,
      { timeout: 6000, headers: { 'User-Agent': 'Mozilla/5.0' } }
    );
    res.json(await r.json());
  } catch (e) { res.status(500).json({ error: 'market error' }); }
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  World News Heatmap  →  http://localhost:${PORT}\n`);
  refreshFeeds();
});
