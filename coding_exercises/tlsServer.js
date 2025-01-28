const https = require('https');
const fs = require('fs');
const options = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem')
};
https.createServer(options, (req, res) => {
res.writeHead(200);
res.end("Hello over HTTPS!");
}).listen(3443, () => {
console.log("HTTPS server on https://localhost:3443");
});
