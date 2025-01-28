function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
(async function() {
let count = 0;
while (count < 5) {
console.log("Count:", count);
await sleep(1000);
count++;
}
console.log("Done");
})();
