import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { StaffInterface } from "../types/Types";
import axios from "axios";
import { Link } from "react-router-dom";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type Props = {};

const Administration = (props: Props) => {
  const [staff, setStaff] = useState([] as StaffInterface[]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("http://localhost:8800/admin");

        setStaff(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchStaff();
  }, []);

  const handleDelete = async (idStaff: number) => {
    try {
      await axios.delete(`http://localhost:8800/admin/${idStaff}`);
      window.location.reload();

    } catch (error) {
      console.log(error, "error");
    }
  };

  const [newStaffData, setNewStaffData] = useState({} as StaffInterface);
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStaffData((prev: StaffInterface) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/admin", newStaffData);
      window.location.reload();
      console.log("Add Staff");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row sm:flex overflow-visible">
      <div className=" place-items-start align-top items-center">
        <SideBar />
      </div>
      <div className="w-full left-84 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl xl:max-w-screen-3xl ">
        <div>
          <NavBar
            handleSearch={function (e: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <h1 className="text-2xl  px-2 py-4">Admin </h1>
        <Tabs>
          <Tabs.Item title=" Admin Staff" active>
            <div className="px-2 py-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {staff.map((stf: StaffInterface) => (
                    <tr key={stf.idStaff}>
                      <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer">
                        <Link to={`/adminDetail/${stf.idStaff}`}>
                          {stf.empName}
                        </Link>
                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {stf.empPosition}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {stf.empContacts}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {stf.empAdddress}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Link
                            to={`/updateAdmin/${stf.idStaff}`} //--------------Edit student details----------------
                          >
                            Edit
                          </Link>
                        </button>
                        <button
                          className="ml-2 text-red-600 hover:text-red-900"
                          onClick={() => handleDelete(stf.idStaff)}
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
          <Tabs.Item title="Add Staff Member">
            <div className="col-span-2 mx-56 px-5">
              <div className="flex flex-row justify-between text-right py-4">
                <Label label="Full Name" />
                <Input
                  label=""
                  placeholder="Enter Full Name"
                  onchange={handelChange}
                  name="empName"
                  type="text"
                />
              </div>
              <div className="flex flex-row justify-between text-right py-4">
                <Label label="Member Position" />
                <Input
                  label=""
                  placeholder="Enter Member Position"
                  onchange={handelChange}
                  name="empPosition"
                  type="text"
                />
              </div>
              <div className="flex flex-row justify-between text-left py-4">
                <Label label="Contact Number" />
                <Input
                  label=""
                  placeholder="Enter Contact Number"
                  onchange={handelChange}
                  name="empContacts"
                  type="number"
                />
              </div>
              <div className="flex flex-row justify-between py-4">
                <Label label="Address" />
                <Input
                  label=""
                  placeholder="Enter Address"
                  onchange={handelChange}
                  name="empAdddress"
                  type="text"
                />
              </div>
              <div className="flex flex-row justify-between py-4">
                <Label label="Age" />
                <Input
                  label=""
                  placeholder="Enter Age"
                  onchange={handelChange}
                  name="empAge"
                  type="text"
                />
              </div>
              
              <Button onClick={handleUpdate} text="Update" />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Announcement">
            <div className="px-2 py-4">
              <h1>Announcement</h1>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Users">
            <div className="px-2 py-4">
              <h1>Users</h1>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Administration;
