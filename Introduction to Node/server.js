// server.js
const http = require('http');
// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js HTTP Server!');
});
// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
