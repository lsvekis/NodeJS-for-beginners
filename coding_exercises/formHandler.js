const http = require('http');
const htmlForm = `
<!DOCTYPE html>
<html>
<head><title>Form</title></head>
<body>
<form method="POST" action="/">
<input type="text" name="message" />
<button type="submit">Submit</button>
</form>
</body>
</html>
`;
const server = http.createServer((req, res) => {
if (req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(htmlForm);
} else if (req.method === 'POST') {
let body = '';
req.on('data', chunk => (body += chunk));
req.on('end', () => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end(`Received form data: ${body}`);
});
} else {
res.writeHead(404).end();
}
});
server.listen(3008, () => console.log("Form server at http://localhost:3008"));
