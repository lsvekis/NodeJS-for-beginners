const http = require('http');
const server = http.createServer((req, res) => {
// Very minimal CORS handling
res.setHeader('Access-Control-Allow-Origin', '*');
if (req.url === '/data' && req.method === 'GET') {
const data = { msg: "Hello with CORS" };
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
} else {
res.writeHead(404).end();
}
});
server.listen(3006, () => console.log("CORS API at http://localhost:3006"));
