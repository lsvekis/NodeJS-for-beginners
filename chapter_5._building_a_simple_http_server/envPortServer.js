const http = require('http');
const PORT = process.env.PORT || 3003;
const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`Server running on port ${PORT}`);
});
server.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
});
