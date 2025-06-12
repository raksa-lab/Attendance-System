// backend/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,         // Docker port mapping from your screenshot
  user: 'root',       // Replace with your MySQL user
  password: 'raksa12534',  // Replace with your MySQL password
  database: 'attendance_system'   // Replace with your DB name
});

connection.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;
