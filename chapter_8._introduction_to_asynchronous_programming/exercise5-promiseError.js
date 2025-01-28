function riskyOperation() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const success = Math.random() > 0.5; // 50% chance
if (success) {
resolve("Operation succeeded!");
} else {
reject("Operation failed!");
}
}, 400);
});
}
riskyOperation()
.then((msg) => console.log(msg))
.catch((err) => console.error("Error in promise:", err));
