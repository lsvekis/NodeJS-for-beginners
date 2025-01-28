const http = require('http');
const server = http.createServer((req, res) => {
const response = { status: 'success', data: [1, 2, 3] };
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(response));
});
server.listen(3002, () => console.log("JSON server at http://localhost:3002"));
