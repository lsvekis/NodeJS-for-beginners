const express = require('express');
const app = express();
const jokes = [
"Why don't programmers like nature? It has too many bugs.",
"How many programmers does it take to change a light bulb? None, it's a hardware problem.",
"Programmer: A machine that turns coffee into code."
];
app.get('/api/jokes/random', (req, res) => {
const randomIndex = Math.floor(Math.random() * jokes.length);
res.json({ joke: jokes[randomIndex] });
});
app.listen(4003, () => {
console.log('Joke API running at http://localhost:4003');
});
