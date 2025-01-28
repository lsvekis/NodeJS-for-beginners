const http = require('http');
const server = http.createServer((req, res) => {
if (req.url === '/accepted') {
res.writeHead(202);
res.end("Request accepted");
} else if (req.url === '/not-found') {
res.writeHead(404);
res.end("Resource not found");
} else {
res.writeHead(200);
res.end("Default response");
}
});
server.listen(3005, () => console.log("Status server at http://localhost:3005"));
