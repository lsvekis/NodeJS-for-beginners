const fs = require('fs');
const fileName = 'watchedFile.txt';
fs.watch(fileName, (eventType, filename) => {
if (filename) {
console.log(`File ${filename} changed! Event type: ${eventType}`);
} else {
console.log('Filename not provided');
}
});
// Keep the process alive
console.log(`Watching for changes in ${fileName}...`);
