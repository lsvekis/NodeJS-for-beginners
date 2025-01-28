const http = require('http');
let items = [];
const server = http.createServer((req, res) => {
if (req.url === '/api/items' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(items));
} else if (req.url === '/api/items' && req.method === 'POST') {
let body = '';
req.on('data', chunk => (body += chunk));
req.on('end', () => {
const newItem = JSON.parse(body);
items.push(newItem);
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(newItem));
});
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3004, () => {
console.log('Items API on http://localhost:3004');
});
