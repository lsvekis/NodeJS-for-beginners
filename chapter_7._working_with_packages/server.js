const http = require('http');
const server = http.createServer((req, res) => {
res.end('Hello from a server watched by nodemon!');
});
server.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});
Now run:
nodemon server.js
Visit http://localhost:3000—you’ll see your message.
Edit server.js (for example, change the message).
nodemon restarts the server automatically—no manual intervention needed.
