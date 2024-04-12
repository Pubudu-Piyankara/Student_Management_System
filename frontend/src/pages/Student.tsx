import axios from "axios";
import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { BsPersonFillAdd } from "react-icons/bs";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";
import { FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StudentInterface } from "../types/Types";

type Props = {
  addText: string;
  on: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Student = (props: Props) => {
  const [students, setStudents] = useState([] as StudentInterface[]);
  const [query, setQuery] = useState("");
  const [studentCount, setStudentCount] = useState(0);
  const [newStudentData, setNewStudentData] = useState({} as StudentInterface);

  //---------------search---
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value);

    const res = students.filter((student: StudentInterface) => {
      for (const key of Object.keys(student)) {
        const value = student[key as keyof StudentInterface];
        if (
          value &&
          typeof value === "string" &&
          value.toLowerCase().includes(query)
        ) {
          return true; // If any property matches, return true
        }
        if (typeof value === "number" && value.toString().includes(query)) {
          return true; // If any number property matches, return true
        }
      }
      return false; // If no property matches, return false
    });

    setStudents(res);
  };

  //--------------Fetch all students from the database----------------
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/student?searchQ=${query}`
        );
        setStudents(res.data);
        const count = res.data.length;
        setStudentCount(count);
      } catch (err) {
        console.log(err);
      }
    };

    if (query.length === 0) fetchStudents();
  }, [query]);

  //--------------Add new student to the database----------------
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStudentData((prev: StudentInterface) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(newStudentData);

  const handleAdd = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/student", newStudentData);
      window.location.reload();
      console.log("success");
    } catch (err) {
      console.error(err);
    }
  };

  //--------------Delete a student from the database----------------
  const handleDelete = async (indexNumber: number) => {
    try {
      await axios.delete(`http://localhost:8000/student/${indexNumber}`);
      window.location.reload();
      console.log("Deleted successfully");
    } catch (err) {
      console.log("cannot delete ", err);
    }
  };

  return (
    <div className="flex flex-row sm:flex overflow-visible">
      <div className=" place-items-start align-top items-center">
        <SideBar />
      </div>

      <div className="w-full left-84 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl xl:max-w-screen-3xl ">
        <div>
          <NavBar handleSearch={handleSearch} />
        </div>
        <div className="flex flex-row justify-between px-4">
        <h1 className="text-2xl  px-2 py-4">Students </h1>
        <p className="mt-5 bg-yellow-200 py-2 px-4 border rounded-full"> {`Total No of Students : ${studentCount}`}</p>
        </div>
        

        <div className="px-2">
          
          <div>
            <Tabs>
              <Tabs.Item //--------------List of all students----------------
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
                      {students.map((student: StudentInterface) => (
                        <tr key={student.id}>
                          <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer">
                            <Link
                              to={`/details/${student.id}`} //--------------Open student details----------------
                            >
                              {student.studentFullName}
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
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Link
                                to={`/updateStudent/${student.id}`} //--------------Edit student details----------------
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
                active
                title="Add New Student"
                icon={BsPersonFillAdd}
                id="add"
              >
                Add{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  {" new student "}
                </span>{" "}
                to the database.
                <div className="flex flex-col ">
                  <div className="flex flex-row justify-around py-2">
                    <Label label="Student Full Name" />
                    <Input
                      label={"Student Full Name"}
                      type={"text"}
                      placeholder={"Enter student name"}
                      onchange={handelChange}
                      name={"studentFullName"}
                    />
                  </div>
                  <div className="flex flex-row justify-around py-2">
                    <Label label="Address" />
                    <Input
                      label={"Address"}
                      type={"text"}
                      placeholder={"Enter student address"}
                      onchange={handelChange}
                      name={"address"}
                    />
                  </div>
                  <div className="flex flex-row justify-evenly py-2">
                    <Label label="Index Number" />
                    <Input
                      label={"Index Number"}
                      type={"number"}
                      placeholder={"Enter index number"}
                      onchange={handelChange}
                      name={"indexNumber"}
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Date of Birth" />
                    <Input
                      label={"Date of Birth"}
                      type={"date"}
                      placeholder={"Enter Birth date"}
                      onchange={handelChange}
                      name={"dateOfBirth"}
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Grade" />
                    <Input
                      label={"Grade"}
                      type={"number"}
                      placeholder={"Enter studying grade"}
                      onchange={handelChange}
                      name={"grade"}
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Mother's Name" />
                    <Input
                      label="Mother's Name"
                      type="text"
                      placeholder="Enter Mother's Name"
                      onchange={handelChange}
                      name="motherName"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Mother's profession" />
                    <Input
                      label="Mother's profession"
                      type="text"
                      placeholder="Enter Mother's profession"
                      onchange={handelChange}
                      name="motherProfession"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Father's Name" />
                    <Input
                      label="Father's Name"
                      type="text"
                      placeholder="Enter Father's Name"
                      onchange={handelChange}
                      name="fatherName"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Father's profession" />
                    <Input
                      label="Father's profession"
                      type="text"
                      placeholder="Enter Father's profession"
                      onchange={handelChange}
                      name="fatherProfession"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Guardian's Name" />
                    <Input
                      label="Guardian's Name"
                      type="text"
                      placeholder="Enter Guardian's Name"
                      onchange={handelChange}
                      name="guardianName"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Guardian's Address" />
                    <Input
                      label="Guardian's Address"
                      type="text"
                      placeholder="Enter Guardian's Address"
                      onchange={handelChange}
                      name="guardianAddress"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Guardian's Contact" />
                    <Input
                      label="Guardian's Contact"
                      type="number"
                      placeholder="Enter Guardian's Contact"
                      onchange={handelChange}
                      name="guardianContact"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly">
                    <Label label="Extracurricular Activities" />
                    <Input
                      label="Extracurricular Activities"
                      type="text"
                      placeholder="Enter Extracurricular Activities"
                      onchange={handelChange}
                      name="extraActivities"
                    />
                  </div>
                </div>
                <div>
                    <button
                      className="bg-green-400 border rounded-full py-1 px-6 text-white font-semibold hover:bg-green-500 mt-4 underline"
                      onClick={handleAdd}
                    >
                      Add Student
                    </button>
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
