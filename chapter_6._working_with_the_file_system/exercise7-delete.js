const fs = require('fs');
fs.unlink('fileToDelete.txt', (err) => {
if (err) {
return console.error('Could not delete file:', err);
}
console.log('fileToDelete.txt has been deleted.');
});
