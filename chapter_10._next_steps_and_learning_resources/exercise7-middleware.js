const express = require('express');
const app = express();
// Custom logger middleware
app.use((req, res, next) => {
console.log(`Incoming request: ${req.method} ${req.url}`);
next(); // proceed to next middleware or route
});
app.get('/', (req, res) => {
res.send('Middleware Example: check your console for logs.');
});
app.listen(4004, () => {
console.log('Middleware server at http://localhost:4004');
});
