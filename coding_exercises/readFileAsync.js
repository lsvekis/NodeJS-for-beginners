const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
if (err) {
return console.error("Read error:", err);
}
console.log("File contents:", data);
});
