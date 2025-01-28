// (Not a server file, just an example usage in the browser console):
/*
fetch('http://localhost:3002/users')
.then(res => res.json())
.then(data => console.log("User list:", data));
fetch('http://localhost:3002/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: "Charlie" })
})
.then(res => res.json())
.then(data => console.log("New user:", data));
*/
console.log("See comment for fetch usage in the browser.");
