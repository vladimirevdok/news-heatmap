(function(){
'use strict';

/* ═══════════════════════════════════════════════
   COUNTRY TABLE
═══════════════════════════════════════════════ */
var C = {
  'united states of america':{lat:38.9,lng:-77,name:'United States'},
  'united states':{lat:38.9,lng:-77,name:'United States'},
  'white house':{lat:38.9,lng:-77,name:'United States'},
  'washington dc':{lat:38.9,lng:-77,name:'United States'},
  'wall street':{lat:40.7,lng:-74,name:'United States'},
  'american':{lat:38.9,lng:-77,name:'United States'},
  'americans':{lat:38.9,lng:-77,name:'United States'},
  'washington':{lat:38.9,lng:-77,name:'United States'},
  'pentagon':{lat:38.9,lng:-77,name:'United States'},
  'congress':{lat:38.9,lng:-77,name:'United States'},
  'senate':{lat:38.9,lng:-77,name:'United States'},
  'trump':{lat:38.9,lng:-77,name:'United States'},
  'biden':{lat:38.9,lng:-77,name:'United States'},
  'harris':{lat:38.9,lng:-77,name:'United States'},
  'usa':{lat:38.9,lng:-77,name:'United States'},
  'new york':{lat:40.7,lng:-74,name:'United States'},
  'california':{lat:36.8,lng:-119.4,name:'United States'},
  'texas':{lat:31.2,lng:-99.3,name:'United States'},
  'federal reserve':{lat:38.9,lng:-77,name:'United States'},
  'canada':{lat:45.4,lng:-75.7,name:'Canada'},
  'canadian':{lat:45.4,lng:-75.7,name:'Canada'},
  'ottawa':{lat:45.4,lng:-75.7,name:'Canada'},
  'toronto':{lat:43.7,lng:-79.4,name:'Canada'},
  'trudeau':{lat:45.4,lng:-75.7,name:'Canada'},
  'mexico':{lat:19.4,lng:-99.1,name:'Mexico'},
  'mexican':{lat:19.4,lng:-99.1,name:'Mexico'},
  'el salvador':{lat:13.8,lng:-88.9,name:'El Salvador'},
  'costa rica':{lat:9.7,lng:-83.8,name:'Costa Rica'},
  'guatemala':{lat:15.8,lng:-90.2,name:'Guatemala'},
  'honduras':{lat:15.2,lng:-86.2,name:'Honduras'},
  'nicaragua':{lat:12.9,lng:-85.2,name:'Nicaragua'},
  'panama':{lat:8.9,lng:-79.5,name:'Panama'},
  'cuba':{lat:21.5,lng:-79.5,name:'Cuba'},
  'cuban':{lat:21.5,lng:-79.5,name:'Cuba'},
  'havana':{lat:23.1,lng:-82.4,name:'Cuba'},
  'haiti':{lat:18.9,lng:-72.3,name:'Haiti'},
  'haitian':{lat:18.9,lng:-72.3,name:'Haiti'},
  'jamaica':{lat:18.1,lng:-77.3,name:'Jamaica'},
  'venezuela':{lat:6.4,lng:-66.6,name:'Venezuela'},
  'venezuelan':{lat:6.4,lng:-66.6,name:'Venezuela'},
  'colombia':{lat:4.6,lng:-74.3,name:'Colombia'},
  'bogota':{lat:4.7,lng:-74.1,name:'Colombia'},
  'brazil':{lat:-15.8,lng:-47.9,name:'Brazil'},
  'brazilian':{lat:-15.8,lng:-47.9,name:'Brazil'},
  'lula':{lat:-15.8,lng:-47.9,name:'Brazil'},
  'argentina':{lat:-38.4,lng:-63.6,name:'Argentina'},
  'buenos aires':{lat:-34.6,lng:-58.4,name:'Argentina'},
  'milei':{lat:-34.6,lng:-58.4,name:'Argentina'},
  'chile':{lat:-35.7,lng:-71.5,name:'Chile'},
  'peru':{lat:-9.2,lng:-75,name:'Peru'},
  'ecuador':{lat:-1.8,lng:-78.2,name:'Ecuador'},
  'bolivia':{lat:-16.3,lng:-63.6,name:'Bolivia'},
  'paraguay':{lat:-23.4,lng:-58.4,name:'Paraguay'},
  'uruguay':{lat:-32.5,lng:-55.8,name:'Uruguay'},
  'russia':{lat:55.8,lng:37.6,name:'Russia'},
  'russian':{lat:55.8,lng:37.6,name:'Russia'},
  'russians':{lat:55.8,lng:37.6,name:'Russia'},
  'moscow':{lat:55.8,lng:37.6,name:'Russia'},
  'kremlin':{lat:55.8,lng:37.6,name:'Russia'},
  'putin':{lat:55.8,lng:37.6,name:'Russia'},
  'ukraine':{lat:50.5,lng:30.5,name:'Ukraine'},
  'ukrainian':{lat:50.5,lng:30.5,name:'Ukraine'},
  'ukrainians':{lat:50.5,lng:30.5,name:'Ukraine'},
  'kyiv':{lat:50.5,lng:30.5,name:'Ukraine'},
  'zelensky':{lat:50.5,lng:30.5,name:'Ukraine'},
  'donbas':{lat:48.0,lng:37.8,name:'Ukraine'},
  'united kingdom':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'great britain':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'britain':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'british':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'england':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'english':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'london':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'scotland':{lat:56.5,lng:-4.2,name:'United Kingdom'},
  'wales':{lat:52.1,lng:-3.8,name:'United Kingdom'},
  'starmer':{lat:51.5,lng:-.1,name:'United Kingdom'},
  'germany':{lat:52.5,lng:13.4,name:'Germany'},
  'german':{lat:52.5,lng:13.4,name:'Germany'},
  'berlin':{lat:52.5,lng:13.4,name:'Germany'},
  'scholz':{lat:52.5,lng:13.4,name:'Germany'},
  'merz':{lat:52.5,lng:13.4,name:'Germany'},
  'france':{lat:48.9,lng:2.3,name:'France'},
  'french':{lat:48.9,lng:2.3,name:'France'},
  'paris':{lat:48.9,lng:2.3,name:'France'},
  'macron':{lat:48.9,lng:2.3,name:'France'},
  'italy':{lat:41.9,lng:12.5,name:'Italy'},
  'italian':{lat:41.9,lng:12.5,name:'Italy'},
  'rome':{lat:41.9,lng:12.5,name:'Italy'},
  'meloni':{lat:41.9,lng:12.5,name:'Italy'},
  'spain':{lat:40.4,lng:-3.7,name:'Spain'},
  'spanish':{lat:40.4,lng:-3.7,name:'Spain'},
  'madrid':{lat:40.4,lng:-3.7,name:'Spain'},
  'poland':{lat:52.2,lng:21.0,name:'Poland'},
  'polish':{lat:52.2,lng:21.0,name:'Poland'},
  'warsaw':{lat:52.2,lng:21,name:'Poland'},
  'turkey':{lat:39.9,lng:32.9,name:'Turkey'},
  'turkish':{lat:39.9,lng:32.9,name:'Turkey'},
  'ankara':{lat:39.9,lng:32.9,name:'Turkey'},
  'erdogan':{lat:39.9,lng:32.9,name:'Turkey'},
  'istanbul':{lat:41.0,lng:28.9,name:'Turkey'},
  'greece':{lat:39.1,lng:21.8,name:'Greece'},
  'greek':{lat:39.1,lng:21.8,name:'Greece'},
  'athens':{lat:37.9,lng:23.7,name:'Greece'},
  'sweden':{lat:60.1,lng:18.6,name:'Sweden'},
  'swedish':{lat:60.1,lng:18.6,name:'Sweden'},
  'norway':{lat:60.5,lng:8.5,name:'Norway'},
  'norwegian':{lat:60.5,lng:8.5,name:'Norway'},
  'finland':{lat:61.9,lng:25.7,name:'Finland'},
  'danish':{lat:56.3,lng:9.5,name:'Denmark'},
  'denmark':{lat:56.3,lng:9.5,name:'Denmark'},
  'netherlands':{lat:52.3,lng:5.3,name:'Netherlands'},
  'dutch':{lat:52.3,lng:5.3,name:'Netherlands'},
  'amsterdam':{lat:52.4,lng:4.9,name:'Netherlands'},
  'belgium':{lat:50.5,lng:4.5,name:'Belgium'},
  'brussels':{lat:50.9,lng:4.4,name:'Belgium'},
  'switzerland':{lat:46.8,lng:8.2,name:'Switzerland'},
  'austria':{lat:47.5,lng:14.6,name:'Austria'},
  'portugal':{lat:39.4,lng:-8.2,name:'Portugal'},
  'czech':{lat:49.8,lng:15.5,name:'Czech Republic'},
  'hungary':{lat:47.2,lng:19.5,name:'Hungary'},
  'budapest':{lat:47.5,lng:19.1,name:'Hungary'},
  'romania':{lat:45.9,lng:24.9,name:'Romania'},
  'serbia':{lat:44.0,lng:21,name:'Serbia'},
  'croatia':{lat:45.1,lng:15.2,name:'Croatia'},
  'belarus':{lat:53.7,lng:28,name:'Belarus'},
  'belarusian':{lat:53.7,lng:28,name:'Belarus'},
  'minsk':{lat:53.9,lng:27.6,name:'Belarus'},
  'moldova':{lat:47,lng:28.4,name:'Moldova'},
  'slovakia':{lat:48.7,lng:19.7,name:'Slovakia'},
  'albania':{lat:41.2,lng:20.2,name:'Albania'},
  'kosovo':{lat:42.6,lng:20.9,name:'Kosovo'},
  'bosnia':{lat:44.2,lng:17.9,name:'Bosnia'},
  'estonia':{lat:58.6,lng:25,name:'Estonia'},
  'latvia':{lat:56.9,lng:24.6,name:'Latvia'},
  'lithuania':{lat:55.2,lng:23.9,name:'Lithuania'},
  'iceland':{lat:64.9,lng:-18.1,name:'Iceland'},
  'israel':{lat:31.0,lng:34.9,name:'Israel'},
  'israeli':{lat:31.0,lng:34.9,name:'Israel'},
  'israelis':{lat:31.0,lng:34.9,name:'Israel'},
  'tel aviv':{lat:32.1,lng:34.8,name:'Israel'},
  'jerusalem':{lat:31.8,lng:35.2,name:'Israel'},
  'netanyahu':{lat:31.8,lng:35.2,name:'Israel'},
  'idf':{lat:31.8,lng:35.2,name:'Israel'},
  'gaza':{lat:31.4,lng:34.3,name:'Gaza'},
  'gazans':{lat:31.4,lng:34.3,name:'Gaza'},
  'hamas':{lat:31.4,lng:34.3,name:'Gaza'},
  'west bank':{lat:32,lng:35.2,name:'West Bank'},
  'palestine':{lat:31.9,lng:35.2,name:'Palestine'},
  'palestinian':{lat:31.9,lng:35.2,name:'Palestine'},
  'palestinians':{lat:31.9,lng:35.2,name:'Palestine'},
  'iran':{lat:32.4,lng:53.7,name:'Iran'},
  'iranian':{lat:32.4,lng:53.7,name:'Iran'},
  'tehran':{lat:35.7,lng:51.4,name:'Iran'},
  'iraq':{lat:33.2,lng:43.7,name:'Iraq'},
  'iraqi':{lat:33.2,lng:43.7,name:'Iraq'},
  'baghdad':{lat:33.3,lng:44.4,name:'Iraq'},
  'syria':{lat:34.8,lng:38.9,name:'Syria'},
  'syrian':{lat:34.8,lng:38.9,name:'Syria'},
  'damascus':{lat:33.5,lng:36.3,name:'Syria'},
  'saudi arabia':{lat:23.9,lng:45.1,name:'Saudi Arabia'},
  'saudi':{lat:23.9,lng:45.1,name:'Saudi Arabia'},
  'riyadh':{lat:24.7,lng:46.7,name:'Saudi Arabia'},
  'mbs':{lat:24.7,lng:46.7,name:'Saudi Arabia'},
  'yemen':{lat:15.6,lng:48.5,name:'Yemen'},
  'yemeni':{lat:15.6,lng:48.5,name:'Yemen'},
  'houthi':{lat:15.6,lng:44.2,name:'Yemen'},
  'houthis':{lat:15.6,lng:44.2,name:'Yemen'},
  'lebanon':{lat:33.9,lng:35.5,name:'Lebanon'},
  'lebanese':{lat:33.9,lng:35.5,name:'Lebanon'},
  'beirut':{lat:33.9,lng:35.5,name:'Lebanon'},
  'hezbollah':{lat:33.9,lng:35.5,name:'Lebanon'},
  'jordan':{lat:30.6,lng:36.2,name:'Jordan'},
  'amman':{lat:31.9,lng:35.9,name:'Jordan'},
  'qatar':{lat:25.3,lng:51.2,name:'Qatar'},
  'doha':{lat:25.3,lng:51.5,name:'Qatar'},
  'kuwait':{lat:29.3,lng:47.5,name:'Kuwait'},
  'bahrain':{lat:26.1,lng:50.6,name:'Bahrain'},
  'oman':{lat:21.5,lng:55.9,name:'Oman'},
  'united arab emirates':{lat:24,lng:53.8,name:'UAE'},
  'emirates':{lat:24,lng:53.8,name:'UAE'},
  'dubai':{lat:25.2,lng:55.3,name:'UAE'},
  'abu dhabi':{lat:24.5,lng:54.4,name:'UAE'},
  'china':{lat:39.9,lng:116.4,name:'China'},
  'chinese':{lat:39.9,lng:116.4,name:'China'},
  'beijing':{lat:39.9,lng:116.4,name:'China'},
  'shanghai':{lat:31.2,lng:121.5,name:'China'},
  'xi jinping':{lat:39.9,lng:116.4,name:'China'},
  'pla':{lat:39.9,lng:116.4,name:'China'},
  'japan':{lat:36.2,lng:138.3,name:'Japan'},
  'japanese':{lat:36.2,lng:138.3,name:'Japan'},
  'tokyo':{lat:35.7,lng:139.7,name:'Japan'},
  'india':{lat:28.6,lng:77.2,name:'India'},
  'indian':{lat:28.6,lng:77.2,name:'India'},
  'new delhi':{lat:28.6,lng:77.2,name:'India'},
  'modi':{lat:28.6,lng:77.2,name:'India'},
  'mumbai':{lat:19.1,lng:72.9,name:'India'},
  'pakistan':{lat:33.7,lng:73.1,name:'Pakistan'},
  'pakistani':{lat:33.7,lng:73.1,name:'Pakistan'},
  'islamabad':{lat:33.7,lng:73.1,name:'Pakistan'},
  'north korea':{lat:40.3,lng:127.5,name:'North Korea'},
  'kim jong':{lat:40.3,lng:127.5,name:'North Korea'},
  'pyongyang':{lat:39,lng:125.7,name:'North Korea'},
  'south korea':{lat:35.9,lng:127.8,name:'South Korea'},
  'seoul':{lat:37.6,lng:127,name:'South Korea'},
  'taiwan':{lat:23.7,lng:121,name:'Taiwan'},
  'taipei':{lat:25,lng:121.5,name:'Taiwan'},
  'afghanistan':{lat:33.9,lng:67.7,name:'Afghanistan'},
  'afghan':{lat:33.9,lng:67.7,name:'Afghanistan'},
  'kabul':{lat:34.5,lng:69.2,name:'Afghanistan'},
  'taliban':{lat:33.9,lng:67.7,name:'Afghanistan'},
  'myanmar':{lat:21.9,lng:95.9,name:'Myanmar'},
  'burma':{lat:21.9,lng:95.9,name:'Myanmar'},
  'burmese':{lat:21.9,lng:95.9,name:'Myanmar'},
  'thailand':{lat:15.9,lng:100.9,name:'Thailand'},
  'thai':{lat:15.9,lng:100.9,name:'Thailand'},
  'bangkok':{lat:13.8,lng:100.5,name:'Thailand'},
  'indonesia':{lat:-.8,lng:113.9,name:'Indonesia'},
  'indonesian':{lat:-.8,lng:113.9,name:'Indonesia'},
  'jakarta':{lat:-6.2,lng:106.8,name:'Indonesia'},
  'philippines':{lat:12.9,lng:121.8,name:'Philippines'},
  'manila':{lat:14.6,lng:121,name:'Philippines'},
  'vietnam':{lat:14.1,lng:108.3,name:'Vietnam'},
  'vietnamese':{lat:14.1,lng:108.3,name:'Vietnam'},
  'hanoi':{lat:21,lng:105.8,name:'Vietnam'},
  'bangladesh':{lat:23.7,lng:90.4,name:'Bangladesh'},
  'dhaka':{lat:23.8,lng:90.4,name:'Bangladesh'},
  'sri lanka':{lat:7.9,lng:80.8,name:'Sri Lanka'},
  'nepal':{lat:28.4,lng:84.1,name:'Nepal'},
  'cambodia':{lat:12.6,lng:104.9,name:'Cambodia'},
  'malaysia':{lat:4.2,lng:108,name:'Malaysia'},
  'singapore':{lat:1.4,lng:103.8,name:'Singapore'},
  'uzbekistan':{lat:41.4,lng:64.6,name:'Uzbekistan'},
  'kazakhstan':{lat:48,lng:66.9,name:'Kazakhstan'},
  'armenia':{lat:40.1,lng:45,name:'Armenia'},
  'azerbaijan':{lat:40.1,lng:47.6,name:'Azerbaijan'},
  'georgia':{lat:42.3,lng:43.4,name:'Georgia'},
  'nigeria':{lat:9.1,lng:7.5,name:'Nigeria'},
  'nigerian':{lat:9.1,lng:7.5,name:'Nigeria'},
  'abuja':{lat:9.1,lng:7.5,name:'Nigeria'},
  'lagos':{lat:6.5,lng:3.4,name:'Nigeria'},
  'ethiopia':{lat:9.0,lng:38.7,name:'Ethiopia'},
  'ethiopian':{lat:9.0,lng:38.7,name:'Ethiopia'},
  'addis ababa':{lat:9,lng:38.7,name:'Ethiopia'},
  'south africa':{lat:-25.7,lng:28.2,name:'South Africa'},
  'johannesburg':{lat:-26.2,lng:28,name:'South Africa'},
  'cape town':{lat:-33.9,lng:18.4,name:'South Africa'},
  'egypt':{lat:30.1,lng:31.2,name:'Egypt'},
  'egyptian':{lat:30.1,lng:31.2,name:'Egypt'},
  'cairo':{lat:30.1,lng:31.2,name:'Egypt'},
  'kenya':{lat:-1.3,lng:36.8,name:'Kenya'},
  'kenyan':{lat:-1.3,lng:36.8,name:'Kenya'},
  'nairobi':{lat:-1.3,lng:36.8,name:'Kenya'},
  'sudan':{lat:12.9,lng:30.2,name:'Sudan'},
  'khartoum':{lat:15.6,lng:32.5,name:'Sudan'},
  'south sudan':{lat:7.9,lng:30.2,name:'South Sudan'},
  'congo':{lat:-4.3,lng:15.3,name:'DR Congo'},
  'kinshasa':{lat:-4.3,lng:15.3,name:'DR Congo'},
  'somalia':{lat:5.2,lng:46.2,name:'Somalia'},
  'somali':{lat:5.2,lng:46.2,name:'Somalia'},
  'mogadishu':{lat:2,lng:45.3,name:'Somalia'},
  'mali':{lat:17.6,lng:-4,name:'Mali'},
  'bamako':{lat:12.6,lng:-8,name:'Mali'},
  'libya':{lat:26.3,lng:17.2,name:'Libya'},
  'libyan':{lat:26.3,lng:17.2,name:'Libya'},
  'tripoli':{lat:32.9,lng:13.2,name:'Libya'},
  'ghana':{lat:7.9,lng:-1,name:'Ghana'},
  'angola':{lat:-11.2,lng:17.9,name:'Angola'},
  'mozambique':{lat:-18.7,lng:35.5,name:'Mozambique'},
  'tanzania':{lat:-6.4,lng:34.9,name:'Tanzania'},
  'zimbabwe':{lat:-20,lng:30,name:'Zimbabwe'},
  'senegal':{lat:14.5,lng:-14.5,name:'Senegal'},
  'niger':{lat:17.6,lng:8.1,name:'Niger'},
  'chad':{lat:15.5,lng:18.7,name:'Chad'},
  'cameroon':{lat:3.9,lng:11.5,name:'Cameroon'},
  'burkina faso':{lat:12.4,lng:-1.6,name:'Burkina Faso'},
  'guinea':{lat:11,lng:-10.9,name:'Guinea'},
  'morocco':{lat:31.8,lng:-7.1,name:'Morocco'},
  'moroccan':{lat:31.8,lng:-7.1,name:'Morocco'},
  'algeria':{lat:28,lng:1.7,name:'Algeria'},
  'tunisia':{lat:33.9,lng:9.5,name:'Tunisia'},
  'eritrea':{lat:15.2,lng:39.8,name:'Eritrea'},
  'uganda':{lat:1.4,lng:32.3,name:'Uganda'},
  'zambia':{lat:-13.1,lng:27.8,name:'Zambia'},
  'australia':{lat:-35.3,lng:149.1,name:'Australia'},
  'australian':{lat:-35.3,lng:149.1,name:'Australia'},
  'canberra':{lat:-35.3,lng:149.1,name:'Australia'},
  'sydney':{lat:-33.9,lng:151.2,name:'Australia'},
  'new zealand':{lat:-40.9,lng:174.9,name:'New Zealand'},
  'european union':{lat:52.5,lng:13.4,name:'Germany'},
  'eu summit':{lat:50.8,lng:4.4,name:'Belgium'},
  'nato':{lat:52.3,lng:4.9,name:'Netherlands'},
  'united nations':{lat:40.7,lng:-74,name:'United States'},
  'un security council':{lat:40.7,lng:-74,name:'United States'},
  'middle east':{lat:31.0,lng:34.9,name:'Israel'},
};
var KW = Object.keys(C).sort(function(a,b){return b.length-a.length});

/* ═══════════════════════════════════════════════
   FEEDS
═══════════════════════════════════════════════ */
var FEEDS = [
  // ── GLOBAL / ANGLOPHONE ──
  {id:'BBC',   name:'BBC',      url:'http://feeds.bbci.co.uk/news/world/rss.xml'},
  {id:'REU',   name:'Reuters',  url:'https://feeds.reuters.com/reuters/worldNews'},
  {id:'AJZ',   name:'AlJaz',    url:'https://www.aljazeera.com/xml/rss/all.xml'},
  {id:'CNN',   name:'CNN',      url:'http://rss.cnn.com/rss/edition_world.rss'},
  {id:'NPR',   name:'NPR',      url:'https://feeds.npr.org/1004/rss.xml'},
  {id:'GUARD', name:'Guardian', url:'https://www.theguardian.com/world/rss'},
  // ── EUROPE — PAN-EUROPEAN ──
  {id:'EOBS',  name:'EuroObsv', url:'https://www.euobserver.com/rss/2/articles.xml'},
  {id:'POLIT', name:'Politico', url:'https://www.politico.eu/feed/'},
  // ── FRANCE ──
  {id:'LEMND', name:'Le Monde', url:'https://www.lemonde.fr/rss/une.xml'},
  {id:'LEFIG', name:'Le Figaro',url:'https://www.lefigaro.fr/rss/figaro_actualites.xml'},
  // ── GERMANY ──
  {id:'SPIEG', name:'Spiegel',  url:'https://www.spiegel.de/international/index.rss'},
  {id:'DW',    name:'DW',       url:'https://rss.dw.com/rdf/rss-en-world'},
  // ── ITALY ──
  {id:'ANSA',  name:'ANSA',     url:'https://www.ansa.it/sito/ansait_rss.xml'},
  // ── SPAIN ──
  {id:'ELPAIS',name:'El País',  url:'https://feeds.elpais.com/mrss-s/pages/ep/site/english.elpais.com/portada'},
  // ── NETHERLANDS ──
  {id:'DUTCHN',name:'NL Times', url:'https://nltimes.nl/rss.xml'},
  // ── POLAND ──
  {id:'NOTES', name:'Notes Pol',url:'https://notesfrompoland.com/feed/'},
  // ── SWEDEN / NORDIC ──
  {id:'LOCAL', name:'The Local', url:'https://www.thelocal.se/feed/'},
  // ── UKRAINE / EASTERN EUROPE ──
  {id:'KYIVP', name:'KyivPost', url:'https://kyivpost.com/rss'},
  {id:'MEDUZA',name:'Meduza',   url:'https://meduza.io/rss/en/all'},
];
var PROXY = 'https://api.rss2json.com/v1/api.json?rss_url=';
var REFRESH = 60; // seconds

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
var S = {
  proj:null, path:null, svg:null,
  W:0, H:0, canvas:null, ctx:null,
  articles:[],      // all articles
  byCountry:{},     // name→[articles]
  heatPts:[],       // normalized points
  prevCounts:{},    // name→count previous cycle
  feedStatus:{},    // id→'ok'|'fail'|'wait'
  labelG:null,      // svg group for country labels
  issueG:null,      // svg group for issue markers
  poiG:null,        // svg group for UK POI markers
  filteredArticles:[],
  refreshTimer:null,
  countdown:REFRESH,
  openCountry:null,
};

/* ═══════════════════════════════════════════════
   REGEX CACHE
═══════════════════════════════════════════════ */
var RE={};
function mkre(kw){
  if(!RE[kw]) RE[kw]=new RegExp('(?:^|[\\s,;:(\\["\'])'+kw.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?=$|[\\s,;:.!?\\])"\'\\-])','i');
  return RE[kw];
}

/* ═══════════════════════════════════════════════
   MAP INIT — Mapbox GL JS
═══════════════════════════════════════════════ */
function initMap(){
  return new Promise(function(res, rej){
    var wrap = document.getElementById('map-wrap');
    S.W = wrap.clientWidth || window.innerWidth;
    S.H = wrap.clientHeight || (window.innerHeight - 46 - 30);

    // Size overlay SVG and canvas
    S.svg = d3.select('#overlay-svg').attr('width', S.W).attr('height', S.H);
    S.canvas = document.getElementById('heat-canvas');
    S.canvas.width = S.W; S.canvas.height = S.H;
    S.ctx = S.canvas.getContext('2d');

    // Overlay groups
    S.labelG = S.svg.append('g').attr('class','labels').style('pointer-events','none');
    S.poiG   = S.svg.append('g').attr('class','poi-layer').style('pointer-events','all');
    S.issueG = S.svg.append('g').attr('class','issue-layer').style('pointer-events','none');

    // Zoom shims — S.proj returns screen coords directly, so k=1, tx=0, ty=0 are identity
    S.zoomK = 1; S.zoomX = 0; S.zoomY = 0;

    // Stub proj until map loads
    S.proj = function(){ return [0, 0]; };

    mapboxgl.accessToken = '%%MAPBOX_TOKEN%%';

    S.map = new mapboxgl.Map({
      container: 'mapbox-map',
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [10, 20],
      zoom: 1.5,
      minZoom: 0.5,
      maxZoom: 14,
      projection: 'globe',
    });

    S.map.on('load', function(){
      // Live proj shim — all downstream code calls S.proj([lng, lat]) → [screenX, screenY]
      S.proj = function(lnglat){
        var pt = S.map.project(new mapboxgl.LngLat(lnglat[0], lnglat[1]));
        return [pt.x, pt.y];
      };

      // Globe atmosphere — Earth from space: blue glow, deep space background
      S.map.setFog({
        'color': 'rgba(160, 200, 255, 0.85)',
        'high-color': 'rgba(40, 120, 220, 1)',
        'horizon-blend': 0.05,
        'space-color': '#020a1c',
        'star-intensity': 0.45,
      });

      // satellite-streets — brighten country borders so they read over imagery
      ['admin-0-boundary','admin-0-boundary-bg'].forEach(function(l){
        if(!S.map.getLayer(l)) return;
        try{ S.map.setPaintProperty(l, 'line-color', '#ffffff'); }catch(e){}
        try{ S.map.setPaintProperty(l, 'line-opacity', 0.55); }catch(e){}
        try{ S.map.setPaintProperty(l, 'line-width', 0.8); }catch(e){}
      });

      // Alliance / conflict highlighting source — country-boundaries tileset
      // promoteId maps iso_3166_1_numeric property → feature ID so setFeatureState works
      S.map.addSource('country-fills', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        promoteId: {country_boundaries: 'iso_3166_1_numeric'},
      });
      S.map.addLayer({
        id: 'alliance-fill',
        type: 'fill',
        source: 'country-fills',
        'source-layer': 'country_boundaries',
        paint: {
          'fill-color': ['coalesce', ['feature-state', 'fillColor'], 'rgba(0,0,0,0)'],
          'fill-opacity': 0.55,
        },
      }, 'waterway-label');
      S.map.addLayer({
        id: 'alliance-border',
        type: 'line',
        source: 'country-fills',
        'source-layer': 'country_boundaries',
        paint: {
          'line-color': ['coalesce', ['feature-state', 'strokeColor'], 'rgba(0,0,0,0)'],
          'line-width': 1.2,
          'line-opacity': 0.9,
        },
      }, 'waterway-label');

      // Re-render all overlays on every camera move
      S.map.on('render', function(){
        if(S.heatPts && S.heatPts.length) renderHeat(S.heatPts);
        renderLabels(S.heatPts || []);
        renderUKPoi();
        renderParlPoi();
        if(S_quake.on && S_quake.data.length) renderQuakes();
        if(S_flight.on && S_flight.data.length) renderFlights();
      });

      // Mouse events on the Mapbox container (replaces D3 path mousemove/click)
      var mapEl = document.getElementById('mapbox-map');
      mapEl.addEventListener('mousemove', function(evt){
        var r = document.getElementById('map-wrap').getBoundingClientRect();
        onHoverXY(evt, evt.clientX - r.left, evt.clientY - r.top);
      });
      mapEl.addEventListener('click', function(evt){
        var r = document.getElementById('map-wrap').getBoundingClientRect();
        var mouseX = evt.clientX - r.left, mouseY = evt.clientY - r.top;
        var pt = findNearestHot(mouseX, mouseY);
        if(pt) openPanel(pt.name);
      });
      mapEl.addEventListener('mouseleave', hideTip);

      // Zoom button controls
      document.getElementById('zoom-in').addEventListener('click', function(){
        S.map.zoomIn({duration: 300});
      });
      document.getElementById('zoom-out').addEventListener('click', function(){
        S.map.zoomOut({duration: 300});
      });
      document.getElementById('zoom-reset').addEventListener('click', function(){
        S.map.flyTo({center:[10,20], zoom:1.5, duration:500});
      });

      window.addEventListener('resize', debounce(handleResize, 200));
      renderParlPoi();
      res();
    });

    S.map.on('error', function(e){ console.error('[mapbox]', e); rej(e); });
  });
}

/* ═══════════════════════════════════════════════
   GLOBE BACK-FACE CULLING
   Returns false if the lng/lat is on the hidden
   hemisphere (facing away from the camera).
   Uses great-circle dot product: point · center > 0 means visible.
═══════════════════════════════════════════════ */
function isOnFrontFace(lng, lat){
  if(!S.map) return true;
  var c = S.map.getCenter();
  var clng = c.lng * Math.PI / 180;
  var clat = c.lat * Math.PI / 180;
  var plng = lng  * Math.PI / 180;
  var plat = lat  * Math.PI / 180;
  // Convert both to unit 3D vectors
  var cx = Math.cos(clat)*Math.cos(clng), cy = Math.cos(clat)*Math.sin(clng), cz = Math.sin(clat);
  var px = Math.cos(plat)*Math.cos(plng), py = Math.cos(plat)*Math.sin(plng), pz = Math.sin(plat);
  // Dot product — positive = same hemisphere as camera center
  return (cx*px + cy*py + cz*pz) > -0.05; // -0.05 gives a tiny bleed at the horizon edge
}

/* ═══════════════════════════════════════════════
   RESIZE
═══════════════════════════════════════════════ */
function handleResize(){
  var wrap = document.getElementById('map-wrap');
  S.W = wrap.clientWidth; S.H = wrap.clientHeight;
  S.svg.attr('width', S.W).attr('height', S.H);
  S.canvas.width = S.W; S.canvas.height = S.H;
  if(S.map) S.map.resize();
  if(S.heatPts && S.heatPts.length) renderHeat(S.heatPts);
  renderLabels(S.heatPts || []);
  renderUKPoi();
  renderParlPoi();
}

/* ═══════════════════════════════════════════════
   TOOLTIP
═══════════════════════════════════════════════ */
function findNearestHot(mouseX, mouseY){
  // Find nearest hotspot in screen-space (zoom-aware).
  // The cursor must be within SNAP_PX pixels of the country's dot on screen.
  var best=null, bd=Infinity;
  var SNAP_PX = 40; // screen-pixel radius — precise, easy to hover
  var k=S.zoomK||1, tx=S.zoomX||0, ty=S.zoomY||0;
  S.heatPts.forEach(function(p){
    if(!isOnFrontFace(p.lng, p.lat)) return; // globe: skip back hemisphere
    var raw=S.proj([p.lng,p.lat]);
    if(!raw||!isFinite(raw[0])) return;
    // Apply current zoom transform to get actual screen position
    var sx=raw[0]*k+tx, sy=raw[1]*k+ty;
    var d=Math.hypot(mouseX-sx, mouseY-sy);
    if(d<bd && d<SNAP_PX){bd=d;best=p;}
  });
  return best;
}

function onHoverXY(evt, mouseX, mouseY){
  var pt=findNearestHot(mouseX, mouseY);
  if(!pt){hideTip();return;}
  var r=document.getElementById('map-wrap').getBoundingClientRect();
  var arts=(S.byCountry[pt.name]||[]).slice(0,4);
  var x=mouseX+16, y=mouseY-10;
  if(x+250>S.W) x=evt.clientX-r.left-260;
  if(y+200>S.H) y=evt.clientY-r.top-200;

  var hlHtml=arts.map(function(a){
    return '<div class="tip-hl" onclick="openPanel(\''+escAttr(pt.name)+'\')">'
      +'<span class="tip-hl-src">'+esc(a.source)+'</span>'+esc(trunc(a.title,70))+'</div>';
  }).join('');

  document.getElementById('tip').innerHTML=
    '<div id="tip-head">'
      +'<div id="tip-country">'+esc(pt.name)+'</div>'
      +'<div id="tip-meta">'
        +'<span class="tip-stat"><span class="tip-heat-val">'+pt.count+'</span> articles</span>'
        +'<span class="tip-stat">Heat <span class="tip-heat-val">'+Math.round(pt.score*100)+'%</span></span>'
        +(pt.trend!==0?'<span class="tip-stat" style="color:'+(pt.trend>0?'#ff6644':'#44cc88')+'">'+(pt.trend>0?'▲':'▼')+Math.abs(pt.trend)+'</span>':'')
      +'</div>'
    +'</div>'
    +'<div id="tip-headlines">'+hlHtml+'</div>'
    +(arts.length?'<div id="tip-click-hint">Click country to see all headlines</div>':'');

  var tip=document.getElementById('tip');
  tip.style.left=x+'px'; tip.style.top=y+'px';
  tip.classList.remove('hidden');
}

function hideTip(){document.getElementById('tip').classList.add('hidden');}

/* ═══════════════════════════════════════════════
   SIDE PANEL
═══════════════════════════════════════════════ */
window.openPanel=function(name){
  S.openCountry=name;
  var arts=S.byCountry[name]||[];
  document.getElementById('panel-country').textContent=name;
  document.getElementById('panel-count').textContent=arts.length+' article'+(arts.length!==1?'s':'')+' in this cycle';
  var body=document.getElementById('panel-body');
  if(!arts.length){
    body.innerHTML='<div id="panel-empty">No headlines found for this region.</div>';
  } else {
    body.innerHTML=arts.map(function(a){
      var ago=timeAgo(a.date);
      return '<div class="panel-item" onclick="window.open(\''+escAttr(a.link)+'\',\'_blank\')">'
        +'<div class="panel-item-src">'+esc(a.source)+'</div>'
        +'<div class="panel-item-title">'+esc(a.title)+'</div>'
        +'<div class="panel-item-date">'+ago+'</div>'
        +'</div>';
    }).join('');
  }
  document.getElementById('panel').classList.add('open');
  hideTip();
};

document.getElementById('panel-close').addEventListener('click',function(){
  document.getElementById('panel').classList.remove('open');
  S.openCountry=null;
});

/* ═══════════════════════════════════════════════
   UK POI LAYER
   Shown only when zoom k >= 4 and viewport centred near UK
═══════════════════════════════════════════════ */
var UK_POI = [
  // ── GOVERNMENT / PARLIAMENT ──
  {name:'Houses of Parliament', lat:51.4995, lng:-0.1247, type:'parliament'},
  {name:'10 Downing Street',    lat:51.5034, lng:-0.1276, type:'government'},
  {name:'Buckingham Palace',    lat:51.5014, lng:-0.1419, type:'government'},
  {name:'MOD Main Building',    lat:51.5021, lng:-0.1261, type:'government'},
  // ── INTELLIGENCE ──
  {name:'MI5 — Thames House',   lat:51.4952, lng:-0.1271, type:'intelligence'},
  {name:'MI6 — Vauxhall Cross', lat:51.4876, lng:-0.1246, type:'intelligence'},
  {name:'GCHQ — Cheltenham',    lat:51.8993, lng:-2.0930, type:'intelligence'},
  {name:'Porton Down',          lat:51.1337, lng:-1.7334, type:'intelligence'},
  // ── FINANCE ──
  {name:'Bank of England',      lat:51.5142, lng:-0.0886, type:'finance'},
  // ── RAF BASES ──
  {name:'RAF Brize Norton',     lat:51.7499, lng:-1.5836, type:'airbase'},
  {name:'RAF Marham',           lat:52.6483, lng:0.5503,  type:'airbase'},
  {name:'RAF Lossiemouth',      lat:57.7053, lng:-3.3392, type:'airbase'},
  {name:'RAF Northolt',         lat:51.5530, lng:-0.4185, type:'airbase'},
  {name:'RAF Waddington',       lat:53.1662, lng:-0.5234, type:'airbase'},
  {name:'RAF Coningsby',        lat:53.0930, lng:-0.1662, type:'airbase'},
  // ── NAVAL BASES ──
  {name:'HMNB Portsmouth',      lat:50.7995, lng:-1.1108, type:'naval'},
  {name:'HMNB Devonport',       lat:50.3714, lng:-4.1749, type:'naval'},
  {name:'HMNB Clyde — Faslane', lat:56.0731, lng:-4.8126, type:'naval'},
  {name:'Britannia RNC Dartmouth',lat:50.3517,lng:-3.5783, type:'naval'},
  // ── ARMY ──
  {name:'Army HQ — Andover',    lat:51.2111, lng:-1.4864, type:'army'},
  {name:'Aldershot Garrison',   lat:51.2481, lng:-0.7661, type:'army'},
  {name:'Catterick Garrison',   lat:54.3794, lng:-1.7364, type:'army'},
  {name:'SAS HQ — Hereford',    lat:52.0553, lng:-2.7156, type:'army'},
  {name:'Northwood HQ (NATO)',  lat:51.6228, lng:-0.4237, type:'army'},
  {name:'Royal Military Academy Sandhurst', lat:51.3527, lng:-0.7524, type:'army'},
];

// Type → colour + icon character
var POI_STYLE = {
  parliament:   {color:'#ffe066', stroke:'#cc9900', icon:'⚖'},
  government:   {color:'#aaddff', stroke:'#4488bb', icon:'🏛'},
  intelligence: {color:'#cc88ff', stroke:'#7733cc', icon:'◈'},
  finance:      {color:'#66ffaa', stroke:'#228855', icon:'$'},
  airbase:      {color:'#66bbff', stroke:'#2255aa', icon:'✈'},
  naval:        {color:'#44ccff', stroke:'#1166aa', icon:'⚓'},
  army:         {color:'#ff9944', stroke:'#aa4400', icon:'★'},
};

// Minimum zoom level before POIs appear (k >= this value)
var POI_ZOOM_THRESHOLD = 4;

function renderUKPoi(){
  if(!S.poiG) return;
  S.poiG.selectAll('*').remove();

  // Use Mapbox zoom level (threshold ~5 ≈ old D3 k=4)
  var mapZoom = S.map ? S.map.getZoom() : 0;
  if(mapZoom < 5) return;

  // Check if UK is actually in viewport — use London as proxy
  var londonPx = S.proj([-0.12, 51.5]);
  if(!londonPx || !isFinite(londonPx[0])) return;
  if(londonPx[0] < -S.W*0.5 || londonPx[0] > S.W*1.5 || londonPx[1] < -S.H*0.5 || londonPx[1] > S.H*1.5) return;

  // Fade in: opacity scales from 0 at zoom 5 to 1 at zoom 7
  var opacity = Math.min(1, (mapZoom - 5) / 2);
  // Use zoom-derived k for label threshold
  var k = Math.pow(2, mapZoom - 1.8);

  UK_POI.forEach(function(poi){
    if(!isOnFrontFace(poi.lng, poi.lat)) return; // globe: skip back hemisphere
    var raw = S.proj([poi.lng, poi.lat]);
    if(!raw || !isFinite(raw[0])) return;
    var px = raw[0];
    var py = raw[1];
    // Skip if off-screen
    if(px < -20 || px > S.W+20 || py < -20 || py > S.H+20) return;

    var st = POI_STYLE[poi.type] || POI_STYLE.army;
    var r = 5;

    // Outer glow ring
    S.poiG.append('circle')
      .attr('cx', px).attr('cy', py).attr('r', r+3)
      .attr('fill', 'none')
      .attr('stroke', st.color)
      .attr('stroke-width', 1)
      .attr('opacity', opacity * 0.35)
      .attr('class','uk-poi');

    // Main dot
    S.poiG.append('circle')
      .attr('cx', px).attr('cy', py).attr('r', r)
      .attr('fill', st.color)
      .attr('stroke', st.stroke)
      .attr('stroke-width', 1.2)
      .attr('opacity', opacity)
      .attr('class','uk-poi')
      .attr('data-name', poi.name)
      .attr('data-type', poi.type)
      .attr('data-px', px)
      .attr('data-py', py)
      .style('pointer-events','all')
      .on('mouseenter', function(){
        var el = document.getElementById('uk-poi-tip');
        var typeSt = POI_STYLE[poi.type];
        el.innerHTML = '<div class="uk-poi-tip-type" style="color:'+typeSt.color+'">'+poi.type.toUpperCase()+'</div>'
          + '<div>' + poi.name + '</div>';
        var bx = px + 10, by = py - 10;
        if(bx + 200 > S.W) bx = px - 210;
        if(by < 10) by = py + 14;
        el.style.left = bx + 'px';
        el.style.top  = by + 'px';
        el.style.display = 'block';
      })
      .on('mouseleave', function(){
        document.getElementById('uk-poi-tip').style.display = 'none';
      });

    // Label text (only if zoom is high enough to avoid clutter)
    if(k >= 6){
      // Outline
      S.poiG.append('text')
        .attr('x', px).attr('y', py - r - 3)
        .attr('text-anchor','middle')
        .attr('font-size', 8)
        .attr('font-weight','700')
        .attr('font-family','Segoe UI,system-ui,sans-serif')
        .attr('fill','none')
        .attr('stroke','rgba(0,0,0,0.95)')
        .attr('stroke-width', 2.5)
        .attr('stroke-linejoin','round')
        .attr('opacity', opacity)
        .text(poi.name);
      // Foreground
      S.poiG.append('text')
        .attr('x', px).attr('y', py - r - 3)
        .attr('text-anchor','middle')
        .attr('font-size', 8)
        .attr('font-weight','700')
        .attr('font-family','Segoe UI,system-ui,sans-serif')
        .attr('fill', st.color)
        .attr('opacity', opacity)
        .text(poi.name);
    }
  });
}

/* ═══════════════════════════════════════════════
   PARLIAMENT POIs
   Major world parliaments — always visible, clickable
   to open the country news panel.
═══════════════════════════════════════════════ */
var PARL_POI = [
  {name:'Westminster',          country:'United Kingdom', lat:51.4995, lng:-0.1247},
  {name:'Élysée / Assemblée',   country:'France',         lat:48.8698, lng:2.3190},
  {name:'Bundestag',            country:'Germany',        lat:52.5186, lng:13.3762},
  {name:'Capitol Hill',         country:'United States',  lat:38.8899, lng:-77.0091},
  {name:'State Duma',           country:'Russia',         lat:55.7558, lng:37.6223},
  {name:'Zhongnanhai',          country:'China',          lat:39.9165, lng:116.3811},
  {name:'Lok Sabha',            country:'India',          lat:28.6176, lng:77.2079},
  {name:'Verkhovna Rada',       country:'Ukraine',        lat:50.4422, lng:30.5238},
  {name:'Knesset',              country:'Israel',         lat:31.7769, lng:35.2043},
  {name:'Majlis',               country:'Iran',           lat:35.6892, lng:51.3890},
  {name:'Diet',                 country:'Japan',          lat:35.6758, lng:139.7458},
  {name:'National Assembly',    country:'South Korea',    lat:37.5326, lng:126.9154},
  {name:'Grand National Assembly', country:'Turkey',      lat:39.9208, lng:32.8541},
  {name:'Federal Assembly',     country:'Brazil',         lat:-15.7997, lng:-47.8645},
  {name:'Parliament',           country:'South Africa',   lat:-33.9249, lng:18.4241},
  {name:'Cortes Generales',     country:'Spain',          lat:40.4293, lng:-3.6957},
  {name:'Palazzo Montecitorio', country:'Italy',          lat:41.9003, lng:12.4798},
  {name:'Riksdag',              country:'Sweden',         lat:59.3271, lng:18.0685},
  {name:'Sejm',                 country:'Poland',         lat:52.2133, lng:21.0244},
  {name:'Wolesi Jirga',         country:'Afghanistan',    lat:34.5289, lng:69.1923},
];

var S_parlG = null; // SVG group for parliament markers

function renderParlPoi(){
  if(!S.svg || !S.proj) return;
  if(!S_parlG){
    // Insert above mapG but below labels so labels stay on top
    S_parlG = S.svg.append('g').attr('id','parl-g').style('pointer-events','all');
  }
  S_parlG.selectAll('*').remove();

  var mapZoom = S.map ? S.map.getZoom() : 1.8;
  var k = Math.pow(2, mapZoom - 1.8);
  var iconR = Math.max(5, Math.min(11, 5 * Math.pow(k, 0.3)));

  PARL_POI.forEach(function(p){
    if(!isOnFrontFace(p.lng, p.lat)) return; // globe: skip back hemisphere
    var raw = S.proj([p.lng, p.lat]);
    if(!raw || !isFinite(raw[0])) return;
    var sx = raw[0], sy = raw[1];
    if(sx < -20 || sx > S.W+20 || sy < -20 || sy > S.H+20) return;

    var g = S_parlG.append('g')
      .attr('class','parl-marker')
      .attr('transform','translate('+sx+','+sy+')');

    // Outer glow ring
    g.append('circle')
      .attr('class','parl-ring')
      .attr('r', iconR + 4)
      .attr('fill','none')
      .attr('stroke','rgba(255,215,80,.25)')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.6);

    // Filled backing circle
    g.append('circle')
      .attr('r', iconR)
      .attr('fill','rgba(30,22,8,.88)')
      .attr('stroke','rgba(220,185,60,.6)')
      .attr('stroke-width', 1.2);

    // Dome SVG path (simplified parliament silhouette) — centered on 0,0
    var s = iconR * 0.7; // scale factor
    // Base rectangle + dome arc
    g.append('rect')
      .attr('x', -s).attr('y', -s*0.3)
      .attr('width', s*2).attr('height', s*0.8)
      .attr('rx', 1)
      .attr('fill','rgba(255,215,80,.75)');
    g.append('path')
      .attr('d','M'+-s+','+-s*0.3+' A'+s+','+s*0.9+' 0 0,1 '+s+','+-s*0.3)
      .attr('fill','rgba(255,215,80,.75)');
    // Central spire
    g.append('line')
      .attr('x1',0).attr('y1',-s*1.1)
      .attr('x2',0).attr('y2',-s*0.3)
      .attr('stroke','rgba(255,215,80,.9)')
      .attr('stroke-width', iconR * 0.12);

    // Invisible larger hit area for easy clicking
    g.append('circle')
      .attr('r', iconR + 6)
      .attr('fill','transparent')
      .attr('cursor','pointer')
      .on('mouseenter', function(evt){
        var tip = document.getElementById('parl-tip');
        tip.innerHTML = '<div class="pt-name">'+esc(p.name)+'</div>'
          + '<div class="pt-country">'+esc(p.country)+'</div>'
          + '<div class="pt-hint">Click to see news</div>';
        tip.style.display = 'block';
        var bx = document.getElementById('map-wrap').getBoundingClientRect();
        tip.style.left = Math.min(evt.clientX - bx.left + 14, bx.width - 180) + 'px';
        tip.style.top  = Math.max(evt.clientY - bx.top - 10, 4) + 'px';
      })
      .on('mouseleave', function(){
        document.getElementById('parl-tip').style.display = 'none';
      })
      .on('click', function(){
        document.getElementById('parl-tip').style.display = 'none';
        openPanel(p.country);
      });
  });
}

