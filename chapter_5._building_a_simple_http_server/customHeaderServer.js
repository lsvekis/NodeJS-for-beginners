const http = require('http');
const server = http.createServer((req, res) => {
// For demonstration, send a 202 (Accepted) status code
res.writeHead(202, {
'Content-Type': 'text/plain',
'X-Custom-Header': 'LearningNode'
});
res.end('Custom status code and header sent.');
});
server.listen(3009, () => {
console.log('Custom header server at http://localhost:3009');
});
