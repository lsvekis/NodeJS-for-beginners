const fs = require('fs');
fs.unlink('fileToRemove.txt', (err) => {
if (err) {
return console.error("Error deleting file:", err);
}
console.log("File removed successfully!");
});
