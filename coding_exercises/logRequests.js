const http = require('http');
const server = http.createServer((req, res) => {
console.log(`Incoming request: ${req.method} ${req.url}`);
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end("Request logged");
});
server.listen(3004, () => console.log("Log server at http://localhost:3004"));
