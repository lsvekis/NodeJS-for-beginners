function quickTask() {
return new Promise(resolve => setTimeout(() => resolve("Quick!"), 200));
}
function slowTask() {
return new Promise(resolve => setTimeout(() => resolve("Slow!"), 600));
}
Promise.race([quickTask(), slowTask()])
.then(winner => console.log("Race winner:", winner));
