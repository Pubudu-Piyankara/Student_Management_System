import db from "../Database.js";


 const getAllAnnouncements = async (req, res) => {
  const q = "SELECT * FROM announcement";
  db.query(q, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result.splice(0, 15));
  });
};

 const putAnnouncement = async (req, res) => {
   const q = "INSERT INTO announcement (`title`, `msgDescription`, `content`) VALUES (?,?,?)";
    const values = [
      req.body.title,
      req.body.msgDescription,
      req.body.content,
    ];
    db.query(q, values, (err, result) => {
      if (err) return res.status(500).json(err);
      return res
        .status(200)
        .json({ message: "Add announcement successfully", data: result });
    });
    };

 const deleteAnnouncement = async (req, res) => {
    const id = req.params.idMessage;
    const q = "DELETE FROM announcement WHERE idMessage = ?";
    db.query(q, id, (err, result) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json({ message: "Delete announcement successfully", data: result });
    });
    }

     const updateAnnouncement = async (req, res) => {
        const id = req.params.idMessage;
        const q = "UPDATE announcement SET title = ?, msgDescription = ?, content = ? WHERE idMessage = ?";
        const values = [
          req.body.title,
          req.body.msgDescription,
          req.body.content,
          id,
        ];
        db.query(q, values, (err, result) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json({ message: "Update announcement successfully", data: result });
        });
    }

     const getAnnouncement = async (req, res) => {
        const id = req.params.idMessage;
        const q = "SELECT * FROM announcement WHERE idMessage = ?";
        db.query(q, id, (err, result) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json(result);
        });
    }


export default { getAllAnnouncements, putAnnouncement, deleteAnnouncement, updateAnnouncement, getAnnouncement };