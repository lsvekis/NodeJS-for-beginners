const http = require('http');
const data = { message: "Hello from a simple API" };
const server = http.createServer((req, res) => {
if (req.url === '/api' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3000, () => console.log("API server at http://localhost:3000"));
