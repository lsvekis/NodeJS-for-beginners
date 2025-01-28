const { spawn } = require('child_process');
const ls = spawn('ls', ['-l']);
ls.stdout.on('data', (data) => {
