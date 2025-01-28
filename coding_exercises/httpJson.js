const http = require('http');
const server = http.createServer((req, res) => {
const data = { status: 'OK', message: 'Hello JSON' };
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
});
server.listen(3001, () => {
console.log("JSON server at http://localhost:3001");
});
