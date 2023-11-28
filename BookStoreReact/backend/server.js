const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookstore',
  port:3307
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Get all books
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

// Get a single book by ID
app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const sql = 'SELECT * FROM books WHERE id = ?';
  db.query(sql, [bookId], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).send('Book not found');
      }
    }
  });
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author, price } = req.body;
  const sql = 'INSERT INTO books (title, author, price) VALUES (?, ?, ?)';
  db.query(sql, [title, author, price], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Book added successfully');
    }
  });
});

// Add this route for user registration
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  // Implement user registration logic (e.g., insert the user into the database)
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('User registered successfully');
      res.status(201).send('User registered successfully');
    }
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Assuming you have a 'users' table with columns 'username' and 'password'
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing login query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        // Login successful
        res.status(200).json({ message: 'Login successful' });
      } else {
        // Login failed
        res.status(401).json({ error: 'Invalid username or password' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