/* ═══════════════════════════════════════════════
   ALLIANCE HIGHLIGHTING
   ISO 3166-1 numeric codes from world-atlas TopoJSON
═══════════════════════════════════════════════ */
var ALLIANCES = {
  nato: {
    color: 'rgba(68,136,255,0.45)',
    stroke: 'rgba(68,136,255,0.8)',
    members: new Set([
      // NATO members (32 as of 2024)
      8,   // Albania
      56,  // Belgium
      100, // Bulgaria
      124, // Canada
      191, // Croatia
      203, // Czech Republic
      208, // Denmark
      233, // Estonia
      246, // Finland
      250, // France
      276, // Germany
      300, // Greece
      348, // Hungary
      352, // Iceland
      380, // Italy
      428, // Latvia
      440, // Lithuania
      442, // Luxembourg
      499, // Montenegro
      528, // Netherlands
      807, // North Macedonia
      578, // Norway
      616, // Poland
      620, // Portugal
      642, // Romania
      703, // Slovakia
      705, // Slovenia
      724, // Spain
      792, // Turkey
      826, // United Kingdom
      840, // United States
    ])
  },
  brics: {
    color: 'rgba(68,204,119,0.45)',
    stroke: 'rgba(68,204,119,0.8)',
    members: new Set([
      // BRICS+ (2024 expanded)
      76,  // Brazil
      156, // China
      818, // Egypt
      231, // Ethiopia
      356, // India
      364, // Iran
      784, // UAE
      643, // Russia
      682, // Saudi Arabia
      710, // South Africa
    ])
  },
  sco: {
    color: 'rgba(204,136,255,0.45)',
    stroke: 'rgba(204,136,255,0.8)',
    members: new Set([
      // Shanghai Cooperation Organisation
      156, // China
      356, // India
      398, // Kazakhstan
      417, // Kyrgyzstan
      586, // Pakistan
      643, // Russia
      762, // Tajikistan
      860, // Uzbekistan
      364, // Iran
      112, // Belarus
      50,  // Bangladesh
      784, // UAE
      792, // Turkey
    ])
  },
  g7: {
    color: 'rgba(255,204,68,0.45)',
    stroke: 'rgba(255,204,68,0.8)',
    members: new Set([
      124, // Canada
      250, // France
      276, // Germany
      380, // Italy
      392, // Japan
      826, // United Kingdom
      840, // United States
      // EU represented but not a country code
    ])
  }
};

