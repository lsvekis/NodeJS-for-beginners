function getData() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Promise resolved data!");
}, 700);
});
}
getData()
.then(result => console.log(result))
.catch(err => console.error("Error:", err));
