const fs = require('fs');
fs.writeFileSync('log.txt', 'First log entry!\n', { flag: 'a' });
console.log("Log entry added.");
