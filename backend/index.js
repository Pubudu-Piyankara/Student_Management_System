import express from 'express';
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'test001'
});

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [
    req.body.email,
    req.body.password
  ]
  db.query(sql, values, (err, result) => {
    if (err) return res.json("LOgin Failed");
    return res.json(result);
  }
  );
});
 app.listen(3000, () => {
  console.log('Server is running on port 3000');
});