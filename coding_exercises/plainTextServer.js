const http = require('http');
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end("Hello from a simple HTTP server!");
});
server.listen(3000, () => console.log("Server at http://localhost:3000"));
