function sum(a, b) {
return a + b;
}
module.exports = sum;
// sum.test.js (using Jest)
const sum = require('./sum');
test('adds 2 + 3 = 5', () => {
expect(sum(2, 3)).toBe(5);
});
