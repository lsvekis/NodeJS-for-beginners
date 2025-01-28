const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/api/data' && req.method === 'POST') {
let body = '';
req.on('data', (chunk) => {
body += chunk;
});
req.on('end', () => {
const received = JSON.parse(body);
const response = {
status: 'success',
received
};
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(response));
});
} else {
res.writeHead(404);
res.end();
}
});
server.listen(3003, () => {
console.log('Server running at http://localhost:3003');
});
