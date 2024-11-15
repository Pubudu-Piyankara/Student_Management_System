import db from "../Database.js";

const getAllStudents = (req, res) => {
    const q = "SELECT * FROM students";
    db.query(q, (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(result.splice(0, 15));
    });
}

const addStudent = (req, res) => {
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
}

const updateStudent = (req, res) => {
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
}

const deleteStudent = (req, res) => {
    const index_number = req.params.indexNumber;
  const q = "DELETE FROM students WHERE indexNumber = ?";

  db.query(q, index_number, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Delete student successfully", data: result });
  });
}

const getStudent = (req, res) => {
    const id = req.params.id;
  const q = "SELECT * FROM students WHERE id = ?";

  db.query(q, id, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
}


const getStudentCount = (req, res) => {
  const q = "SELECT COUNT(*) as StudentCount FROM students";

    db.query(q, (err, result) => {
        if (err) return res.status(500).json(err);
        const studentCount = result[0].StudentCount;
        return res.status(200).json({studentCount });
    });
    
}

export default {
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudentCount
}