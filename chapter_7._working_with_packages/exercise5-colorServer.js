const http = require('http');
const chalk = require('chalk');
const server = http.createServer((req, res) => {
console.log(chalk.blue(`Received request: ${req.method} ${req.url}`));
res.end('Check your console for a colorful log!');
});
server.listen(3005, () => {
console.log(chalk.green('Server running at http://localhost:3005'));
});
