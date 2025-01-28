const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true); // 'true' parses query as an object
const name = parsedUrl.query.name || 'Stranger';
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`Hello, ${name}!`);
});
server.listen(3006, () => {
console.log('Query server running at http://localhost:3006');
});
