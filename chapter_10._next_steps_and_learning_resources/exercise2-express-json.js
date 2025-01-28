const express = require('express');
const app = express();
app.get('/api/info', (req, res) => {
const info = {
message: 'Express with JSON response',
timestamp: new Date().toISOString()
};
res.json(info);
});
app.listen(4001, () => {
console.log('Server running at http://localhost:4001');
});
