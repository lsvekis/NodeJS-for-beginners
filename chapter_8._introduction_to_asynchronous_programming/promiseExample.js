function getUserDataPromise(userId) {
return new Promise((resolve, reject) => {
setTimeout(() => {
// Simulated success scenario
if (userId > 0) {
resolve({ id: userId, name: "Bob" });
} else {
reject("Invalid user ID");
}
}, 1000);
});
}
console.log("Before getUserDataPromise call...");
getUserDataPromise(10)
.then((user) => {
console.log("Promise resolved with user:", user);
})
.catch((error) => {
console.error("Promise rejected with error:", error);
});
console.log("After getUserDataPromise call...");
