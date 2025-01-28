const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/api/check' && req.method === 'GET') {
// Example: return 202 Accepted with a custom header
res.writeHead(202, {
'Content-Type': 'application/json',
'X-Custom-Header': 'APICheck'
});
res.end(JSON.stringify({ message: 'Accepted for processing' }));
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Route not found');
}
});
server.listen(3005, () => {
console.log('Custom status server at http://localhost:3005');
});
