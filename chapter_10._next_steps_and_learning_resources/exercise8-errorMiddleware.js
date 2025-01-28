const express = require('express');
const app = express();
// JSON parse error simulation
app.get('/throw-error', (req, res, next) => {
try {
JSON.parse('invalidJSON');
} catch (err) {
next(err); // pass error to error-handling middleware
}
});
app.use((err, req, res, next) => {
console.error('Error middleware caught:', err.message);
res.status(500).json({ error: 'Internal Server Error' });
});
app.listen(4005, () => {
console.log('Error handling server at http://localhost:4005');
});
