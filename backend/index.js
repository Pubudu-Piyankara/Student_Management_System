import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';


const app = express();


app.use(cors());


const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'root',
  database: 'sms'
}
);

db.connect((err) => {
  if (err) {
    console.log("connection error",err);
  } else {
    console.log('Mysql Connected...');
    db.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log( err);
      } else {
        console.log("result", result);
      }
    });
  }
});




// app.post('/login', (req, res) => {
//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//   const values = [
//     req.body.email,
//     req.body.password
//   ]
//   db.query(sql, values, (err, result) => {
//     if (err) return res.json("Login Failed");
//     return res.json(result);
//   }
//   );
// });


app.get("/student", (req, res) => {
  const q = "SELECT * FROM students";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
}
);

app.post("/student", (req, res) => {
  const q = "INSERT INTO students (firstName, lastName, sirName, Student_Id, age) VALUES (?,?,?,?,?)";
  const values = [
    "udan",
    "janat",
    "perera",
    4562,
    13
  ]
  db.query(q, values, (err, result) => {
    if (err) return res.json(err);
    return res.json("nfdklkdj");
  }); 
}
);



 app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

