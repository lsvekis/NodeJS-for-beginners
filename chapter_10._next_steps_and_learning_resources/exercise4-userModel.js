const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/testdb';
const userSchema = new mongoose.Schema({
name: String,
email: String,
age: Number
});
const User = mongoose.model('User', userSchema);
mongoose
.connect(uri)
.then(async () => {
console.log('MongoDB connected.');
// Create a new user
const newUser = new User({
name: 'Alice',
email: 'alice@example.com',
age: 25
});
const savedUser = await newUser.save();
console.log('User saved:', savedUser);
process.exit(0); // Exit script
})
.catch((err) => {
console.error('Connection error:', err);
});
