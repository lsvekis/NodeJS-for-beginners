function step(message) {
return new Promise(resolve => {
setTimeout(() => {
resolve(message + " -> next");
}, 300);
});
}
step("Start")
.then(res => step(res))
.then(res => step(res))
.then(final => console.log("Chained result:", final));
