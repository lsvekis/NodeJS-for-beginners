function createDelay(msg, ms) {
return new Promise(resolve => {
setTimeout(() => resolve(msg), ms);
});
}
Promise.all([
createDelay("One", 500),
createDelay("Two", 300),
createDelay("Three", 700)
])
.then(results => {
console.log("All done:", results);
});
