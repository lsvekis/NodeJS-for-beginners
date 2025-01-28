const fs = require('fs');
fs.mkdir('myNewDir', (err) => {
if (err) {
return console.error("Error creating directory:", err);
}
console.log("Directory created: myNewDir");
});
