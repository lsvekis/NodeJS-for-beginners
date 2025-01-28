const http = require('http');
const server = http.createServer((req, res) => {
res.end("Hello with graceful shutdown!");
});
server.listen(3009, () => console.log("Server at http://localhost:3009"));
process.on('SIGINT', () => {
console.log("\nReceived SIGINT, shutting down...");
server.close(() => {
console.log("Server closed.");
process.exit(0);
});
});
