function asyncOperation(callback) {
setTimeout(() => {
callback("Data loaded!");
}, 2000);
}
console.log("Before");
asyncOperation((message) => {
console.log("Message from asyncOperation:", message);
});
console.log("After");
