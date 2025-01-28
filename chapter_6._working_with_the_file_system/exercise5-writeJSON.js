const fs = require('fs');
const user = {
name: 'John Doe',
age: 30,
hobbies: ['reading', 'gaming', 'coding']
};
fs.writeFile('user.json', JSON.stringify(user, null, 2), (err) => {
if (err) {
return console.error('Error writing user.json:', err);
}
console.log('user.json has been created:', user);
});
