const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
if (req.url === '/') {
const filePath = path.join(__dirname, 'index.html');
fs.readFile(filePath, (err, data) => {
if (err) {
res.writeHead(500);
return res.end("Error loading file");
}
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(data);
});
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3006, () => console.log("Static server at http://localhost:3006"));
