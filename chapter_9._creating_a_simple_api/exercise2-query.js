const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
if (req.method === 'GET') {
const parsedUrl = url.parse(req.url, true); // parse with query
if (parsedUrl.pathname === '/api/greet') {
const name = parsedUrl.query.name || 'Stranger';
const data = { greeting: `Hello, ${name}!` };
res.writeHead(200, { 'Content-Type': 'application/json' });
return res.end(JSON.stringify(data));
}
}
res.writeHead(404);
res.end();
});
server.listen(3002, () => {
console.log('Server running at http://localhost:3002');
});
