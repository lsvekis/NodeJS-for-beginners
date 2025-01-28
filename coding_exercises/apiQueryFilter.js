const http = require('http');
const url = require('url');
const products = [
{ id: 1, name: "Pen" },
{ id: 2, name: "Pencil" },
{ id: 3, name: "Eraser" },
];
const server = http.createServer((req, res) => {
const parsed = url.parse(req.url, true);
if (parsed.pathname === '/products' && req.method === 'GET') {
const search = (parsed.query.search || "").toLowerCase();
const filtered = products.filter(p => p.name.toLowerCase().includes(search));
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(filtered));
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3003, () => console.log("Products API at http://localhost:3003"));
