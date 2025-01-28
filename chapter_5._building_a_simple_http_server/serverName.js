const http = require('http');
const server = http.createServer((req, res) => {
const name = 'Alice'; // Replace with your own or retrieve from a variable
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`Hello, ${name}, from your Node.js server!`);
});
server.listen(3001, () => {
console.log('Name-based server running at http://localhost:3001');
});
