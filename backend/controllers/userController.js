import db from "../Database.js";

const addUser = (req, res) => {
  const q =
    "INSERT INTO users (`userName`, `password`, `email`) VALUES (?,?,?)";

  const values = [
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.role,
  ];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Add user successfully", data: result });
  });
}