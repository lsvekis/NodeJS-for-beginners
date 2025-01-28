// This example won't use Express, but let's show how you'd do it differently.
const http = require('http');
// Raw Node HTTP server example
const rawServer = http.createServer((req, res) => {
if (req.url === '/api/raw' && req.method === 'GET') {
res.writeHead(200, { 'Content-Type': 'application/json' });
return res.end(JSON.stringify({ message: 'Raw Node.js route' }));
}
res.writeHead(404);
res.end();
});
rawServer.listen(3008, () => {
console.log('Raw server at http://localhost:3008');
});
/*
// Hypothetical Express usage (not fully executed here):
const express = require('express');
const app = express();
app.get('/api/express', (req, res) => {
res.json({ message: 'Express route' });
});
app.listen(3009, () => {
console.log('Express server at http://localhost:3009');
});
*/
