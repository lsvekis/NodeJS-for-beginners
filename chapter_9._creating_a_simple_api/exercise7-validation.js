const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/api/users' && req.method === 'POST') {
let body = '';
req.on('data', (chunk) => (body += chunk));
req.on('end', () => {
const parsed = JSON.parse(body);
if (!parsed.name) {
res.writeHead(400, { 'Content-Type': 'application/json' });
return res.end(JSON.stringify({ error: 'Name is required' }));
}
// Otherwise, success
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ status: 'User created', user: parsed }));
});
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3007, () => {
console.log('Validation server running at http://localhost:3007');
});
