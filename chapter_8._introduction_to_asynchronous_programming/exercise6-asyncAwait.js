function getData() {
return new Promise((resolve) => {
setTimeout(() => resolve("Data retrieved"), 300);
});
}
async function showData() {
console.log("Starting async function...");
const result = await getData();
console.log("Result from getData:", result);
console.log("Async function complete.");
}
showData();