var activeAlliance = null;

window.toggleAlliance = function(key){
  // Deactivate current
  if(activeAlliance){
    document.getElementById('btn-'+activeAlliance).classList.remove('active');
  }
  if(activeAlliance === key){
    // Toggle off
    activeAlliance = null;
    applyAllianceHighlight(null);
    return;
  }
  activeAlliance = key;
  document.getElementById('btn-'+key).classList.add('active');
  applyAllianceHighlight(key);
};

function applyAllianceHighlight(key){
  if(!S.map || !S.map.getSource('country-fills')) return;
  var alliance = key ? ALLIANCES[key] : null;
  // Clear all existing feature state first
  S.map.removeFeatureState({source:'country-fills', sourceLayer:'country_boundaries'});
  if(!alliance) return;
  // Set feature state for each member (ISO numeric → feature id via worldview_default filter)
  alliance.members.forEach(function(isoNum){
    S.map.setFeatureState(
      {source:'country-fills', sourceLayer:'country_boundaries', id: isoNum},
      {fillColor: alliance.color, strokeColor: alliance.stroke}
    );
  });
}

/* ═══════════════════════════════════════════════
   FETCH
═══════════════════════════════════════════════ */
function setFeedStatus(id,status){
  S.feedStatus[id]=status;
  renderFeedPills();
}

