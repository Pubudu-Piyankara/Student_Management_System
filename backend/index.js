import express, { query } from "express";
import cors from "cors";
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import adminStaffRoutes from "./routes/adminStaffRoutes.js";

const app = express(); // create an express app

app.use(express.json()); // make express app to understand json format
// Update the origin to match your React app's origin
app.use(cors({origin: "http://localhost:3000", }));

//################################-STUDENTS-#####################
app.use("/student", studentRoutes);

//################################-TEACHERS-#####################
app.use("/teachers", teacherRoutes);

app.use("/announcement", announcementRoutes);
app.use("/admin", adminStaffRoutes);
app.listen(8000, () => {
  console.log("Server is running on port 8000...");
});
