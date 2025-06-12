const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
