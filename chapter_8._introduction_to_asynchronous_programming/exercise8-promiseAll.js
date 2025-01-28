function createPromise(value, delay) {
return new Promise((resolve) => {
setTimeout(() => resolve(value), delay);
});
}
async function parallelExecution() {
const [res1, res2, res3] = await Promise.all([
createPromise("Result 1", 500),
createPromise("Result 2", 300),
createPromise("Result 3", 700),
]);
console.log("All results:", res1, res2, res3);
}
parallelExecution();
