function callbackStyle(cb) {
setTimeout(() => cb(null, "Old callback data"), 400);
}
function promiseStyle() {
return new Promise((resolve, reject) => {
callbackStyle((err, data) => {
if (err) reject(err);
else resolve(data);
});
});
}
promiseStyle()
.then(res => console.log("Converted to promise:", res))
.catch(err => console.error(err));
