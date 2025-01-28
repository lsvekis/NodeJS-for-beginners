function delayedMessage(message, callback) {
setTimeout(() => {
callback(`Received message: ${message}`);
}, 500);
}
console.log("Start...");
delayedMessage("Hello Callback!", (result) => {
console.log(result);
});
console.log("End...");
