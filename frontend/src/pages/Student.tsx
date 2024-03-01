import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";
import { Tab } from "@mui/material";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

// type InputConfig = { label: string; type: string; placeholder: string };
type Props = {
  addText: string;
  on: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // inputConfigs: InputConfig[];
};

const Student = (props: Props) => {
  const [students, setStudents] = useState([]);
  const [editTabOpen, setEditTabOpen] = useState(false);
  // const navigate = useNavigate();
  const [addStudent, setAddStudent] = useState({
    firstName: "",
    lastName: "",
    sirName: "",
    student_Id: 0,
    age: 0,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8800/student");
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();
  }, []);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(addStudent);

  const handleAdd = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/student", addStudent);
      window.location.reload();
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (student_Id: number) => {
    try {
      await axios.delete(`http://localhost:8800/student/${student_Id}`);

      window.location.reload();
      console.log("Deleted successfully");
    } catch (err) {
      console.log("cannot delete ", err);
    }
  };
  const redirectToEdit = (studentId: number) => {
    window.location.href = `/student/edit/${studentId}`;
  };

  const handleEdit = () => {
    setEditTabOpen(true);
  };

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/student/${student_Id}`, addStudent);

      window.location.reload();
      console.log("update successfully");
    } catch (err) {
      console.log("cannot update ", err);
    }
  };

  return (
    <div className="grid grid-cols-5 justify-between">
      <div className=" h-screen w-64 shadow">
        <SideBar />
      </div>

      <div className="col-span-4 ">
        <div>
          <NavBar />
        </div>
        <h1>Students of the year</h1>

        <div className="">
          <div>
            <Tabs>
              <Tabs.Item active title="List" icon={BsPersonFillAdd} id="list">
                <div className=" flex flex-col grid-cols-3 gap-4 py-5">
                  {students.map((student: any) => (
                    <div className="grid-flow-col grid-cols-12" key={student.student_Id}>
                      <h2>
                        {student.firstName} {student.lastName}{" "} {student.age}  {student.student_Id}  {student.sirName}
                      </h2>
                      <button
                        className="bg-slate-100 text-blue-900 px-5 py-0 rounded-full"onClick={handleEdit}>
                        Edit
                      </button>
                       <button className="bg-slate-100 text-red-500 px-5 py-0 rounded-full"
                       onClick={() => handleDelete(student.student_Id)}>
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              </Tabs.Item>
              <Tabs.Item active title="Add" icon={BsPersonFillAdd} id="add">
                Add{}{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  {" new student "}
                </span>{" "}
                to the database.
                <div className="grid grid-cols-4">
                  <div className="">
                    <Label label="First Name" />
                    <Label label="Last Name" />
                    <Label label="Sir Name" />
                    <Label label="Student ID" />
                    <Label label="Age" />
                  </div>
                  <div>
                    <Input
                      label={"First Name"}
                      type={"text"}
                      placeholder={"Enter first name"}
                      onchange={handelChange}
                      name={"firstName"}
                    />

                    <Input
                      label={"Last Name"}
                      type={"text"}
                      placeholder={"Enter last name"}
                      onchange={handelChange}
                      name={"lastName"}
                    />

                    <Input
                      label={"Sir Name"}
                      type={"text"}
                      placeholder={"Enter sir name"}
                      onchange={handelChange}
                      name={"sirName"}
                    />

                    <Input
                      label={"Student ID"}
                      type={"text"}
                      placeholder={"Enter student ID"}
                      onchange={handelChange}
                      name={"student_Id"}
                    />

                    <Input
                      label={"Age"}
                      type={"number"}
                      placeholder={"Enter age"}
                      onchange={handelChange}
                      name={"age"}
                    />
                  </div>

                  <Button onClick={handleAdd} text={"Add"}></Button>
                </div>
              </Tabs.Item>
              <Tabs.Item active={editTabOpen} title="Edit" icon={FaUserEdit}>
                <Link to={`edit/:student_Id`}></Link>
                <div className="grid grid-cols-4">
                  <div className="">
                    <Label label="First Name" />
                    <Label label="Last Name" />
                    <Label label="Sir Name" />
                    <Label label="Student ID" />
                    <Label label="Age" />
                  </div>
                  <div>
                    <Input
                      label={"First Name"}
                      type={"text"}
                      placeholder={"Enter first name"}
                      onchange={handelChange}
                      name={"firstName"}
                    />

                    <Input
                      label={"Last Name"}
                      type={"text"}
                      placeholder={"Enter last name"}
                      onchange={handelChange}
                      name={"lastName"}
                    />

                    <Input
                      label={"Sir Name"}
                      type={"text"}
                      placeholder={"Enter sir name"}
                      onchange={handelChange}
                      name={"sirName"}
                    />

                    <Input
                      label={"Student ID"}
                      type={"text"}
                      placeholder={"Enter student ID"}
                      onchange={handelChange}
                      name={"student_Id"}
                    />

                    <Input
                      label={"Age"}
                      type={"number"}
                      placeholder={"Enter age"}
                      onchange={handelChange}
                      name={"age"}
                    />
                  </div>

                  <Button
                    onClick={(e) => handleUpdate(e)}
                    text={"update"}
                  ></Button>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
