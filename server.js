const express = require('express');
const fetch   = require('node-fetch');
const cors    = require('cors');
const { XMLParser } = require('fast-xml-parser');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));   // serves index.html and assets

/* ── RSS feeds ─────────────────────────────── */
const FEEDS = [
  { id: 'BBC',   name: 'BBC',      url: 'http://feeds.bbci.co.uk/news/world/rss.xml' },
  { id: 'REU',   name: 'Reuters',  url: 'https://feeds.reuters.com/reuters/worldNews' },
  { id: 'AJZ',   name: 'AlJaz',    url: 'https://www.aljazeera.com/xml/rss/all.xml' },
  { id: 'CNN',   name: 'CNN',      url: 'http://rss.cnn.com/rss/edition_world.rss' },
  { id: 'NPR',   name: 'NPR',      url: 'https://feeds.npr.org/1004/rss.xml' },
  { id: 'GUARD', name: 'Guardian', url: 'https://www.theguardian.com/world/rss' },
];

const REFRESH_MS = 60 * 1000;   // fetch every 60 seconds
const TIMEOUT_MS = 12 * 1000;   // 12s per feed

/* ── In-memory cache ───────────────────────── */
let cache = {
  articles: [],
  feedStatus: {},
  lastFetched: null,
};

/* ── XML parser ────────────────────────────── */
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  isArray: (name) => name === 'item',
});

/* ── Fetch a single RSS feed ───────────────── */
async function fetchFeed(feed) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(feed.url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml  = await res.text();
    const data = parser.parse(xml);
    const items = (data?.rss?.channel?.item) || [];
    cache.feedStatus[feed.id] = 'ok';
    return items.map(it => ({
      title:  (it.title  || '').replace(/<[^>]+>/g, '').trim(),
      desc:   (it.description || '').replace(/<[^>]+>/g, '').trim(),
      link:   it.link || '',
      source: feed.name,
      pubDate: it.pubDate || it['dc:date'] || new Date().toISOString(),
    }));
  } catch (e) {
    clearTimeout(timer);
    cache.feedStatus[feed.id] = 'fail';
    console.warn(`[${feed.id}] ${e.message}`);
    return [];
  }
}

/* ── Fetch all feeds and update cache ──────── */
async function refreshCache() {
  console.log('[server] Refreshing RSS feeds…');
  const results = await Promise.allSettled(FEEDS.map(fetchFeed));
  const all = [];
  results.forEach(r => { if (r.status === 'fulfilled') all.push(...r.value); });
  all.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  cache.articles    = all;
  cache.lastFetched = new Date().toISOString();
  console.log(`[server] Cache updated: ${all.length} articles`);
}

/* ── API endpoint ──────────────────────────── */
app.get('/api/news', (req, res) => {
  res.json({
    articles:    cache.articles,
    feedStatus:  cache.feedStatus,
    lastFetched: cache.lastFetched,
    count:       cache.articles.length,
  });
});

/* ── Health check ──────────────────────────── */
app.get('/health', (req, res) => res.json({ ok: true, lastFetched: cache.lastFetched }));

/* ── Start ─────────────────────────────────── */
app.listen(PORT, async () => {
  console.log(`[server] Running on port ${PORT}`);
  await refreshCache();                     // initial load
  setInterval(refreshCache, REFRESH_MS);   // then every 60s
});
