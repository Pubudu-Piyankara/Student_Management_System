import db from "../Database.js";

const addUser = (req, res) => {
  const q =
    "INSERT INTO users (`userName`,`email`, `password`, `role` ) VALUES (?,?,?,?)";

  const values = [
    req.body.userName,
    req.body.email,
    req.body.password,
    req.body.role,
  ];

  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Add user successfully", data: result });
  });
}

const getUser = (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ data: result });
  });
};

export default { addUser
  , getUser};