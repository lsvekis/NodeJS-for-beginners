const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/api/hello' && req.method === 'GET') {
const data = { message: 'Hello, API!' };
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3001, () => {
console.log('Server running at http://localhost:3001');
});
