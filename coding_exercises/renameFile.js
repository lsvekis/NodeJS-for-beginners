const fs = require('fs');
fs.rename('oldName.txt', 'newName.txt', (err) => {
if (err) {
return console.error("Rename error:", err);
}
console.log("File renamed successfully!");
});
