const http = require('http');
let items = [];
const server = http.createServer((req, res) => {
if (req.url === '/items' && req.method === 'POST') {
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => {
const newItem = JSON.parse(body);
items.push(newItem);
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(newItem));
});
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3001, () => console.log("API POST at http://localhost:3001"));
