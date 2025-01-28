const express = require('express');
const app = express();
// Logger middleware
app.use((req, res, next) => {
console.log(`Logged ${req.method} ${req.url}`);
next();
});
app.get('/', (req, res) => {
res.send("Middleware test");
});
app.listen(4001, () => console.log("Middleware server at port 4001"));
