const fs = require('fs');
fs.rename('oldName.txt', 'newName.txt', (err) => {
if (err) {
return console.error('Error renaming file:', err);
}
console.log('File renamed from oldName.txt to newName.txt');
});