function renderFeedPills(){
  var html=FEEDS.map(function(f){
    var st=S.feedStatus[f.id]||'wait';
    return '<span class="feed-pill '+st+'" title="'+f.name+': '+st+'">'+f.id+'</span>';
  }).join('');
  document.getElementById('feed-pills').innerHTML=html;
}

function fetchFeed(feed){
  setFeedStatus(feed.id,'wait');
  var url=PROXY+encodeURIComponent(feed.url);
  var ctrl=new AbortController();
  var t=setTimeout(function(){ctrl.abort();},12000);
  return fetch(url,{signal:ctrl.signal})
    .then(function(r){clearTimeout(t);if(!r.ok)throw new Error(r.status);return r.json();})
    .then(function(d){
      if(d.status!=='ok') throw new Error(d.message||'feed error');
      setFeedStatus(feed.id,'ok');
      return (d.items||[]).map(function(it){
        return {
          title:(it.title||'').replace(/<[^>]+>/g,'').trim(),
          desc:(it.description||'').replace(/<[^>]+>/g,'').trim(),
          link:it.link||'',
          source:feed.name,
          date:new Date(it.pubDate||Date.now()),
        };
      });
    })
    .catch(function(e){
      clearTimeout(t);
      setFeedStatus(feed.id,'fail');
      console.warn('['+feed.id+']',e.message);
      return [];
    });
}

function fetchAll(){
  return Promise.allSettled(FEEDS.map(fetchFeed)).then(function(res){
    var all=[];
    res.forEach(function(r){if(r.status==='fulfilled')all.push.apply(all,r.value);});
    all.sort(function(a,b){return b.date-a.date;});
    return all;
  });
}

/* ═══════════════════════════════════════════════
   POLITICS FILTER
   Articles must contain at least one political/
   economic keyword to be counted.
═══════════════════════════════════════════════ */
var POL_RE = /\b(government|president|prime minister|minister|parliament|congress|senate|election|vote|policy|sanctions|military|troops|war|conflict|ceasefire|treaty|diplomat|diplomacy|foreign|nato|un |united nations|protest|coup|crisis|refugee|immigration|border|nuclear|missile|strike|attack|invasion|occupation|summit|bilateral|tariff|trade|economy|gdp|inflation|recession|central bank|federal reserve|debt|budget|deficit|oil|gas|energy|sanction|embargo|ally|alliance|security|intelligence|spy|espionage|arrest|trial|court|law|legislation|constitution|coup|terrorist|terrorism|insurgent|rebel|militia|ceasefire|peace|negotiat|accord|deal|agreement|geopolit|strategic|sovereignty|territory|annexation|blockade|siege|offensive|counteroffensive|airstrike|drone|weapon|arms|defense|forces|battalion|soldier|casualt|killed|dead|wounded|prisoner|captive|general|admiral|minister|chancellor|tsar|emperor|premier|secretary of state|foreign secretary|defense secretary|treasury|white house|kremlin|10 downing|elysee|bundestag|parliament)\b/i;

function isPolitical(article) {
  var txt = (article.title + ' ' + (article.desc || '')).toLowerCase();
  return POL_RE.test(txt);
}

/* ═══════════════════════════════════════════════
   EXTRACTION + NORMALIZATION
═══════════════════════════════════════════════ */
function extract(articles){
  var map={};
  var byC={};
  // filter to politics/economics only
  var filtered = articles.filter(isPolitical);
  filtered.forEach(function(a){
    var txt=(a.title+' '+a.title+' '+(a.desc||'')).toLowerCase().replace(/[^\w\s]/g,' ');
    var seen={};
    KW.forEach(function(kw){
      if(mkre(kw).test(txt)){
        var coord=C[kw]; var n=coord.name;
        if(!seen[n]){
          seen[n]=1;
          if(!map[n]) map[n]={lat:coord.lat,lng:coord.lng,name:n,count:0};
          map[n].count++;
          if(!byC[n]) byC[n]=[];
          if(byC[n].indexOf(a)<0) byC[n].push(a);
        }
      }
    });
  });
  S.byCountry=byC;
  // also store filtered for issues panel
  S.filteredArticles=filtered;
  return Object.values(map);
}

function normalize(pts){
  if(!pts.length) return [];
  var max=0;
  pts.forEach(function(p){if(p.count>max)max=p.count;});
  return pts.map(function(p){
    var prev=S.prevCounts[p.name]||0;
    return Object.assign({},p,{
      score:p.count/max,
      trend:p.count-prev,
    });
  });
}

/* ═══════════════════════════════════════════════
   HEATMAP RENDER  (two-pass: alpha map then colorize)
═══════════════════════════════════════════════ */
function lerpColor(t){
  // Daylight heat spectrum: gold outer glow → amber → scarlet → deep crimson
  var stops=[[0,[255,200,60]],[0.35,[255,100,20]],[0.7,[200,20,20]],[1,[100,0,30]]];
  var lo=stops[0],hi=stops[stops.length-1];
  for(var i=0;i<stops.length-1;i++){
    if(t>=stops[i][0]&&t<=stops[i+1][0]){lo=stops[i];hi=stops[i+1];break;}
  }
  var s=(hi[0]-lo[0])===0?0:(t-lo[0])/(hi[0]-lo[0]);
  return [
    ~~(lo[1][0]+s*(hi[1][0]-lo[1][0])),
    ~~(lo[1][1]+s*(hi[1][1]-lo[1][1])),
    ~~(lo[1][2]+s*(hi[1][2]-lo[1][2])),
  ];
}

