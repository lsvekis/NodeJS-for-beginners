function fetchUserData(userId, callback) {
setTimeout(() => {
if (userId > 0) {
callback(null, { id: userId, name: "Diana" });
} else {
callback("User ID must be positive", null);
}
}, 700);
}
fetchUserData(-1, (err, data) => {
if (err) {
return console.error("Error in callback:", err);
}
console.log("User data:", data);
});
