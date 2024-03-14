import db from "../Database.js";

const getAlladminStaffs = async (req, res) => {
  const q = "SELECT * FROM admin_Staff";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

const addadminStaff = async (req, res) => {
  const q = "INSERT INTO admin_Staff (`empName`, `empPosition`, `empContacts`, `empAdddress`, `empAge`) VALUES (?,?,?,?,?)";
  const values = [
    req.body.empName,
    req.body.empPosition,
    req.body.empContacts,
    req.body.empAdddress,
    req.body.empAge,
  ];
  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json({ message: "Add adminStaff successfully", data: result });
  });
}

const deleteadminStaff = async (req, res) => {
  const id = req.params.idStaff;
  const q = "DELETE FROM admin_Staff WHERE idStaff = ?";
  db.query(q, id, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Delete adminStaff successfully", data: result });
  });
}

const updateadminStaff = async (req, res) => {
  const id = req.params.idStaff;
  const q = "UPDATE admin_Staff SET empName = ?, empPosition = ?, empContacts = ?, empAdddress = ?, empAge = ? WHERE idStaff = ?";
  const values = [
    req.body.empName,
    req.body.empPosition,
    req.body.empContacts,
    req.body.empAdddress,
    req.body.empAge,
    id,
  ];
  db.query(q, values, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "Update adminStaff successfully", data: result });
  });
}

const getadminStaff = async (req, res) => {
  const id = req.params.idStaff;
  const q = "SELECT * FROM admin_Staff WHERE idStaff = ?";
  db.query(q, id, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
}

export default { getAlladminStaffs, addadminStaff, deleteadminStaff, updateadminStaff, getadminStaff };