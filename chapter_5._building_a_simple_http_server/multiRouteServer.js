const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Welcome to the Home Page!');
} else if (req.url === '/about') {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('This is the About Page.');
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Page Not Found.');
}
});
server.listen(3002, () => {
console.log('Multi-route server running at http://localhost:3002');
});
