function quickTask() {
return new Promise((resolve) => {
setTimeout(() => resolve("Quick Task Finished!"), 200);
});
}
function slowTask() {
return new Promise((resolve) => {
setTimeout(() => resolve("Slow Task Finished!"), 600);
});
}
Promise.race([quickTask(), slowTask()])
.then((result) => {
console.log("Race winner:", result);
})
.catch((error) => {
console.error("Race error:", error);
});
