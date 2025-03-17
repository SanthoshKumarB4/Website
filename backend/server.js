const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'laptop_service' // Use the main database for service requests
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  const { username, password } = req.headers;

  // Hardcoded admin credentials (for simplicity)
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  if (username === adminUsername && password === adminPassword) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

// Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Hardcoded admin credentials (for simplicity)
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  if (username === adminUsername && password === adminPassword) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


// Create a new service request
app.post('/api/submit-request', (req, res) => {
  const { name, email, laptop_model, issue_description } = req.body;
  const unique_id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const sql = `INSERT INTO service_requests (name, email, laptop_model, issue_description, unique_id) 
               VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [name, email, laptop_model, issue_description, unique_id], (err, result) => {
    if (err) throw err;
    res.json({ unique_id });
  });
});

// Get service request status
app.get('/api/check-status/:unique_id', (req, res) => {
  const unique_id = req.params.unique_id;
  const sql = `SELECT * FROM service_requests WHERE unique_id = ?`;
  db.query(sql, [unique_id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Admin: Get all requests
app.get('/api/admin/requests', isAuthenticated, (req, res) => {
  const sql = `SELECT * FROM service_requests`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Admin: Update request status
app.put('/api/admin/update-status/:id', isAuthenticated, (req, res) => {
  const { status } = req.body;
  const id = req.params.id;
  const sql = `UPDATE service_requests SET status = ? WHERE id = ?`;
  db.query(sql, [status, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Status updated successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});