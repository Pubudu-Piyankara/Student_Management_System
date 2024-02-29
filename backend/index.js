import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Update the origin to match your React app's origin
}));



const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  port: 3306,
  password: 'root',
  database: 'sms'
}
);

db.connect((err) => {
  if (err) {
    console.log("connection error",err);
  } else {
    console.log('Mysql Connected...');
    // db.query("SELECT * FROM users", (err, result) => {
    //   if (err) {
    //     console.log( err);
    //   } else {
    //     console.log("result", result);
    //   }
    // });
  }
});

app.get("/student", (req, res) => {
  const q = "SELECT * FROM students";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json( result);
  });
});

app.post("/student", (req, res) => {
  const q = "INSERT INTO students (`firstName`, `lastName`, `sirName`, `student_Id`, `age`) VALUES (?,?,?,?,?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.sirName,
    req.body.Student_Id,
    req.body.age
  ]
  db.query(q, [values], (err, result) => {
    if (err) return res.json(err);
    return res.json("Add student successfully");
  }); 
}
);

// const options = {
//   key: fs.readFileSync('dist/openssl.key'),
//   cert: fs.readFileSync('dist/openssl.crt'),
//   passphrase: 'pubudu'
// };

// const server = https.createServer(options, app);


 app.listen(8800, () => {
  console.log('Server is running on port 443. are sure?');
});

