function mightFail() {
return new Promise((resolve, reject) => {
setTimeout(() => {
reject("Something went wrong!");
}, 400);
});
}
async function handleAsyncError() {
try {
const data = await mightFail();
console.log("This will never print:", data);
} catch (error) {
console.error("Caught error in async/await:", error);
}
}
handleAsyncError();
