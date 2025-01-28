let count = 0;
const intervalId = setInterval(() => {
count++;
console.log(`Count is: ${count}`);
if (count >= 5) {
console.log("Done counting.");
clearInterval(intervalId);
}
}, 1000);
