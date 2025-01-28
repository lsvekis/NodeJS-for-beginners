const fs = require('fs');
const path = require('path');
function readDirectory(dirPath) {
fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
if (err) return console.error("Error:", err);
entries.forEach(entry => {
const fullPath = path.join(dirPath, entry.name);
if (entry.isDirectory()) {
console.log("Dir:", fullPath);
readDirectory(fullPath);
} else {
console.log("File:", fullPath);
}
});
});
}
readDirectory('.');
