const fs = require('fs');
fs.readdir('.', (err, files) => {
if (err) {
return console.error("Error reading dir:", err);
}
console.log("Files in current directory:", files);
});
