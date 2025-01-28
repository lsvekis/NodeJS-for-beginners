function getUser(id, callback) {
setTimeout(() => {
if (id <= 0) {
return callback("Invalid ID", null);
}
callback(null, { id, name: "Alice" });
}, 500);
}
getUser(-1, (err, user) => {
if (err) return console.error("Error:", err);
console.log("User:", user);
});
