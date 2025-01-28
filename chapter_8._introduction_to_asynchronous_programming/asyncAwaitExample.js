function getUserDataPromise(userId) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (userId > 0) {
resolve({ id: userId, name: "Charlie" });
} else {
reject("Invalid user ID");
}
}, 1000);
});
}
async function showUserData() {
try {
console.log("Before awaiting user data...");
const user = await getUserDataPromise(5);
console.log("Async/Await User:", user);
console.log("After awaiting user data...");
} catch (err) {
console.error("Caught an error:", err);
}
}
showUserData();
