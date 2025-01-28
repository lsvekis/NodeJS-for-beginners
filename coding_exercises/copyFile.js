const fs = require('fs');
fs.copyFile('source.txt', 'dest.txt', (err) => {
if (err) return console.error("Copy error:", err);
console.log("File copied from source.txt to dest.txt");
});
