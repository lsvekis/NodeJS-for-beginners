console.log("Start");
setTimeout(() => {
console.log("Async message after 1 second");
}, 1000);
console.log("End");
Run:
node singleThread.js