function renderHeat(pts){
  var ctx=S.ctx;
  var W=S.W, H=S.H;
  var k=S.zoomK||1, tx=S.zoomX||0, ty=S.zoomY||0;

  // --- Pass 1: draw alpha blobs onto offscreen canvas ---
  var off=document.createElement('canvas');
  off.width=W; off.height=H;
  var octx=off.getContext('2d');
  octx.clearRect(0,0,W,H);

  pts.forEach(function(pt){
    if(!isOnFrontFace(pt.lng, pt.lat)) return; // globe: skip back hemisphere
    var px=S.proj([pt.lng,pt.lat]);
    if(!px||!isFinite(px[0])) return;
    // Apply zoom transform to pixel position
    var sx = px[0]*k + tx;
    var sy = px[1]*k + ty;
    // Base radius scales with zoom but caps so blobs shrink relative to map at high zoom
    var baseR = 28 + pt.score * 100;
    var r = baseR * Math.pow(k, 0.45); // grow slower than zoom so blobs shrink relative to countries
    var g=octx.createRadialGradient(sx,sy,0,sx,sy,r);
    g.addColorStop(0,'rgba(255,255,255,'+(.82+pt.score*.18)+')');
    g.addColorStop(0.3,'rgba(255,255,255,'+(.5+pt.score*.2)+')');
    g.addColorStop(0.7,'rgba(255,255,255,0.12)');
    g.addColorStop(1,'rgba(255,255,255,0)');
    octx.beginPath();
    octx.arc(sx,sy,r,0,Math.PI*2);
    octx.fillStyle=g;
    octx.fill();
  });

  // --- Pass 2: colorize the alpha map ---
  var idata=octx.getImageData(0,0,W,H);
  var data=idata.data;
  for(var i=0;i<data.length;i+=4){
    var a=data[i+3];
    if(a===0) continue;
    var t=a/255;
    var rgb=lerpColor(t);
    data[i]=rgb[0];
    data[i+1]=rgb[1];
    data[i+2]=rgb[2];
    data[i+3]=~~(a*0.88);
  }

  // --- Blur softly then draw ---
  ctx.clearRect(0,0,W,H);
  ctx.filter='blur('+Math.max(2, 7/k)+'px)'; // blur shrinks as you zoom in
  var tmp=document.createElement('canvas');
  tmp.width=W; tmp.height=H;
  tmp.getContext('2d').putImageData(idata,0,0);
  ctx.drawImage(tmp,0,0);
  ctx.filter='none';
}

/* ═══════════════════════════════════════════════
   COUNTRY LABELS (SVG, shown for hot countries)
═══════════════════════════════════════════════ */
function renderLabels(pts){
  if(!S.labelG) return;
  S.labelG.selectAll('*').remove();

  // Sort hottest first so important labels win collisions
  var sorted=pts.slice().sort(function(a,b){return b.score-a.score;});

  // Collision boxes for placed labels [x0,y0,x1,y1]
  var placed=[];
  var PAD=4; // padding around each label box

  function overlaps(box){
    for(var i=0;i<placed.length;i++){
      var b=placed[i];
      if(box[0]<b[2]+PAD && box[2]>b[0]-PAD && box[1]<b[3]+PAD && box[3]>b[1]-PAD) return true;
    }
    return false;
  }

  var k=S.zoomK||1, tx=S.zoomX||0, ty=S.zoomY||0;

  sorted.forEach(function(pt){
    if(!isOnFrontFace(pt.lng, pt.lat)) return; // globe: skip back hemisphere
    var raw=S.proj([pt.lng,pt.lat]);
    if(!raw||!isFinite(raw[0])) return;
    // Apply zoom to get screen position
    var px=[raw[0]*k+tx, raw[1]*k+ty];

    var hot=pt.score>.55;
    var mid=pt.score>.2;
    var dotR=hot?4.5:mid?3.5:2.5;
    var dotColor=hot?'#ff3300':mid?'#ff8800':'#ffbb00';
    var ringColor=hot?'#ff3300':'#ff8800';

    // Pulse ring — only for notable spots
    if(mid){
      S.labelG.append('circle')
        .attr('cx',px[0]).attr('cy',px[1]).attr('r',dotR)
        .attr('fill','none')
        .attr('stroke',ringColor)
        .attr('stroke-width',1.5)
        .attr('opacity',.6)
        .append('animate')
          .attr('attributeName','r')
          .attr('values',dotR+';'+(dotR+6)+';'+dotR)
          .attr('dur','2.2s').attr('repeatCount','indefinite');
    }

    // Solid dot — always shown for any hotspot
    S.labelG.append('circle')
      .attr('cx',px[0]).attr('cy',px[1]).attr('r',dotR)
      .attr('fill',dotColor)
      .attr('opacity',.95);

    // Label — only if it doesn't collide with an already-placed label
    var shortName=pt.name
      .replace('United States','US')
      .replace('United Kingdom','UK')
      .replace('United Arab Emirates','UAE')
      .replace('North Korea','N.Korea')
      .replace('South Korea','S.Korea')
      .replace('South Africa','S.Africa')
      .replace('Saudi Arabia','S.Arabia')
      .replace('New Zealand','N.Zealand');

    var fontSize=hot?11:10;
    var charW=fontSize*0.6; // approximate char width
    var labelW=shortName.length*charW;
    var labelH=fontSize+2;
    var lx=px[0]-labelW/2, ly=px[1]-dotR-labelH-3;
    var box=[lx, ly, lx+labelW, ly+labelH];

    if(!overlaps(box)){
      placed.push(box);

      // Outline (drawn behind for contrast)
      S.labelG.append('text')
        .attr('x',px[0]).attr('y',px[1]-dotR-5)
        .attr('text-anchor','middle')
        .attr('dominant-baseline','auto')
        .attr('font-size',fontSize)
        .attr('font-weight','700')
        .attr('font-family','Segoe UI,system-ui,sans-serif')
        .attr('fill','none')
        .attr('stroke','rgba(0,0,0,0.85)')
        .attr('stroke-width','3')
        .attr('stroke-linejoin','round')
        .text(shortName);

      // Foreground text
      S.labelG.append('text')
        .attr('x',px[0]).attr('y',px[1]-dotR-5)
        .attr('text-anchor','middle')
        .attr('dominant-baseline','auto')
        .attr('font-size',fontSize)
        .attr('font-weight','700')
        .attr('font-family','Segoe UI,system-ui,sans-serif')
        .attr('fill',hot?'#ffffff':'#ffe8a0')
        .attr('opacity','1')
        .text(shortName);
    }
  });
}

/* ═══════════════════════════════════════════════
   TICKER
═══════════════════════════════════════════════ */
function updateTicker(articles){
  var inner=document.getElementById('t-inner');
  var items=articles.slice(0,60);
  if(!items.length){
    inner.innerHTML='<span class="ti">Could not load headlines — retrying…</span>';
    return;
  }
  var html=items.map(function(a){
    var link=escAttr(a.link);
    return '<span class="ti" onclick="window.open(\''+link+'\',\'_blank\')">'
      +'<span class="ti-src">'+esc(a.source)+'</span>'
      +esc(trunc(a.title,85))
      +'</span><span class="tdot"></span>';
  }).join('');

  inner.style.animation='none';
  inner.innerHTML=html+html;

  requestAnimationFrame(function(){requestAnimationFrame(function(){
    var half=inner.scrollWidth/2;
    var dur=half/80;
    document.getElementById('ts').textContent=
      '@keyframes ts{0%{transform:translateX(0)}100%{transform:translateX(-'+half+'px)}}';
    inner.style.animation='ts '+dur+'s linear infinite';
  });});
}

/* ═══════════════════════════════════════════════
   FEED PILLS
═══════════════════════════════════════════════ */
// Initialize all as 'wait'
FEEDS.forEach(function(f){S.feedStatus[f.id]='wait';});
renderFeedPills();

/* ═══════════════════════════════════════════════
   COUNTDOWN RING
═══════════════════════════════════════════════ */
function startCountdown(){
  S.countdown=REFRESH;
  var arc=document.getElementById('refresh-arc');
  var circumference=2*Math.PI*7; // r=7
  arc.setAttribute('stroke-dasharray',circumference);

  clearInterval(S.refreshTimer);
  S.refreshTimer=setInterval(function(){
    S.countdown--;
    var progress=1-(S.countdown/REFRESH);
    arc.setAttribute('stroke-dashoffset',circumference*(1-progress));
    if(S.countdown<=0) clearInterval(S.refreshTimer);
  },1000);
}

/* ═══════════════════════════════════════════════
   STATUS BAR
═══════════════════════════════════════════════ */
function setStatus(count,date){
  var el=document.getElementById('stat-articles');
  el.classList.remove('count-anim');
  void el.offsetWidth;
  el.textContent=count+' articles';
  el.classList.add('count-anim');
  document.getElementById('stat-updated').textContent='Updated '+date.toLocaleTimeString();
}

/* ═══════════════════════════════════════════════
   UPDATE CYCLE
═══════════════════════════════════════════════ */
var cycling=false;
function cycle(){
  if(cycling) return;
  cycling=true;

  // Fade canvas slightly to signal refresh
  S.canvas.classList.add('fading');

  fetchAll().then(function(articles){
    S.articles=articles;
    var raw=extract(articles);

    // Save prev counts for trend
    var newPrev={};
    S.heatPts.forEach(function(p){newPrev[p.name]=p.count;});
    S.prevCounts=newPrev;

    S.heatPts=normalize(raw);

    S.canvas.classList.remove('fading');
    renderHeat(S.heatPts);
    renderLabels(S.heatPts);
    updateTicker(articles);
    setStatus(articles.length,new Date());
    buildIssues(S.filteredArticles||articles);
    buildConflictList(S.filteredArticles||articles);
    renderUKPoi();
    renderParlPoi();

    // Refresh open panel if still open
    if(S.openCountry&&S.byCountry[S.openCountry]){
      openPanel(S.openCountry);
    }
  }).catch(function(e){
    console.error('cycle',e);
    S.canvas.classList.remove('fading');
  }).finally(function(){
    cycling=false;
    startCountdown();
    setTimeout(cycle,REFRESH*1000);
  });
}

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',function(){
  initMap().then(function(){
    document.getElementById('loader').classList.add('out');
    setTimeout(function(){
      var l=document.getElementById('loader');
      if(l) l.parentNode.removeChild(l);
    },600);
    cycle();
  }).catch(function(){
    setTimeout(function(){
      var l=document.getElementById('loader');
      if(l) l.classList.add('out');
    },3000);
  });
});

