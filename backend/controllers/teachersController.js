import mysql from "mysql2";
const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  port: 3306,
  password: "root",
  database: "miriswatta_m_v",
});
const getAllTeachers = (req, res) => {
    const q = "SELECT * FROM teachers";
    db.query(q, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result.splice(0, 15));
    });
}

const addTeacher = (req, res) => {
  const q = "INSERT INTO teachers (teacherName, teacherIndex, contactNumber, address, age, qualification, tic) VALUES (?,?,?,?,?,?,?)";
  const values = [
    req.body.teacherName,
    req.body.teacherIndex,
    req.body.contactNumber,
    req.body.address,
    req.body.age,
    req.body.qualification,
    req.body.tic,
  ];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Add teacher successfully", data: result });
  });

}
export default {
    getAllTeachers,
    addTeacher,
};
