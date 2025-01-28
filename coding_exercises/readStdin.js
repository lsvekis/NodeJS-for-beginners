process.stdout.write("What's your name? ");
process.stdin.on('data', (data) => {
const name = data.toString().trim();
console.log(`Hello, ${name}!`);
process.exit();
});
Run:
node readStdin.js
