const http = require('http');
const server = http.createServer((req, res) => {
const data = {
message: 'Hello JSON',
timestamp: new Date().toISOString()
};
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(data));
});
server.listen(3004, () => {
console.log('JSON server running at http://localhost:3004');
});
