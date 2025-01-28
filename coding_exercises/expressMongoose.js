const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/userdb');
const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', UserSchema);
const app = express();
app.use(express.json());
app.post('/users', async (req, res) => {
const user = new User(req.body);
const saved = await user.save();
res.status(201).json(saved);
});
app.listen(4002, () => console.log("Express+Mongoose at port 4002"));
