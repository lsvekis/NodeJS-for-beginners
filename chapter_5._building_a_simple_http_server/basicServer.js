const http = require('http');
// Create the server
const server = http.createServer((req, res) => {
// Set the response header: status code and content type
res.writeHead(200, { 'Content-Type': 'text/plain' });
// Send the response body
res.end('Hello from Node.js!');
});
// Start the server on port 3000
server.listen(3000, () => {
console.log('Server is running at http://localhost:3000');
});
