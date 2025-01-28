function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
console.log("Before await");
await delay(1000);
console.log("After 1 second");
}
main();
