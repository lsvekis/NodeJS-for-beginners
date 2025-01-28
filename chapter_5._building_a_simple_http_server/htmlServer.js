const http = require('http');
const server = http.createServer((req, res) => {
const html = `
<!DOCTYPE html>
<html>
<head><title>Node HTML</title></head>
<body>
<h1>Hello from an HTML Response!</h1>
<p>This is a simple HTML page served by Node.js.</p>
</body>
</html>
`;
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(html);
});
server.listen(3007, () => {
console.log('HTML server running at http://localhost:3007');
});
