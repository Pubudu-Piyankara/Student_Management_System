import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { TeacherInterface } from "../types/Types";
import axios from "axios";
import { Link } from "react-router-dom";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type Props = {};

const Teachers = (props: Props) => {
  const [teachers, setTeachers] = useState([] as TeacherInterface[]);
  const [newTeacherData, setNewTeacherData] = useState({} as TeacherInterface);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/teachers");
        setTeachers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeachers();
  }, []);
  console.log(teachers);

  const handleDelete = async (teacherIndex: number) => {
    console.log(teacherIndex);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeacherData(
      (prev: TeacherInterface) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }),
    );
    console.log(e.target.value);
  };

  const handleAddTeacher = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/teachers", newTeacherData);
      window.location.reload();
      console.log("Add Teacher");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-5 justify-between">
      <div>
        <SideBar />
      </div>

      <div className="col-span-4 ">
        <div>
          <NavBar handleSearch={(e) => console.log(e.target.value)} />
        </div>
        <h1 className="text-2xl py-4">Teachers </h1>
        <div>
          <div>
            <Tabs>
              <Tabs.Item title="All Teachers">
                <div>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Teacher Full Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Teacher Index
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact Number
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {teachers.map((teacher: TeacherInterface) => (
                        <tr key={teacher.idTeacher}>
                          <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer ">
                            {teacher.teacherName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {teacher.address}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {teacher.teacherIndex}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {teacher.contactNumber}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text text-sm font-medium mr-4">
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Link
                                to={`/updateTeacher/${teacher.idTeacher}`} //--------------Edit student details----------------
                              >
                                Edit
                              </Link>
                            </button>
                            <button
                              className="ml-2 text-red-600 hover:text-red-900"
                              onClick={() => handleDelete(teacher.teacherIndex)}
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
              <Tabs.Item title="Add New Teacher">
                Add{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  New Teacher
                </span>
                to the database
                <div className="grid grid-cols-4">
                  <form className="py-2">
                    <Label label="Teacher Full Name" />
                    <Label label="Teacher Index" />
                    <Label label="Contact Number" />
                    <Label label="Address" />
                    <Label label="Age" />
                    <Label label="Qusalification" />
                    <Label label="Teacher In Charge" />
                  </form>
                  <form className="py-2 my-2 gap-2">
                    <Input
                      type="text"
                      placeholder="Teacher Full Name"
                      name="teacherName"
                      label={""}
                      onchange={handleChange}
                    ></Input>
                    <Input
                      type="number"
                      placeholder="Teacher Index"
                      name="teacherIndex"
                      label={""}
                      onchange={handleChange}
                    />
                    <Input
                      type="number"
                      placeholder="Contact Number"
                      name="contactNumber"
                      label={""}
                      onchange={handleChange}
                    />
                    <Input
                      type="text"
                      placeholder="Address"
                      name="address"
                      label={""}
                      onchange={handleChange}
                    />
                    <Input
                      type="number"
                      placeholder="Age"
                      name="age"
                      label={""}
                      onchange={handleChange}
                    />
                    <Input
                      type="text"
                      placeholder="Qualification"
                      name="qualification"
                      label={""}
                      onchange={handleChange}
                    />
                    <Input
                      type="text"
                      placeholder="Teacher In Charge"
                      name="tic"
                      label={""}
                      onchange={handleChange}
                    />
                  </form>
                  <div className="col-span-4 py-2">
                    <Button onClick={handleAddTeacher} text="Add"></Button>
                  </div>
                </div>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
