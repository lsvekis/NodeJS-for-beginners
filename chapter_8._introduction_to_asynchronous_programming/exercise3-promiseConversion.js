function fetchDataCallback(callback) {
setTimeout(() => {
callback(null, "Callback data");
}, 500);
}
// Convert the above function to return a Promise
function fetchDataPromise() {
return new Promise((resolve, reject) => {
fetchDataCallback((err, data) => {
if (err) return reject(err);
resolve(data);
});
});
}
// Test the promise
fetchDataPromise()
.then((result) => {
console.log("Promise result:", result);
})
.catch((err) => {
console.error("Promise error:", err);
});
