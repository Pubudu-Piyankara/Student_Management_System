import e from "express";
import mysql from "mysql2";
//---------------------------------------Database Connection-------------------
 const db = mysql.createConnection({
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

export default db;