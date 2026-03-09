// Minimal .env loader — reads .env file if present (dev only)
// In production (Railway/Render) env vars are set in the dashboard
const fs = require('fs');
const p  = require('path').join(__dirname, '.env');
if (fs.existsSync(p)) {
  fs.readFileSync(p, 'utf8').split('\n').forEach(line => {
    const m = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  });
}
