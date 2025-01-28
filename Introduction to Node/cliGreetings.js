const args = process.argv.slice(2); // skip first two default entries
const name = args[0] || "Stranger";
console.log(`Hello, ${name}!`);
