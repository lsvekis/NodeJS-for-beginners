function failSometimes() {
return new Promise((resolve, reject) => {
if (Math.random() > 0.5) resolve("Success!");
else reject("Random Failure");
});
}
async function run() {
try {
const msg = await failSometimes();
console.log("Message:", msg);
} catch (err) {
console.error("Error caught:", err);
}
}
run();
