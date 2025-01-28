const http = require('http');
let users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' }
];
const server = http.createServer((req, res) => {
// Parse URL and method
if (req.url === '/api/users' && req.method === 'GET') {
// Return JSON list of users
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(users));
} else if (req.url === '/api/users' && req.method === 'POST') {
// Collect data from request body
let body = '';
req.on('data', chunk => {
body += chunk;
});
req.on('end', () => {
const newUser = JSON.parse(body);
newUser.id = users.length + 1; // simple ID assignment
users.push(newUser);
res.writeHead(201, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(newUser));
});
} else {
// 404 if no route matches
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not Found');
}
});
server.listen(3000, () => {
console.log('API Server running at http://localhost:3000');
});
5. Testing the API
Using Postman
GET http://localhost:3000/api/users to see the JSON list of users.
POST http://localhost:3000/api/users with a JSON body like {"name": "Charlie"} to create a new user.
Using Browser fetch
Open your browser’s console (e.g., Chrome DevTools) and type:

fetch('http://localhost:3000/api/users')
.then(response => response.json())
.then(data => console.log(data));
Or use the Fetch API to POST (only if you have a web page served over something like a local server at a suitable address, else CORS might apply).
