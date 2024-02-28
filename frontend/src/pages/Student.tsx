import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import CrudTab from "../components/CrudTab/CrudTab";

type InputConfig = { label: string; type: string; placeholder: string; };
type Props = { addText: string; on: (e: React.ChangeEvent<HTMLInputElement>) => void; inputConfigs: InputConfig[] };

const Student = (props: Props) => {
  const [students, setStudents] = useState([]);
  const [addStudent, setAddStudent] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    sirName: "",
    student_Id: ""
  
  });
  const handleAdd = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/student");
        setStudents(res.data); 
      } catch (err) {
        console.log(err);
      }
    }
    fetchStudents()
  }, [])
  return (
    <div className="grid grid-cols-5">
      <div>
        <SideBar />
      </div>
      
      <div className="col-span-4">
        <div>
          <NavBar />
        </div>
      <h1>Students of the year</h1>
      <div className=" flex flex-row grid-cols-3 gap-4 py-5">
      {students.map((student: any) => (
          <div className="grid-flow-row grid-rows-12" key={student.student_Id}>
            <h2>{ student.firstName } {student.lastName } </h2>
            <h4>{student.age}</h4>
            <h5>{student.student_Id}</h5>
            <h6>{student.sirName}</h6>
          </div>
        ))}
      </div>
        <div className="">
          <CrudTab addText="new student " 
          onAdd={handleAdd}
          inputConfigs={[
            { label: "First Name", type: "text", placeholder: "Enter first name"  },
            { label: "Last Name", type: "text", placeholder: "Enter last name" },
            { label: "Age", type: "number", placeholder: "Enter age" },
            { label: "Sir Name", type: "text", placeholder: "Enter sir name" },
            { label: "Student ID", type: "text", placeholder: "Enter student ID" },
            // Add more input configurations as needed
          ]}/>
        </div>
      </div>
    </div>
  );
};

export default Student;
