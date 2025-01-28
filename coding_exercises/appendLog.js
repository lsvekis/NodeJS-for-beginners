const fs = require('fs');
const logEntry = `Log entry at ${new Date().toISOString()}\n`;
fs.appendFile('log.txt', logEntry, (err) => {
if (err) return console.error("Error:", err);
console.log("Log entry appended!");
});
