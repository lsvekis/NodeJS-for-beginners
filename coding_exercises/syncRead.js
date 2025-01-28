const fs = require('fs');
try {
const data = fs.readFileSync('test.txt', 'utf8');
console.log("File content:", data);
} catch (err) {
console.error("Error:", err);
}
