const fs = require('fs');
fs.readFile('data.json', 'utf8', (err, jsonString) => {
if (err) {
return console.error('Error reading data.json:', err);
}
try {
const data = JSON.parse(jsonString);
console.log('Parsed JSON data:', data);
} catch (parseErr) {
console.error('Invalid JSON format:', parseErr);
}
});
