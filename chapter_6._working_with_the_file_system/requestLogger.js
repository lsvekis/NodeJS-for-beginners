const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
// Construct a log message
const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
// Write the log to a file (append mode)
fs.appendFile('server.log', logEntry, (err) => {
if (err) {
console.error('Failed to write to log file:', err);
}
});
// Send a response
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Request logged successfully!');
});
server.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
Create an HTTP server using the http module.
For every request, build a log entry that includes the timestamp, HTTP method, and URL.
Use fs.appendFile to add new log entries to server.log.
Respond with a success message.
Testing It:
Run the script:

node requestLogger.js
Visit http://localhost:3000 in your browser or send requests via command line (e.g., curl http://localhost:3000).
Check server.log to see each new request entry appended.
