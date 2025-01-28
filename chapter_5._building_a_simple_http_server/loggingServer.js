const http = require('http');
const server = http.createServer((req, res) => {
console.log(`Received request: ${req.method} ${req.url}`);
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Request logged to console');
});
server.listen(3005, () => {
console.log('Logging server running at http://localhost:3005');
});
