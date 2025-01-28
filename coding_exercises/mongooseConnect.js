const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
.then(() => {
console.log("Connected to MongoDB!");
process.exit(0);
})
.catch(err => console.error("Error:", err));