/* ═══════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════ */
function esc(s){
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escAttr(s){
  return String(s||'').replace(/'/g,'%27').replace(/"/g,'%22');
}
function trunc(s,n){return s.length>n?s.slice(0,n-1)+'…':s;}
function debounce(fn,ms){var t;return function(){clearTimeout(t);t=setTimeout(fn,ms);};}
function timeAgo(date){
  var s=Math.floor((Date.now()-date)/1000);
  if(s<60) return s+'s ago';
  if(s<3600) return Math.floor(s/60)+'m ago';
  if(s<86400) return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}

/* ═══════════════════════════════════════════════
   ISSUES PANEL
   Clusters articles into named global issues.
═══════════════════════════════════════════════ */
var ISSUE_DEFS = [
  {id:'ukraine-war',    name:'Ukraine War',           tag:'war',      color:'#ff5555',
   re:/ukraine|russia.*war|war.*russia|kyiv|zelensky|putin.*war|donbas|kherson|zaporizhzhia|mariupol|kharkiv|crimea|invasion.*ukraine|bakhmut/i},
  {id:'gaza-war',       name:'Gaza / Israel War',     tag:'war',      color:'#ff5555',
   re:/gaza|hamas|idf|netanyahu.*war|israel.*attack|west bank|rafah|jenin|occupied|ceasefire.*gaza|hostage.*israel|hezbollah/i},
  {id:'us-politics',    name:'US Politics',           tag:'politics', color:'#6699ff',
   re:/trump|biden|harris|congress|senate|white house|republican|democrat|oval office|2024 election|maga|supreme court/i},
  {id:'china-taiwan',   name:'China–Taiwan Tensions', tag:'security', color:'#ffaa44',
   re:/taiwan strait|china.*taiwan|taiwan.*china|pla.*taiwan|invasion.*taiwan|taipei.*beijing|xi.*taiwan/i},
  {id:'iran-nuclear',   name:'Iran Nuclear Crisis',   tag:'security', color:'#ffaa44',
   re:/iran.*nuclear|nuclear.*iran|iaea.*iran|iran.*uranium|iran.*sanction|tehran.*deal|jcpoa/i},
  {id:'trade-tariffs',  name:'Trade War & Tariffs',   tag:'economy',  color:'#44cc88',
   re:/tariff|trade war|import duty|export ban|trade sanction|wto|trade deal|protectionism|supply chain disruption/i},
  {id:'north-korea',    name:'North Korea Threat',    tag:'security', color:'#ffaa44',
   re:/north korea|kim jong|pyongyang.*missile|dprk|nuclear.*north korea|icbm.*korea/i},
  {id:'eu-politics',    name:'European Politics',     tag:'politics', color:'#6699ff',
   re:/european union|eu election|macron|scholz|meloni|far.right.*europe|europe.*election|brussels.*summit/i},
  {id:'climate-policy', name:'Climate & Energy Policy',tag:'diplomacy',color:'#bb88ff',
   re:/climate.*policy|carbon.*tax|green deal|cop\d+|paris agreement|net zero|renewable.*policy|energy transition|fossil fuel.*ban/i},
  {id:'migration',      name:'Migration Crisis',      tag:'diplomacy',color:'#bb88ff',
   re:/migrant|refugee|asylum seeker|border crisis|immigration policy|deportation|illegal crossing|mediterranean.*migrant/i},
  {id:'africa-conflict',name:'Africa Conflicts',      tag:'war',      color:'#ff5555',
   re:/sudan.*war|ethiopia.*tigray|mali.*coup|sahel|burkina faso|wagner.*africa|somalia.*al.shabaab|mozambique.*insurgent|congo.*rebel/i},
  {id:'global-economy', name:'Global Economy',        tag:'economy',  color:'#44cc88',
   re:/recession|inflation.*global|interest rate|federal reserve|imf|world bank|debt crisis|currency crisis|global growth/i},
];

window.toggleIssues = function(){
  document.getElementById('issues-panel').classList.toggle('open');
};

// Fixed geo coords for each issue (centroid of the conflict zone)
var ISSUE_COORDS = {
  'ukraine-war':   {lat:50.5, lng:30.5},
  'gaza-war':      {lat:31.4, lng:34.3},
  'us-politics':   {lat:38.9, lng:-77.0},
  'china-taiwan':  {lat:24.0, lng:121.0},
  'iran-nuclear':  {lat:35.7, lng:51.4},
  'trade-tariffs': {lat:39.9, lng:116.4},
  'north-korea':   {lat:39.0, lng:125.7},
  'eu-politics':   {lat:50.8, lng:4.4},
  'climate-policy':{lat:48.9, lng:2.3},
  'migration':     {lat:37.5, lng:14.0},
  'africa-conflict':{lat:15.5, lng:32.5},
  'global-economy':{lat:40.7, lng:-74.0},
};

function renderIssueMarkers(results){
  if(!S.issueG) return;
  S.issueG.selectAll('*').remove();
  var k=S.zoomK||1, tx=S.zoomX||0, ty=S.zoomY||0;

  results.forEach(function(r){
    var coord = ISSUE_COORDS[r.def.id];
    if(!coord) return;
    if(!isOnFrontFace(coord.lng, coord.lat)) return; // globe: skip back hemisphere
    var raw = S.proj([coord.lng, coord.lat]);
    if(!raw||!isFinite(raw[0])) return;
    var sx = raw[0]*k + tx;
    var sy = raw[1]*k + ty;
    var intensity = Math.min(1, r.count / 20);
    var sz = 5 + intensity * 8;

    // Diamond shape
    S.issueG.append('polygon')
      .attr('points', sx+','+(sy-sz)+' '+(sx+sz)+','+sy+' '+sx+','+(sy+sz)+' '+(sx-sz)+','+sy)
      .attr('fill', r.def.color)
      .attr('opacity', 0.85)
      .append('animate')
        .attr('attributeName','opacity')
        .attr('values','0.85;0.4;0.85')
        .attr('dur','3s').attr('repeatCount','indefinite');

    // Label
    S.issueG.append('text')
      .attr('x', sx).attr('y', sy - sz - 4)
      .attr('text-anchor','middle')
      .attr('font-size', 8)
      .attr('font-weight','700')
      .attr('font-family','Segoe UI,system-ui,sans-serif')
      .attr('fill','none')
      .attr('stroke','rgba(0,0,0,0.9)')
      .attr('stroke-width','2.5')
      .attr('stroke-linejoin','round')
      .text(r.def.name);
    S.issueG.append('text')
      .attr('x', sx).attr('y', sy - sz - 4)
      .attr('text-anchor','middle')
      .attr('font-size', 8)
      .attr('font-weight','700')
      .attr('font-family','Segoe UI,system-ui,sans-serif')
      .attr('fill', r.def.color)
      .text(r.def.name);
  });
}

function buildIssues(articles){
  var body = document.getElementById('issues-body');
  if(!articles || !articles.length){
    body.innerHTML='<div style="padding:16px;font-size:11px;color:#2d4560;font-style:italic">No articles loaded yet.</div>';
    return;
  }

  var results = ISSUE_DEFS.map(function(def){
    var matched = articles.filter(function(a){
      return def.re.test(a.title+' '+(a.desc||''));
    });
    // collect countries involved
    var countries = {};
    matched.forEach(function(a){
      var txt = (a.title+' '+(a.desc||'')).toLowerCase();
      KW.forEach(function(kw){
        if(mkre(kw).test(txt)) countries[C[kw].name]=1;
      });
    });
    return {
      def: def,
      count: matched.length,
      articles: matched.slice(0,8),
      countries: Object.keys(countries).slice(0,6),
    };
  }).filter(function(r){ return r.count > 0; })
    .sort(function(a,b){ return b.count - a.count; });

  if(!results.length){
    body.innerHTML='<div style="padding:16px;font-size:11px;color:#2d4560;font-style:italic">No issues detected in current cycle.</div>';
    return;
  }


  body.innerHTML = results.map(function(r){
    var d=r.def;
    var clist = r.countries.length
      ? r.countries.map(function(c){return '<span style="color:#6688aa">'+esc(c)+'</span>';}).join(' · ')
      : '<span style="color:#2d4560">global</span>';
    var arts = r.articles.map(function(a){
      return '<div style="padding:4px 0;font-size:10px;color:#557799;border-top:1px solid rgba(255,255,255,.03);cursor:pointer" onclick="window.open(\''+escAttr(a.link)+'\',\'_blank\')">'
        +'<span style="color:#ff7733;font-size:9px;font-weight:700;margin-right:4px">'+esc(a.source)+'</span>'
        +esc(trunc(a.title,72))
        +'</div>';
    }).join('');
    return '<div class="issue-item">'
      +'<span class="issue-tag '+d.tag+'">'+d.tag.toUpperCase()+'</span>'
      +'<div class="issue-name"><span class="issue-dot" style="background:'+d.color+'"></span>'+esc(d.name)+'</div>'
      +'<div class="issue-count">'+r.count+' article'+(r.count!==1?'s':'')+' this cycle</div>'
      +'<div class="issue-countries">'+clist+'</div>'
      +'<div style="padding-top:4px">'+arts+'</div>'
      +'</div>';
  }).join('');
}

/* ═══════════════════════════════════════════════
   MARKETS BAR
   Uses Yahoo Finance v8 chart endpoint via corsproxy.io.
   Fetches each symbol independently in parallel.
═══════════════════════════════════════════════ */
var TICKERS = [
  {sym:'SPX',   yf:'^GSPC',   label:'S&P 500'},
  {sym:'NDX',   yf:'^IXIC',   label:'NASDAQ'},
  {sym:'DJI',   yf:'^DJI',    label:'Dow Jones'},
  {sym:'VIX',   yf:'^VIX',    label:'VIX'},
  {sym:'WTI',   yf:'CL=F',    label:'Oil WTI'},
  {sym:'XAU',   yf:'GC=F',    label:'Gold'},
  {sym:'BTC',   yf:'BTC-USD', label:'BTC'},
  {sym:'EUR',   yf:'EURUSD=X',label:'EUR/USD'},
  {sym:'DXY',   yf:'DX-Y.NYB',label:'DXY'},
  {sym:'TNX',   yf:'^TNX',    label:'10Y Yield'},
];

var MKT_REFRESH = 5 * 60 * 1000; // 5 min

function fmtPrice(p, sym) {
  if (p == null || isNaN(p)) return '—';
  if (sym === 'BTC') return '$' + p.toLocaleString('en-US', {maximumFractionDigits:0});
  if (sym === 'EUR') return p.toFixed(4);
  if (sym === 'DXY' || sym === 'TNX' || sym === 'VIX') return p.toFixed(2);
  if (p >= 1000) return p.toLocaleString('en-US', {maximumFractionDigits:2});
  return p.toFixed(2);
}

function fmtChg(chg, pct) {
  if (chg == null || isNaN(chg)) return '—';
  var sign = chg >= 0 ? '+' : '';
  return sign + pct.toFixed(2) + '%';
}

function fetchOneTicker(t) {
  var url = 'https://query1.finance.yahoo.com/v8/finance/chart/' +
    encodeURIComponent(t.yf) + '?interval=1d&range=1d';
  var proxy = 'https://corsproxy.io/?' + encodeURIComponent(url);
  return fetch(proxy, {cache:'no-store'})
    .then(function(r){ return r.json(); })
    .then(function(d){
      var meta = d.chart && d.chart.result && d.chart.result[0] && d.chart.result[0].meta;
      if (!meta) return {yf: t.yf, price: null, chg: null, pct: null};
      var price = meta.regularMarketPrice;
      var prev  = meta.chartPreviousClose || meta.previousClose || price;
      var chg   = price - prev;
      var pct   = prev ? (chg / prev) * 100 : 0;
      return {yf: t.yf, price: price, chg: chg, pct: pct};
    })
    .catch(function(){ return {yf: t.yf, price: null, chg: null, pct: null}; });
}

function fetchMarkets() {
  Promise.allSettled(TICKERS.map(fetchOneTicker))
    .then(function(results){
      var data = results.map(function(r){ return r.status === 'fulfilled' ? r.value : null; });
      renderMarkets(data);
    });
}

function renderMarkets(results) {
  var bar = document.getElementById('markets');
  var loading = document.getElementById('mkt-loading');
  if (loading) loading.remove();

  var old = bar.querySelectorAll('.mkt');
  old.forEach(function(el){ el.remove(); });

  var updEl = document.getElementById('mkt-updated');

  TICKERS.forEach(function(t, i){
    var r = results[i];
    var price = r ? r.price : null;
    var chg   = r ? r.chg   : null;
    var pct   = r ? r.pct   : null;

    var chgClass = 'flat';
    if (chg != null) chgClass = chg > 0 ? 'up' : chg < 0 ? 'dn' : 'flat';

    var div = document.createElement('div');
    div.className = 'mkt';
    div.title = t.label;
    div.innerHTML =
      '<span class="mkt-sym">' + t.sym + '</span>' +
      '<span class="mkt-price">' + fmtPrice(price, t.sym) + '</span>' +
      '<span class="mkt-chg ' + chgClass + '">' + fmtChg(chg, pct) + '</span>';

    bar.insertBefore(div, updEl);
  });

  updEl.textContent = 'mkt ' + new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

  setTimeout(fetchMarkets, MKT_REFRESH);
}

/* ═══════════════════════════════════════════════
   DOOMSDAY CLOCK
   Current setting: 89 seconds to midnight (Jan 2025).
   The clock shows 11:58:31 — i.e. 89s before midnight.
   The second hand ticks in real time; minute/hour hands
   are fixed at the official setting position.
═══════════════════════════════════════════════ */
(function initDoomClock(){
  // Official setting: 89 seconds to midnight
  // = 11h 58m 31s  (midnight = 12:00:00)
  var SECS_TO_MIDNIGHT = 89;

  // Build tick marks
  var ticksG  = document.getElementById('doom-ticks');
  var minsG   = document.getElementById('doom-mins');
  var cx = 48, cy = 48, R = 40;

  for(var i = 0; i < 60; i++){
    var ang = (i / 60) * 2 * Math.PI - Math.PI/2;
    var isMaj = (i % 5 === 0);
    var r1 = isMaj ? R - 6 : R - 3;
    var x1 = cx + R * Math.cos(ang), y1 = cy + R * Math.sin(ang);
    var x2 = cx + r1 * Math.cos(ang), y2 = cy + r1 * Math.sin(ang);
    var line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    (isMaj ? minsG : ticksG).appendChild(line);
  }

  // Danger arc: from -90s to midnight (11:58:30 → 12:00:00)
  // Angle range: the arc from 11:58:30 to 12:00 on the clock face
  // 12:00:00 = top = -π/2 rad
  // 11:58:30 = 90 seconds before midnight
  // Each second on the minute ring = 360/3600 degrees = 0.1 deg
  // 90 seconds = 9 degrees before 12
  function arcPath(cx, cy, r, startDeg, endDeg){
    var s = (startDeg - 90) * Math.PI / 180;
    var e = (endDeg   - 90) * Math.PI / 180;
    var x1 = cx + r*Math.cos(s), y1 = cy + r*Math.sin(s);
    var x2 = cx + r*Math.cos(e), y2 = cy + r*Math.sin(e);
    var large = (endDeg - startDeg) > 180 ? 1 : 0;
    return 'M '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2;
  }
  // Arc from -9deg to 0deg (11:58:30 to 12:00)
  document.getElementById('doom-arc').setAttribute('d',
    arcPath(cx, cy, R-1, 360-9, 360));

  // Fixed hand angles for 11:58:31
  // Hour hand: 11h 58m 31s
  //   = (11 + 58/60 + 31/3600) / 12 * 360 = 359.14°
  var totalSecs = (12 * 3600) - SECS_TO_MIDNIGHT; // 43111 secs from midnight back
  var hourDeg  = (totalSecs / 43200) * 360;    // 43200 = 12h in seconds
  var minuteDeg = ((totalSecs % 3600) / 3600) * 360;

  function setHand(id, deg){
    var el = document.getElementById(id);
    var rad = (deg - 90) * Math.PI / 180;
    // hand drawn from center upward; rotate via transform
    el.setAttribute('transform','rotate('+deg+',48,48)');
  }
  setHand('doom-hour', hourDeg);
  setHand('doom-minute', minuteDeg);

  // Second hand ticks live — adds real drama
  function tickSecond(){
    var now = new Date();
    var s = now.getSeconds() + now.getMilliseconds()/1000;
    // Map real seconds to the "last 89 seconds" zone
    // We want the second hand to count down from 89 to 0 looping
    var secondsLeft = SECS_TO_MIDNIGHT - (s % SECS_TO_MIDNIGHT);
    // Angle: place at 89s-before-midnight position, ticking toward midnight
    var secAngle = ((43200 - secondsLeft) / 43200) * 360;
    document.getElementById('doom-second').setAttribute('transform','rotate('+secAngle+',48,48)');
    requestAnimationFrame(tickSecond);
  }
  tickSecond();
})();

// Kick off market fetch on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
  fetchMarkets();
});

/* ═══════════════════════════════════════════════
   EARTHQUAKE OVERLAY
   Data: USGS Earthquake Hazards Program (free, no key)
   Feed: magnitude 4.5+ quakes in the past 24 hours
   Refreshes every 5 minutes.
═══════════════════════════════════════════════ */
var QUAKE_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson';
var QUAKE_REFRESH = 5 * 60 * 1000; // 5 minutes
var S_quake = { on: false, data: [], timer: null, g: null };

window.toggleQuakes = function(){
  S_quake.on = !S_quake.on;
  var btn = document.getElementById('quake-btn');
  btn.classList.toggle('active', S_quake.on);
  if(S_quake.on){
    if(!S_quake.data.length) fetchQuakes();
    else renderQuakes();
  } else {
    if(S_quake.g) S_quake.g.selectAll('*').remove();
    document.getElementById('quake-tip').style.display='none';
    clearTimeout(S_quake.timer);
  }
}

function fetchQuakes(){
  if(!S_quake.on) return;
  fetch(QUAKE_URL)
    .then(function(r){ return r.json(); })
    .then(function(data){
      S_quake.data = (data.features || []).map(function(f){
        return {
          mag:   f.properties.mag,
          place: f.properties.place,
          time:  f.properties.time,
          depth: f.geometry.coordinates[2],
          lng:   f.geometry.coordinates[0],
          lat:   f.geometry.coordinates[1],
        };
      });
      renderQuakes();
      S_quake.timer = setTimeout(fetchQuakes, QUAKE_REFRESH);
    })
    .catch(function(e){ console.warn('[quakes]', e.message); });
}

