const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/data' && req.method === 'POST') {
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => {
const parsed = JSON.parse(body);
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ received: parsed }));
});
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3003, () => console.log("POST handler at http://localhost:3003"));
