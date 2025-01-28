function delay(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
async function doTasksWithDelay() {
console.log("Starting tasks...");
await delay(500);
console.log("Task 1 complete");
await delay(500);
console.log("Task 2 complete");
await delay(500);
console.log("Task 3 complete");
console.log("All tasks done");
}
doTasksWithDelay();
