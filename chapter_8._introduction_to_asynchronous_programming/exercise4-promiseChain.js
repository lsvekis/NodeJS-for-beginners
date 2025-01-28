function stepOne() {
return new Promise((resolve) => {
setTimeout(() => resolve("Step One Complete"), 300);
});
}
function stepTwo(prevMessage) {
return new Promise((resolve) => {
setTimeout(() => resolve(`${prevMessage}, Step Two Complete`), 300);
});
}
function stepThree(prevMessage) {
return new Promise((resolve) => {
setTimeout(() => resolve(`${prevMessage}, Step Three Complete`), 300);
});
}
stepOne()
.then((msg1) => stepTwo(msg1))
.then((msg2) => stepThree(msg2))
.then((finalMsg) => {
console.log("All steps done:", finalMsg);
})
.catch((err) => console.error("Error:", err));
