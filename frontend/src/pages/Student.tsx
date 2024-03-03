import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { BsPersonFillAdd } from "react-icons/bs";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Label from "../components/Label/Label";
import { FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  addText: string;
  on: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

const Student = (props: Props) => {
  const [students, setStudents] = useState([]);
  const [addStudent, setAddStudent] = useState({
    studentFullName: "",
    address: "",
    indexNumber: 0,
    dateOfBirth: "",
    grade: 0,
    motherName: "",
    motherProfession: "",
    fatherName: "",
    fatherProfession: "",
    guardianName: "",
    guardianAddress: "",
    guardianContact: 0,
    extraCurricularActivities: "",

  });

  //--------------Fetch all students from the database----------------
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/student`);
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudents();
  }, []);

  //--------------Add new student to the database----------------
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
      console.error(err);
    }
  };

  //--------------Delete a student from the database----------------
  const handleDelete = async (indexNumber: number) => {
    try {
      await axios.delete(`http://localhost:8800/student/${indexNumber}`);
      window.location.reload();
      console.log("Deleted successfully");
    } catch (err) {
      console.log("cannot delete ", err);
    }
  };
  
  
  

  return (
    <div className="grid grid-cols-5 justify-between">
      <div className=" h-screen w-64 shadow">
        <SideBar />
      </div>

      <div className="col-span-4 ">
        <div>
          <NavBar  />
        </div>
        <h1 className="text-2xl py-4">Students </h1>

        <div className="">
          <div>
            <Tabs>
              <Tabs.Item  //--------------List of all students----------------
                active
                title="All Student List"
                icon={FaListAlt}
                id="list"
              >
                <div className="py-5">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student Full Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Index Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date of Birth
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {students.map((student: any) => (
                        <tr key={student.studentId}>
                          <td  className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer"                          >
                            <Link to={`/details/${student.id}`} //--------------Open student details----------------
                            >
                            {student.studentFullName } 
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.address}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.indexNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.dateOfBirth}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900"                            >
                              <Link to={`/update/${student.id}`}//--------------Edit student details---------------- 
                              > 
                                Edit 
                              </Link>
                            </button>
                            <button
                              className="ml-2 text-red-600 hover:text-red-900"
                              onClick={() => handleDelete(student.indexNumber)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Tabs.Item>
              <Tabs.Item //--------------Add new student to the database----------------
              active title="Add New Student" icon={BsPersonFillAdd} id="add">
                Add{}{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  {" new student "}
                </span>{" "}
                to the database.
                <div className="grid grid-cols-4">
                  <div className="">
                    <Label label="Student Full Name" />
                    <Label label="Address" />
                    <Label label="Index Number" />
                    <Label label="Date of Birth" />
                    <Label label="Grade" />
                    <Label label="Mother's Name" />
                    <Label label="Mother's profession" />
                    <Label label="Father's Name" />
                    <Label label="Father's profession" />
                    <Label label="Guardian's Name" />
                    <Label label="Guardian's Address" />
                    <Label label="Guardian's Contact" />
                    <Label label="Extracurricular Activities" />

                  </div>
                  <div>
                    <Input
                      label={"Student Full Name"}
                      type={"text"}
                      placeholder={"Enter student name"}
                      onchange={handelChange}
                      name={"studentFullName"}
                    />

                    <Input
                      label={"Address"}
                      type={"text"}
                      placeholder={"Enter student address"}
                      onchange={handelChange}
                      name={"address"}
                    />

                    <Input
                      label={"Index Number"}
                      type={"number"}
                      placeholder={"Enter index number"}
                      onchange={handelChange}
                      name={"indexNumber"}
                    />
                    
                    <Input
                      label={"Date of Birth"}
                      type={"date"}
                      placeholder={"Enter Birth date"}
                      onchange={handelChange}
                      name={"dateOfBirth"}
                    />

                    <Input
                      label={"Grade"}
                      type={"number"}
                      placeholder={"Enter studying grade"}
                      onchange={handelChange}
                      name={"grade"}
                    />

                    <Input label="Mother's Name" type="text" placeholder="Enter Mother's Name" onchange={handelChange} name="motherName" />
                    <Input label="Mother's profession" type="text" placeholder="Enter Mother's profession" onchange={handelChange} name="motherProfession" />
                    <Input label="Father's Name" type="text" placeholder="Enter Father's Name" onchange={handelChange} name="fatherName" />
                    <Input label="Father's profession" type="text" placeholder="Enter Father's profession" onchange={handelChange} name="fatherProfession" />
                    <Input label="Guardian's Name" type="text" placeholder="Enter Guardian's Name" onchange={handelChange} name="guardianName" />
                    <Input label="Guardian's Address" type="text" placeholder="Enter Guardian's Address" onchange={handelChange} name="guardianAddress" />
                    <Input label="Guardian's Contact" type="number" placeholder="Enter Guardian's Contact" onchange={handelChange} name="guardianContact" />
                    <Input label="Extracurricular Activities" type="text" placeholder="Enter Extracurricular Activities" onchange={handelChange} name="extraActivities" />
                    
                  </div>

                  <Button onClick={handleAdd} text={"Add"}></Button>
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
