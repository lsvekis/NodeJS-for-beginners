const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
if (req.url === '/api/log' && req.method === 'GET') {
const logEntry = `Request on ${new Date().toISOString()} - ${req.method} ${req.url}\n`;
fs.appendFile('api.log', logEntry, (err) => {
if (err) console.error('Failed to log:', err);
});
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ status: 'logged' }));
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3010, () => {
console.log('Logging API at http://localhost:3010');
});