function renderQuakes(){
  if(!S.svg || !S.proj) return;
  // Create group once, always on top of labels
  if(!S_quake.g){
    S_quake.g = S.svg.append('g').attr('class','quake-layer').style('pointer-events','all');
  }
  S_quake.g.selectAll('*').remove();
  if(!S_quake.on) return;

  var k = S.zoomK||1, tx = S.zoomX||0, ty = S.zoomY||0;

  S_quake.data.forEach(function(q){
    if(!isOnFrontFace(q.lng, q.lat)) return; // globe: skip back hemisphere
    var raw = S.proj([q.lng, q.lat]);
    if(!raw || !isFinite(raw[0])) return;
    var sx = raw[0]*k + tx, sy = raw[1]*k + ty;

    // Size by magnitude: M4.5→4px, M6→7px, M7→10px, M8+→14px
    var r = Math.max(4, Math.min(14, (q.mag - 4) * 3.5));
    // Colour by magnitude: M4.5=blue, M6=orange, M7+=red
    var col = q.mag >= 7 ? '#ff3322' : q.mag >= 6 ? '#ff9922' : '#44aaff';

    // Outer pulse ring
    S_quake.g.append('circle')
      .attr('cx', sx).attr('cy', sy).attr('r', r)
      .attr('fill','none')
      .attr('stroke', col)
      .attr('stroke-width', 1.2)
      .attr('opacity', 0.5)
      .append('animate')
        .attr('attributeName','r')
        .attr('values', r+';'+(r+8)+';'+r)
        .attr('dur', q.mag >= 6 ? '1.2s' : '2s')
        .attr('repeatCount','indefinite');

    // Solid dot
    S_quake.g.append('circle')
      .attr('cx', sx).attr('cy', sy).attr('r', r*0.55)
      .attr('fill', col)
      .attr('opacity', 0.85)
      .attr('cursor','pointer')
      .on('mouseenter', function(evt){
        var tip = document.getElementById('quake-tip');
        var age = timeAgo(new Date(q.time));
        tip.innerHTML =
          '<div class="qt-mag">M'+q.mag.toFixed(1)+'</div>'
          +'<div class="qt-loc">'+esc(q.place)+'</div>'
          +'<div class="qt-meta">Depth: '+Math.round(q.depth)+' km &nbsp;·&nbsp; '+age+'</div>';
        var r2 = document.getElementById('map-wrap').getBoundingClientRect();
        var tx2 = evt.clientX - r2.left + 14;
        var ty2 = evt.clientY - r2.top - 10;
        if(tx2 + 200 > S.W) tx2 = evt.clientX - r2.left - 210;
        tip.style.left = tx2+'px';
        tip.style.top  = ty2+'px';
        tip.style.display = 'block';
      })
      .on('mouseleave', function(){
        document.getElementById('quake-tip').style.display='none';
      });
  });
}

// renderQuakes is called from the zoom handler inside initMap (see zoom.on block)

/* ═══════════════════════════════════════════════
   FLIGHTS SYSTEM
   OpenSky Network free API — live aircraft positions
   Refreshes every 10 seconds. Cap 2000 aircraft.
═══════════════════════════════════════════════ */

var FLIGHT_URL = 'https://opensky-network.org/api/states/all';
var FLIGHT_REFRESH = 10 * 1000;
var FLIGHT_MAX = 2000;

// Military callsign prefixes (partial match)
var MIL_PREFIXES = ['RCH','DUKE','REACH','JAKE','FURY','IRON','HAWK','EAGLE','COBRA','VIPER',
  'KNIFE','GHOST','SHADOW','RAVEN','BISON','REAPER','PREDATOR','BUCK','RIDER',
  'RRR','GAF','NATO','USAF','ARMY','NAVY'];

// Emergency squawk codes
var EMERG_SQUAWK = {'7500':true,'7600':true,'7700':true};

// Active conflict zone rough bounding boxes [minLng,minLat,maxLng,maxLat]
var CONFLICT_ZONES = [
  {name:'Ukraine',bb:[22,44,40,53]},
  {name:'Gaza',bb:[34,31,36,32]},
  {name:'Lebanon',bb:[35,33,37,34]},
  {name:'Syria',bb:[35,32,42,38]},
  {name:'Yemen',bb:[42,12,54,20]},
  {name:'Sudan',bb:[22,8,38,23]},
  {name:'Myanmar',bb:[92,10,102,28]},
];

var S_flight = { on: false, data: [], timer: null, g: null };

function isMilitary(callsign){
  if(!callsign) return false;
  var cs = callsign.trim().toUpperCase();
  for(var i=0;i<MIL_PREFIXES.length;i++){
    if(cs.indexOf(MIL_PREFIXES[i])===0) return true;
  }
  return false;
}

function nearConflict(lng, lat){
  for(var i=0;i<CONFLICT_ZONES.length;i++){
    var z=CONFLICT_ZONES[i];
    // rough 3° buffer around each zone
    if(lng>=z.bb[0]-3 && lng<=z.bb[2]+3 && lat>=z.bb[1]-3 && lat<=z.bb[3]+3) return z.name;
  }
  return null;
}

window.toggleFlights = function(){
  S_flight.on = !S_flight.on;
  var btn = document.getElementById('flights-btn');
  btn.classList.toggle('active', S_flight.on);
  if(S_flight.on){
    if(!S_flight.data.length) fetchFlights();
    else renderFlights();
  } else {
    if(S_flight.g) S_flight.g.selectAll('*').remove();
    document.getElementById('flight-tip').style.display='none';
    clearTimeout(S_flight.timer);
  }
};

function fetchFlights(){
  if(!S_flight.on) return;
  fetch(FLIGHT_URL)
    .then(function(r){ return r.json(); })
    .then(function(d){
      if(!d || !d.states) return;
      var states = d.states;
      // Filter: must have lat/lng, not on ground, cap at FLIGHT_MAX
      var filtered = [];
      for(var i=0;i<states.length && filtered.length<FLIGHT_MAX;i++){
        var s=states[i];
        if(s[5]!=null && s[6]!=null && !s[8]){
          filtered.push({
            icao:    s[0],
            call:    (s[1]||'').trim() || s[0],
            country: s[2],
            lng:     s[5],
            lat:     s[6],
            alt:     s[7],    // baro altitude metres
            vel:     s[9],    // m/s
            hdg:     s[10],   // true track degrees
            squawk:  s[14],
          });
        }
      }
      S_flight.data = filtered;
      renderFlights();
      S_flight.timer = setTimeout(fetchFlights, FLIGHT_REFRESH);
    })
    .catch(function(e){
      console.warn('[flights]', e.message);
      S_flight.timer = setTimeout(fetchFlights, FLIGHT_REFRESH * 3);
    });
}

function renderFlights(){
  if(!S.svg || !S.proj) return;
  if(!S_flight.g){
    S_flight.g = S.svg.append('g').attr('id','flight-g');
  }
  S_flight.g.selectAll('*').remove();

  var k = S.zoomK || 1, tx = S.zoomX || 0, ty = S.zoomY || 0;

  S_flight.data.forEach(function(f){
    if(!isOnFrontFace(f.lng, f.lat)) return; // globe: skip back hemisphere
    var raw = S.proj([f.lng, f.lat]);
    if(!raw || !isFinite(raw[0])) return;
    var sx = raw[0]*k + tx, sy = raw[1]*k + ty;
    var hdg = f.hdg || 0;

    var mil = isMilitary(f.call);
    var emerg = f.squawk && EMERG_SQUAWK[f.squawk];
    var conflict = nearConflict(f.lng, f.lat);

    // Colour: red=emergency, orange=military, amber=conflict zone, green=normal
    var col = emerg ? '#ff3333' : mil ? '#ff8844' : conflict ? '#ffbb33' : '#44dd88';
    var size = emerg ? 6 : mil ? 5 : 4;

    // Arrow path pointing up, rotated by heading
    var arrowPath = 'M0,-'+size+' L'+(size*0.45)+','+size+' L0,'+(size*0.6)+' L-'+(size*0.45)+','+size+' Z';

    S_flight.g.append('path')
      .attr('d', arrowPath)
      .attr('transform', 'translate('+sx+','+sy+') rotate('+hdg+')')
      .attr('fill', col)
      .attr('opacity', emerg ? 1 : mil ? 0.9 : 0.65)
      .attr('stroke', emerg ? '#ff6666' : 'none')
      .attr('stroke-width', emerg ? 1 : 0)
      .attr('cursor','pointer')
      .on('mouseenter', function(evt){
        var tip = document.getElementById('flight-tip');
        var altFt = f.alt ? Math.round(f.alt * 3.28084) : null;
        var kts = f.vel ? Math.round(f.vel * 1.94384) : null;
        var html = '';
        if(emerg) html += '<div class="ft-mil">⚠ EMERGENCY SQUAWK '+f.squawk+'</div>';
        else if(mil) html += '<div class="ft-mil">✦ MILITARY</div>';
        else if(conflict) html += '<div class="ft-mil">⚑ NEAR CONFLICT: '+conflict+'</div>';
        html += '<div class="ft-call">'+f.call+'</div>';
        html += '<div class="ft-flag">'+f.country+'</div>';
        var meta = [];
        if(altFt) meta.push(altFt.toLocaleString()+' ft');
        if(kts) meta.push(kts+' kts');
        if(f.hdg!=null) meta.push(Math.round(f.hdg)+'°');
        html += '<div class="ft-meta">'+meta.join(' · ')+'</div>';
        tip.innerHTML = html;
        tip.style.display = 'block';
        var bx = document.getElementById('map-wrap').getBoundingClientRect();
        tip.style.left = Math.min(evt.clientX - bx.left + 14, bx.width - 200) + 'px';
        tip.style.top  = Math.max(evt.clientY - bx.top  - 10, 4) + 'px';
      })
      .on('mouseleave', function(){
        document.getElementById('flight-tip').style.display='none';
      });
  });
}

// renderFlights is called from the zoom handler inside initMap (see zoom.on block)

/* ═══════════════════════════════════════════════
   CONFLICTS SYSTEM
   Seed DB of known conflicts + live auto-detection
   from article feed. New conflicts emerge if two+
   countries co-appear with war/attack keywords at
   sufficient volume.
═══════════════════════════════════════════════ */

// ISO numeric codes for country highlighting (matches world-atlas d.id)
var COUNTRY_ISO = {
  'Russia':643,'Ukraine':804,'United States':840,
  'Israel':376,'Gaza':275,'Palestine':275,'West Bank':275,
  'Lebanon':422,'Iran':364,'Syria':760,'Yemen':887,'Iraq':368,
  'China':156,'Taiwan':158,'North Korea':408,'South Korea':410,
  'India':356,'Pakistan':586,'Afghanistan':4,'Myanmar':104,
  'Sudan':729,'South Sudan':728,'Ethiopia':231,'Somalia':706,
  'Mali':466,'Burkina Faso':854,'Niger':562,'Libya':434,
  'DR Congo':180,'Saudi Arabia':682,'Turkey':792,'Azerbaijan':31,
  'Armenia':51,'Serbia':688,'Kosovo':383,'Morocco':504,
  'Mexico':484,'Haiti':332,'Venezuela':862,'Colombia':170,
};

