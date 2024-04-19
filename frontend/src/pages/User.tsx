import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";
import axios from "axios";
import { UserInterface } from "../types/Types";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";

type Props = {};

const UserPage = (props: Props) => {
  const [newUser, setNewUser] = useState({} as UserInterface);
  const [users, setUsers] = useState([] as UserInterface[]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user");
        setUsers(response.data);
        console.log(users, "response  data");
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchUser();
  }, []);
console.log(typeof users, " fhdhfhdfkjhksjdhkjhfgkdsjhfghsdkfhkh")
  const handelChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewUser((prev: UserInterface) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(newUser, "newUser");
  const handleCreateUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent | HTMLSelectElement>
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user", newUser);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div>
          <Tabs>
          <Tabs.Item title="User" active>
              <div className="px-2 py-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user: UserInterface) => (
                      <tr key={user.userId}>
                        <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer">
                          {user.userName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap hidden">
                          {user.password}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user.role}
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <Link
                              to={``} //--------------Edit student details----------------
                            >
                              Edit
                            </Link>
                          </button>
                          <button
                            className="ml-2 text-red-600 hover:text-red-900"
                            onClick={() => {}}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody> */}
                </table>
              </div>
            </Tabs.Item>
            <Tabs.Item title="User">
              <div className="col-span-2 mx-56 px-5">
                <div className="flex flex-row justify-between text-right py-4">
                  <Label label="User Name" />
                  <Input
                    label=""
                    placeholder="Enter User Name"
                    onchange={handelChange}
                    name="userName"
                    type="text"
                  />
                </div>
                <div className="flex flex-row justify-between text-right py-4">
                  <Label label="Email" />
                  <Input
                    label=""
                    placeholder="Enter Email Address"
                    onchange={handelChange}
                    name="email"
                    type="text"
                  />
                </div>
                <div className="flex flex-row justify-between text-left py-4">
                  <Label label="Password" />
                  <Input
                    label=""
                    placeholder="Create Password"
                    onchange={handelChange}
                    name="password	"
                    type="Password"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 lg:ml-2 ">Role</label>
                  <select
                    className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                    defaultValue=""
                    onChange={handelChange}
                    name="role"
                  >
                    <option value="">Select Role</option>
                    <option value="Admin Staff">Admin Staff</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                </div>

                <Button onClick={handleCreateUser} text="Create User" />
              </div>
            </Tabs.Item>
            
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserPage;
