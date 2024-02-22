import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
const app = express();

app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'root',
  database: 'test'
}
);

db.connect((err) => {
  if (err) {
    console.log("connection error",err);
  } else {
    console.log('Mysql Connected...');
  }
});

app.get('/login', (req, res)=>{
  console.log("this is backend")
})


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

