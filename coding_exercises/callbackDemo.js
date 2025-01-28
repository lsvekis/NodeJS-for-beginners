function fetchData(callback) {
setTimeout(() => {
callback(null, "Fetched data!");
}, 1000);
}
fetchData((err, data) => {
if (err) return console.error("Error:", err);
console.log("Success:", data);
});
