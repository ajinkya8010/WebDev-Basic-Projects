const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "complaint_system",
  port:3307
});

// Express routes will be added here...
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO students (username, password) VALUES (?, ?)";
  db.query(query, [username, password], (err, result) => {
    if (err) throw err;
    res.send("Student registered successfully");
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM admins WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send("Admin logged in successfully");
    } else {
      res.status(403).send("Invalid credentials");
    }
  });
});

app.post("/complaint", (req, res) => {
  const { student_id, complaint_text } = req.body;
  const query =
    "INSERT INTO complaints (student_id, complaint_text) VALUES (?, ?)";
  db.query(query, [student_id, complaint_text], (err, result) => {
    if (err) throw err;
    res.send("Complaint submitted successfully");
  });
});

app.get("/complaints", (req, res) => {
  const query =
    "SELECT complaints.id, students.username AS student_name, complaints.complaint_text FROM complaints INNER JOIN students ON complaints.student_id = students.id";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/student/login', (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM students WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send("Student logged in successfully");
      } else {
        res.status(403).send("Invalid credentials");
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
