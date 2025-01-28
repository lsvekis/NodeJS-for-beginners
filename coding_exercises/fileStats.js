const fs = require('fs');
fs.stat('example.txt', (err, stats) => {
if (err) {
return console.error("Stat error:", err);
}
console.log("Is file:", stats.isFile());
console.log("Size in bytes:", stats.size);
});
