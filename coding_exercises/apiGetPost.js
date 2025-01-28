const http = require('http');
let users = [];
const server = http.createServer((req, res) => {
if (req.url === '/users' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(users));
} else if (req.url === '/users' && req.method === 'POST') {
let body = '';
req.on('data', chunk => body += chunk);
req.on('end', () => {
const user = JSON.parse(body);
user.id = users.length + 1;
users.push(user);
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(user));
});
} else {
res.writeHead(404);
res.end("Not Found");
}
});
server.listen(3002, () => console.log("Users API at http://localhost:3002"));
