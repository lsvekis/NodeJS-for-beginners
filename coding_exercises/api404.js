const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/hello' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end("Hello!");
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end("Not Found");
}
});
server.listen(3007, () => console.log("404 API at http://localhost:3007"));
