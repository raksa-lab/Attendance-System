const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Example route to insert user attendance
app.post('/api/attendance', (req, res) => {
  const { name, date } = req.body;
  const sql = 'INSERT INTO attendance (name, date) VALUES (?, ?)';
  db.query(sql, [name, date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Attendance recorded', id: result.insertId });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
