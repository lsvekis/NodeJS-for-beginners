// Using Node's built-in "fetch" from node >= 18 or installing 'node-fetch' in older versions
// For older Node versions: npm install node-fetch@2
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args)); // for Node < 18 snippet, if needed
(async () => {
try {
const response = await fetch('https://api.chucknorris.io/jokes/random');
const json = await response.json();
console.log('Random Chuck Norris Joke:', json.value);
} catch (error) {
console.error('Fetch error:', error);
}
})();
