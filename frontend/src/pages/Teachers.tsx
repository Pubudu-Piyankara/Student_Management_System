import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { TeacherInterface } from "../types/Types";
import axios from "axios";
import { Link } from "react-router-dom";


type Props = {};

const Teachers = (props: Props) => {

  const [teachers, setTeachers] = useState([] as TeacherInterface[])

  useEffect(() => {
    const fetchTeachers = async () => {
      try{
        const res = await axios.get('http://localhost:8800/teachers');
        setTeachers(res.data)
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchTeachers()

  }, [])
  console.log(teachers)

  const handleDelete = async (teacherIndex: number) => {
    console.log(teacherIndex)
  }

  return (
    <div className="grid grid-cols-5 justify-between">
      <div>
        <SideBar />
      </div>

      <div className="col-span-4 ">
        <div>
          <NavBar handleSearch={(e)=>console.log(e.target.value)} />
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
                      {teachers.map((teacher) => (
                        <tr key={teacher.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                          {teacher.teacherName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{teacher.address}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{teacher.teacherIndex}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{teacher.contactNumber}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            
                          <button className="text-indigo-600 hover:text-indigo-900"                            >
                              <Link to={`/update/${teacher.id}`}//--------------Edit student details---------------- 
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
