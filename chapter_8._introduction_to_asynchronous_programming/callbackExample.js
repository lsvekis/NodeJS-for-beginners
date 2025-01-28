function getUserData(userId, callback) {
// Simulate an asynchronous operation with setTimeout
setTimeout(() => {
const user = { id: userId, name: "Alice" };
callback(null, user); // (error, result)
}, 1000);
}
console.log("Before getUserData call...");
getUserData(42, (err, user) => {
if (err) {
return console.error("Error:", err);
}
console.log("User received:", user);
});
console.log("After getUserData call...");
