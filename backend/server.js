const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  const { query } = req.query;
  if (query) {
    const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(query.toLowerCase())
    );
    return res.json(filteredUsers);
  }
  res.json(users); // Always return an array
});

app.post('/users', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required!' });
  }
  if (users.find((user) => user.username === username)) {
    return res.status(409).json({ error: 'Duplicate username not allowed!' });
  }
  users.push({ username });
  res.json({ username });
});

app.delete('/users', (req, res) => {
  const previousLength = users.length;
  users = [];
  if (previousLength === 0) {
    return res.status(200).json({ message: 'User list was already empty!' });
  }
  res.status(200).json({ message: 'Users cleared!' });
});

app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});
