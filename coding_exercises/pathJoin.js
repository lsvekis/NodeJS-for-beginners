const path = require('path');
const dir = 'folder';
const file = 'test.txt';
const fullPath = path.join(__dirname, dir, file);
console.log("Full path:", fullPath);
