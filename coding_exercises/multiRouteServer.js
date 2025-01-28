const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end("Home Page");
} else if (req.url === '/about' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end("About Page");
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3001, () => console.log("Routes server at http://localhost:3001"));
