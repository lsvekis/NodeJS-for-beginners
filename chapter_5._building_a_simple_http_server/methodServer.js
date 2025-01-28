const http = require('http');
const server = http.createServer((req, res) => {
if (req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('You made a GET request');
} else if (req.method === 'POST') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('You made a POST request');
} else {
res.writeHead(405, { 'Content-Type': 'text/plain' });
res.end('Method not allowed');
}
});
server.listen(3008, () => {
console.log('Method server running at http://localhost:3008');
});