// Seed conflict database — history text, involved countries, detection keywords
var CONFLICT_SEED = [
  {
    id:'ukraine-russia',
    name:'Russia–Ukraine War',
    status:'active',
    countries:['Russia','Ukraine'],
    center:{lat:49,lng:33},
    zoom:4,
    started:'Feb 2022',
    history:'Russia launched a full-scale invasion of Ukraine on 24 February 2022, the largest conventional military attack in Europe since WWII. The conflict began with Russia\'s annexation of Crimea in 2014 and support for separatists in the Donbas. The invasion triggered massive Western sanctions, unprecedented military aid to Ukraine, and a global energy and food crisis. The front line has remained contested through 2024–25, with attritional fighting across eastern Ukraine.',
    detect:/ukraine|russia.*war|war.*russia|kyiv|zelensky|putin.*attack|donbas|kherson|zaporizhzhia|mariupol|kharkiv|bakhmut|kursk.*ukraine|ukraine.*offensive|russia.*missile/i,
  },
  {
    id:'israel-gaza',
    name:'Israel–Gaza War',
    status:'active',
    countries:['Israel','Gaza','Palestine','Lebanon'],
    center:{lat:31.5,lng:34.5},
    zoom:6,
    started:'Oct 2023',
    history:'Hamas launched a large-scale surprise attack on Israel on 7 October 2023, killing around 1,200 Israelis and taking over 250 hostages. Israel responded with a sustained air and ground campaign in Gaza, one of the most densely populated territories on earth. The conflict has killed tens of thousands of Palestinians, displaced most of Gaza\'s 2.3 million people, and triggered a humanitarian catastrophe. It has also drawn in Hezbollah in Lebanon, Houthi forces in Yemen, and Iran-backed militias across the region.',
    detect:/gaza|hamas|idf|netanyahu.*war|israel.*attack|rafah|jenin|west bank.*raid|hostage.*israel|hezbollah.*israel|israel.*lebanon|ceasefire.*gaza/i,
  },
  {
    id:'sudan-civil',
    name:'Sudan Civil War',
    status:'active',
    countries:['Sudan'],
    center:{lat:15,lng:30},
    zoom:4,
    started:'Apr 2023',
    history:'Fighting broke out in April 2023 between the Sudanese Armed Forces (SAF) and the paramilitary Rapid Support Forces (RSF). The conflict rapidly engulfed Khartoum and spread across Darfur and other regions. It has caused one of the world\'s worst humanitarian crises, with millions displaced and widespread reports of atrocities, particularly in Darfur. Both sides have been accused of war crimes.',
    detect:/sudan.*war|rsf.*sudan|sudan.*rsf|khartoum.*attack|darfur.*fighting|sudan.*ceasefire|sudan.*humanitarian/i,
  },
  {
    id:'myanmar-civil',
    name:'Myanmar Civil War',
    status:'active',
    countries:['Myanmar'],
    center:{lat:19,lng:96},
    zoom:4,
    started:'Feb 2021',
    history:'Following the military coup of February 2021 that ousted Aung San Suu Kyi\'s elected government, armed resistance erupted across Myanmar. The military junta faces a multi-front insurgency from the People\'s Defence Force, ethnic armed organisations, and resistance groups. By 2024, opposition forces had seized large swaths of territory, leaving the junta controlling mainly major cities. The conflict has caused hundreds of thousands of casualties and one of Asia\'s worst displacement crises.',
    detect:/myanmar.*military|junta.*myanmar|myanmar.*coup|burma.*war|myanmar.*resistance|tatmadaw|myanmar.*offensive|myanmar.*rebel/i,
  },
  {
    id:'ethiopia-conflict',
    name:'Ethiopia Conflicts',
    status:'active',
    countries:['Ethiopia','Sudan'],
    center:{lat:10,lng:39},
    zoom:4,
    started:'Nov 2020',
    history:'The Tigray War (2020–2022) was one of the world\'s deadliest recent conflicts, killing hundreds of thousands. Though a ceasefire was signed in 2022, Ethiopia continues to face armed insurgencies in Amhara and Oromia regions. Ethnic tensions and competition over resources remain acute, and the country hosts millions of internally displaced people.',
    detect:/ethiopia.*war|tigray|amhara.*militia|oromo.*conflict|ethiopia.*fighting|abiy.*war|ethiopia.*ceasefire/i,
  },
  {
    id:'sahel-insurgency',
    name:'Sahel Insurgency',
    status:'active',
    countries:['Mali','Burkina Faso','Niger'],
    center:{lat:14,lng:-1},
    zoom:4,
    started:'2012',
    history:'A jihadist insurgency linked to al-Qaeda (JNIM) and ISIS has destabilised the Sahel since the collapse of northern Mali in 2012. Military coups in Mali (2021), Burkina Faso (2022), and Niger (2023) brought juntas to power that expelled French forces and turned to Russia\'s Wagner/Africa Corps. Violence has displaced millions and the insurgency continues to spread toward coastal West Africa.',
    detect:/mali.*jihadist|burkina faso.*attack|niger.*insurgent|sahel.*terror|jnim|wagner.*mali|wagner.*burkina|sahel.*military|al.qaeda.*sahel/i,
  },
  {
    id:'china-taiwan',
    name:'China–Taiwan Tensions',
    status:'tension',
    countries:['China','Taiwan'],
    center:{lat:24,lng:120},
    zoom:5,
    started:'Ongoing',
    history:'Taiwan has governed itself since 1949, when the Republic of China retreated after losing the civil war to the Communist Party. Beijing claims Taiwan as its territory and has never renounced the use of force to reunify. Tensions have escalated significantly since 2020 with record numbers of PLA air incursions, large-scale military exercises, and increasingly assertive rhetoric from Beijing. The US, Japan, and other democracies have strengthened security commitments to Taiwan.',
    detect:/taiwan.*china|china.*taiwan|taiwan strait|pla.*taiwan|invasion.*taiwan|taipei.*beijing|xi.*taiwan|taiwan.*military|china.*blockade/i,
  },
  {
    id:'iran-escalation',
    name:'Iran Regional Escalation',
    status:'tension',
    countries:['Iran','Israel','United States','Yemen','Lebanon'],
    center:{lat:30,lng:50},
    zoom:4,
    started:'Oct 2023',
    history:'Since October 2023, Iran\'s network of proxy forces — Hezbollah in Lebanon, Hamas in Gaza, Houthis in Yemen, and militias in Iraq and Syria — has been drawn into the conflict. Iran itself launched unprecedented direct ballistic missile and drone attacks on Israel in April and October 2024. The US, UK, and Israel have struck Iranian proxies and assets. The risk of a direct Iran–Israel war involving US forces remains elevated.',
    detect:/iran.*attack|iran.*missile|irgc|iran.*proxy|houthi.*ship|red sea.*attack|iran.*israel|iran.*sanction.*escalat|iran.*nuclear.*strike/i,
  },
  {
    id:'drc-conflict',
    name:'DR Congo – M23 War',
    status:'active',
    countries:['DR Congo'],
    center:{lat:-1.5,lng:29.5},
    zoom:5,
    started:'2021',
    history:'The M23 rebel group, backed by Rwanda, launched a major offensive in eastern DRC in late 2021 and captured Goma, the region\'s largest city, in January 2025. The conflict is rooted in decades of regional rivalry, competition over vast mineral wealth, and the unresolved aftermath of the 1994 Rwandan genocide. It is one of the world\'s largest displacement crises with millions of IDPs.',
    detect:/congo.*m23|m23.*congo|goma.*attack|kivu.*fighting|drc.*war|rwanda.*congo|congo.*rebel/i,
  },
  {
    id:'somalia-alshabaab',
    name:'Somalia – Al-Shabaab',
    status:'active',
    countries:['Somalia'],
    center:{lat:5,lng:46},
    zoom:4,
    started:'2006',
    history:'Al-Shabaab, an al-Qaeda-affiliated militant group, controls large parts of rural Somalia and continues to carry out major attacks in Mogadishu and across the Horn of Africa. Despite sustained African Union and Somali military offensives, the group has proved resilient. It funds itself through a sophisticated taxation system in territory it controls and remains one of Africa\'s most dangerous terrorist organisations.',
    detect:/al.shabaab|somalia.*attack|mogadishu.*bomb|somalia.*militant|amisom|somalia.*offensive/i,
  },
  {
    id:'haiti-crisis',
    name:'Haiti Gang War',
    status:'active',
    countries:['Haiti'],
    center:{lat:18.9,lng:-72.3},
    zoom:5,
    started:'2021',
    history:'Following the assassination of President Jovenel Moïse in July 2021, Haiti descended into near-total state collapse. Gang federations, notably G9 led by Jimmy "Barbeque" Chérizier, seized control of large parts of Port-au-Prince. By early 2024, gangs controlled an estimated 80% of the capital. A Kenyan-led multinational security mission deployed in 2024 but has struggled against the scale of violence.',
    detect:/haiti.*gang|port.au.prince.*violence|haiti.*armed|haiti.*government.*collapse|kenya.*haiti|haiti.*humanitarian/i,
  },
];

// Live-detected conflicts (populated from articles each cycle)
var S_conflicts = {
  seed: CONFLICT_SEED,
  live: [],       // auto-detected new conflicts
  all: [],        // merged seed + live, sorted by article heat
  active: null,   // currently selected conflict id
};

/* ── Detection: find new conflict pairs from article co-occurrence ── */
var CONFLICT_TRIGGER = /\b(war|invasion|troops|military attack|airstrike|offensive|killed|ceasefire|fighting|battle|conflict|rebel|insurgent|coup|bombing|casualties)\b/i;

function detectLiveConflicts(articles){
  // For each article that mentions conflict keywords, collect which countries appear
  var pairCounts = {};
  articles.forEach(function(a){
    var txt = (a.title+' '+(a.desc||'')).toLowerCase();
    if(!CONFLICT_TRIGGER.test(txt)) return;
    // Which countries appear in this article?
    var found = [];
    KW.forEach(function(kw){
      if(mkre(kw).test(txt)){
        var n = C[kw].name;
        if(found.indexOf(n)<0) found.push(n);
      }
    });
    // Register pairs
    for(var i=0;i<found.length;i++){
      for(var j=i+1;j<found.length;j++){
        var pair = [found[i],found[j]].sort().join(':::');
        pairCounts[pair] = (pairCounts[pair]||0)+1;
      }
    }
  });

  // Any pair with 3+ co-occurrences becomes a live conflict
  var newLive = [];
  Object.keys(pairCounts).forEach(function(pair){
    if(pairCounts[pair] < 3) return;
    var parts = pair.split(':::');
    var c1 = parts[0], c2 = parts[1];
    // Skip if already covered by seed
    var covered = S_conflicts.seed.some(function(s){
      return s.countries.indexOf(c1)>=0 && s.countries.indexOf(c2)>=0;
    });
    if(covered) return;
    // Skip if same country twice (shouldn't happen but guard)
    if(c1 === c2) return;
    var existingId = 'live:'+pair;
    var existing = S_conflicts.live.find(function(l){ return l.id===existingId; });
    if(existing){
      existing.heat = pairCounts[pair];
      existing.isNew = false;
    } else {
      newLive.push({
        id: existingId,
        name: c1+' – '+c2,
        status: 'tension',
        countries: parts,
        center: midpoint(C[KW.find(function(k){return C[k].name===c1;})], C[KW.find(function(k){return C[k].name===c2;})]),
        zoom: 3,
        started: 'Emerging',
        history: 'This conflict pair was automatically detected from live news coverage. ' +
          pairCounts[pair]+' articles in the current cycle mention both '+c1+' and '+c2+
          ' alongside conflict-related keywords. Click live headlines below for sources.',
        detect: null,
        heat: pairCounts[pair],
        isNew: true,
      });
    }
  });

  // Merge new into live list
  newLive.forEach(function(n){ S_conflicts.live.push(n); });
  // Remove stale live entries (no longer appearing)
  S_conflicts.live = S_conflicts.live.filter(function(l){
    var pair = l.countries.slice().sort().join(':::');
    return (pairCounts[pair]||0) >= 3;
  });
}

function midpoint(c1, c2){
  if(!c1||!c2) return {lat:20,lng:0};
  return {lat:(c1.lat+c2.lat)/2, lng:(c1.lng+c2.lng)/2};
}

/* ── Build merged conflict list with article heat scores ── */
function buildConflictList(articles){
  detectLiveConflicts(articles);

  // Score each seed conflict by article matches
  var scored = S_conflicts.seed.map(function(cf){
    var matched = cf.detect ? articles.filter(function(a){
      return cf.detect.test(a.title+' '+(a.desc||''));
    }) : [];
    return Object.assign({}, cf, {heat: matched.length, articles: matched.slice(0,12), isNew: false});
  });

  // Merge with live
  var live = S_conflicts.live.map(function(lv){
    var matched = articles.filter(function(a){
      var txt = (a.title+' '+(a.desc||'')).toLowerCase();
      return lv.countries.every(function(c){
        var kws = KW.filter(function(k){ return C[k].name===c; });
        return kws.some(function(k){ return mkre(k).test(txt); });
      }) && CONFLICT_TRIGGER.test(txt);
    });
    return Object.assign({}, lv, {articles: matched.slice(0,8)});
  });

  S_conflicts.all = scored.concat(live).sort(function(a,b){ return b.heat-a.heat; });
  renderConflictDropdown();
}

/* ── Render the dropdown list ── */
function renderConflictDropdown(){
  var dd = document.getElementById('conflicts-dropdown');
  if(!S_conflicts.all.length){
    dd.innerHTML='<div style="padding:12px 14px;font-size:11px;color:#334455;font-style:italic">No conflicts detected yet.</div>';
    return;
  }
  dd.innerHTML = S_conflicts.all.map(function(cf){
    var dotColor = cf.status==='active' ? '#ff3333' : cf.status==='tension' ? '#ffaa33' : '#44aaff';
    var heatBar = cf.heat > 0 ? Math.min(cf.heat, 20) : 0;
    return '<div class="cf-item" onclick="openConflictPanel(\''+cf.id+'\')">'
      +'<div class="cf-dot" style="background:'+dotColor+'"></div>'
      +'<div class="cf-name">'+esc(cf.name)+(cf.isNew?'<span class="cf-new">NEW</span>':'')+'</div>'
      +(cf.heat>0?'<div class="cf-heat">'+cf.heat+' art</div>':'')
      +'</div>';
  }).join('');
}

/* ── Open a conflict: zoom map, highlight countries, show panel ── */
window.openConflictPanel = function(id){
  var cf = S_conflicts.all.find(function(c){ return c.id===id; });
  if(!cf) return;
  S_conflicts.active = id;

  // Close dropdown
  document.getElementById('conflicts-dropdown').classList.remove('open');

  // Highlight countries on map
  highlightConflictCountries(cf.countries);

  // Zoom to conflict center
  zoomToConflict(cf);

  // Fill panel
  document.getElementById('cp-title').textContent = cf.name;

  var statusLabel = cf.status==='active'?'ACTIVE WAR':cf.status==='tension'?'HIGH TENSION':'FROZEN';
  var statusClass = cf.status;
  document.getElementById('cp-meta').innerHTML =
    '<span class="cp-badge '+statusClass+'">'+statusLabel+'</span>'
    +(cf.started?'<span class="cp-badge frozen" style="color:#7a9abb;border-color:rgba(120,160,200,.2)">Since '+esc(cf.started)+'</span>':'')
    +(cf.heat>0?'<span class="cp-badge tension" style="color:#ff9944">'+cf.heat+' live articles</span>':'');

  document.getElementById('cp-countries').innerHTML = cf.countries.map(function(c){
    return '<span class="cp-country-tag" onclick="zoomToCountry(\''+escAttr(c)+'\')" title="Click to zoom">'+esc(c)+'</span>';
  }).join('');

  document.getElementById('cp-history-text').textContent = cf.history || 'No background available.';

  // Live articles
  var arts = cf.articles || [];
  var artHtml = arts.length
    ? arts.map(function(a){
        return '<div class="cp-article" onclick="window.open(\''+escAttr(a.link)+'\',\'_blank\')">'
          +'<div class="cp-article-src">'+esc(a.source)+'</div>'
          +'<div class="cp-article-title">'+esc(trunc(a.title,90))+'</div>'
          +'<div class="cp-article-ago">'+timeAgo(a.date)+'</div>'
          +'</div>';
      }).join('')
    : '<div id="cp-live-empty">No live articles matched this cycle.</div>';
  document.getElementById('cp-live-articles').innerHTML = artHtml;

  document.getElementById('conflict-panel').classList.add('open');
  // Close other panels
  document.getElementById('panel').classList.remove('open');
};

window.closeConflictPanel = function(){
  document.getElementById('conflict-panel').classList.remove('open');
  clearConflictHighlight();
  S_conflicts.active = null;
};

/* ── Country highlighting on map for conflicts ── */
function highlightConflictCountries(countryNames){
  if(!S.map || !S.map.getSource('country-fills')) return;
  // Clear first, then set conflict highlight
  S.map.removeFeatureState({source:'country-fills', sourceLayer:'country_boundaries'});
  countryNames.forEach(function(name){
    var isoNum = COUNTRY_ISO[name];
    if(!isoNum) return;
    S.map.setFeatureState(
      {source:'country-fills', sourceLayer:'country_boundaries', id: isoNum},
      {fillColor: 'rgba(255,60,60,0.55)', strokeColor: 'rgba(255,80,80,0.9)'}
    );
  });
}

function clearConflictHighlight(){
  if(!S.map || !S.map.getSource('country-fills')) return;
  S.map.removeFeatureState({source:'country-fills', sourceLayer:'country_boundaries'});
  if(activeAlliance) applyAllianceHighlight(activeAlliance);
}

/* ── Zoom the map to a conflict's center ── */
function zoomToConflict(cf){
  if(!S.map) return;
  // cf.zoom is approx D3 scale factor; convert to Mapbox zoom level
  var mapZoom = Math.max(1.8, Math.min(10, (cf.zoom || 4) + 1.5));
  S.map.flyTo({center:[cf.center.lng, cf.center.lat], zoom: mapZoom, duration: 700});
}

/* ── Zoom to a single country (from country tag click) ── */
window.zoomToCountry = function(name){
  if(!S.map) return;
  var kw = KW.find(function(k){ return C[k].name===name; });
  if(!kw) return;
  var coord = C[kw];
  S.map.flyTo({center:[coord.lng, coord.lat], zoom: 5.5, duration: 600});
};

/* ── Dropdown toggle ── */
window.toggleConflictsDropdown = function(){
  var dd = document.getElementById('conflicts-dropdown');
  dd.classList.toggle('open');
};

// Close dropdown when clicking outside
document.addEventListener('click', function(e){
  if(!document.getElementById('conflicts-wrap').contains(e.target)){
    document.getElementById('conflicts-dropdown').classList.remove('open');
  }
});

/* ── buildConflictList is called from cycle() after each fetch ── */

})();
