const http = require('http');
const server = http.createServer((req, res) => {
res.end('Graceful shutdown demo server');
});
server.listen(3010, () => {
console.log('Graceful server at http://localhost:3010');
});
process.on('SIGINT', () => {
console.log('\nReceived SIGINT. Shutting down...');
server.close(() => {
console.log('HTTP server closed. Goodbye!');
process.exit(0); // Exit the process
});
});
