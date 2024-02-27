import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";

type Props = {};

const Student = (props: Props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/pubu");
        setStudents(res.data); 
      } catch (err) {
        console.log(err);
      }
    }
    fetchStudents()
  }, [])
  return (
    <div className="grid grid-cols-2">
      <div>
        <SideBar />
      </div>
      
      <div>
      <h1>Students of the year</h1>
        {students.map((student: any) => (
          <div key={student.student_Id}>
            <h2>Student name :  {student.firstName} {student.lastName} </h2>
            <h4>{student.age}</h4>
            <h5>{student.student_Id}</h5>
            <h6>{student.sirName}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;