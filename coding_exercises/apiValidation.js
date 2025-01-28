const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/items' && req.method === 'POST') {
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => {
const data = JSON.parse(body);
if (!data.name) {
res.writeHead(400, { 'Content-Type': 'application/json' });
return res.end(JSON.stringify({ error: "Name is required" }));
}
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ status: "Created", item: data }));
});
} else {
res.writeHead(404).end();
}
});
server.listen(3004, () => console.log("Validation API at http://localhost:3004"));
