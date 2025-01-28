const fs = require('fs');
fs.watch('watchMe.txt', (eventType, filename) => {
console.log(`${filename} file changed! Event:`, eventType);
});
console.log("Watching watchMe.txt for changes...");
