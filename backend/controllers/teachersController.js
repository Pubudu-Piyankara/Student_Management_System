import db from '../index'
exports.getAllStudents = (req, res) => {
    const q = "SELECT * FROM teachers";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json( result.splice(0, 15));
  });
}