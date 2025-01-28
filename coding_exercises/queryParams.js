const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);
if (parsedUrl.pathname === '/greet' && req.method === 'GET') {
const name = parsedUrl.query.name || 'Stranger';
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`Hello, ${name}!`);
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3007, () => console.log("Query server at http://localhost:3007"));
