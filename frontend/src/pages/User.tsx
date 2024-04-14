
import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";
import axios from "axios";
import { UserInterface } from "../types/Types";

type Props = {};

const User = (props: Props) => {
  const [newUser, setNewUser] = useState({} as UserInterface);
  const handleCreateUser = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user", newUser);
      window.location.reload();
      console.log("Add User");
    } catch (err) {
      console.log(err);
    }
  };

  const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewUser((prev: UserInterface) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <div>
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
        </div>
      </div>
    </>
  );
};

export default User;
