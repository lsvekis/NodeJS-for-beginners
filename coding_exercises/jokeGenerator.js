const express = require('express');
const app = express();
const jokes = [
"I'm reading a book about anti-gravity. It’s impossible to put down!",
"Did you hear about the mathematician who’s afraid of negative numbers?",
"Why do we tell actors to 'break a leg'? Because every play has a cast."
];
app.get('/joke', (req, res) => {
const randIndex = Math.floor(Math.random() * jokes.length);
res.json({ joke: jokes[randIndex] });
});
app.listen(4003, () => console.log("Joke generator at port 4003"));
