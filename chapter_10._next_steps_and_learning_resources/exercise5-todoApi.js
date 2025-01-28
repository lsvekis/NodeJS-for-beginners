const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tododb').catch(console.error);
const todoSchema = new mongoose.Schema({
text: String,
completed: { type: Boolean, default: false }
});
const Todo = mongoose.model('Todo', todoSchema);
const app = express();
app.use(express.json());
// GET all todos
app.get('/api/todos', async (req, res) => {
const todos = await Todo.find({});
res.json(todos);
});
// POST new todo
app.post('/api/todos', async (req, res) => {
const newTodo = new Todo(req.body);
const saved = await newTodo.save();
res.status(201).json(saved);
});
// Mark complete
app.patch('/api/todos/:id', async (req, res) => {
const { id } = req.params;
const updated = await Todo.findByIdAndUpdate(id, req.body, { new: true });
if (!updated) {
return res.status(404).json({ error: 'Todo not found' });
}
res.json(updated);
});
app.listen(4002, () => {
console.log('To-Do API on http://localhost:4002');
});
