const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
const logLine = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
fs.appendFile('api_requests.log', logLine, err => {
if (err) console.error("Log error:", err);
});
res.writeHead(200);
res.end("Request logged");
});
server.listen(3005, () => console.log("Logging API at http://localhost:3005"));
