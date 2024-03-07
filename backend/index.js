import express, { query } from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express(); // create an express app

app.use(express.json()); // make express app to understand json format
app.use(
  cors({
    origin: "http://localhost:3000", // Update the origin to match your React app's origin
  })
);

//---------------------------------------Database Connection-------------------
export const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: 3306,
  password: "root",
  database: "miriswatta_m_v",
});

db.connect((err) => {
  if (err) {
    console.log("connection error", err);
  } else {
    console.log("Mysql Connected...");
  }
});

//---------------------------------------all student details----------------
app.get("/student", (req, res) => {
  const q = "SELECT * FROM students";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json( result.splice(0, 15));
  });
});

//---------------------------------------Insert new student to the database----------------
app.post("/student", (req, res) => {
  const q =
    "INSERT INTO students (`studentFullName`, `address`, `indexNumber`, `dateOfBirth`, `grade`, `motherName`, `motherProfession`,`fatherName`, `fatherProfession`, `guardianName`, `guardianAddress`, `guardianContact`, `extraActivities`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";

  const values = [
    req.body.studentFullName,
    req.body.address,
    req.body.indexNumber,
    req.body.dateOfBirth,
    req.body.grade,
    req.body.motherName,
    req.body.motherProfession,
    req.body.fatherName,
    req.body.fatherProfession,
    req.body.guardianName,
    req.body.guardianAddress,
    req.body.guardianContact,
    req.body.extraActivities,
  ];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Add student successfully", data: result });
  });
});

//--------------------------------------------------Delete a student details by index number----------------
app.delete("/student/:indexNumber", (req, res) => {
  const index_number = req.params.indexNumber;
  const q = "DELETE FROM students WHERE indexNumber = ?";

  db.query(q, index_number, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Delete student successfully", data: result });
  });
});

//------------------------------------------------------------Update a student details by id----------------
app.put("/student/:id", (req, res) => {
  const id = req.params.id;
  const q =
    "UPDATE students SET studentFullName = ?, address = ?, indexNumber = ?, dateOfBirth = ?, grade = ?, motherName = ?, motherProfession = ?, fatherName = ?, fatherProfession = ?, guardianName = ?, guardianAddress = ?, guardianContact = ?, extraActivities = ? WHERE id = ?";
  const values = [
    req.body.studentFullName,
    req.body.address,
    req.body.indexNumber,
    req.body.dateOfBirth,
    req.body.grade,
    req.body.motherName,
    req.body.motherProfession,
    req.body.fatherName,
    req.body.fatherProfession,
    req.body.guardianName,
    req.body.guardianAddress,
    req.body.guardianContact,
    req.body.extraActivities,
    id,
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res
      .status(200)
      .json({ message: "Update student successfully", data: result });
  });
});

//-------------------------------------------------------Get a student details by id----------------
app.get("/student/:id", (req, res) => {
  const id = req.params.id;
  const q = "SELECT * FROM students WHERE id = ?";

  db.query(q, id, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
});

//--------------------------------------------------Search anything in the database----------------

// Update the route to accept query parameters
app.get("/search", (req, res) => {
  const searchTerm = req.query.searchTerm;
  const query = `SELECT * FROM students WHERE studentFullName LIKE '%${searchTerm}%' OR address LIKE '%${searchTerm}%' OR indexNumber LIKE '%${searchTerm}%' OR dateOfBirth LIKE '%${searchTerm}%' OR grade LIKE '%${searchTerm}%' OR motherName LIKE '%${searchTerm}%' OR motherProfession LIKE '%${searchTerm}%' OR fatherName LIKE '%${searchTerm}%' OR fatherProfession LIKE '%${searchTerm}%' OR guardianName LIKE '%${searchTerm}%' OR guardianAddress LIKE '%${searchTerm}%' OR guardianContact LIKE '%${searchTerm}%' OR extraActivities LIKE '%${searchTerm}%'`;

  db.query(query, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result);
    }
  });
});

//################################-TEACHERS-#####################
//-------------------fetch all teachers in database---------------
app.get("/teachers", (req, res) => {
  const q = "SELECT * FROM teachers";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json( result.splice(0, 15));
  });
});

//-------------------Insert new teacher deteails to the database----
app.post('/teachers', (req,res)=>{
  const q ="INSERT INTO teachers (teacherName, teacherIndex, contactNumber, address, age, qualification, tic) VALUES  (?,?,?,?,?,?,?) ";
  
})

app.listen(8800, () => {
  console.log("Server is running on port 8800...");
});
