import React from "react";
import Input from "../Input/Input";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { Dropdown } from "flowbite-react";

type Props = { handleSearch: (e: any) => void };

const NavBar = ({ handleSearch }: Props) => {
  const handleClick = () => {};

  return (
    <div className="flex flex-row mr-auto lg:flex bg-white-300 justify-between bg-slate-50 px-5 py-4 w- sm:w-auto ">
      <div className="lg: items-center w-72 md:">
        {" "}
        {/* Adjust alignment for better responsiveness */}
        <Input
          label=""
          type="text"
          placeholder="Search"
          onchange={handleSearch}
          name="search"
        />
      </div>
      <div className="flex items-center">
        {" "}
        {/* Adjust alignment for better responsiveness */}
        <IoNotificationsOutline className="mr-4" /> {/* Adjust spacing */}
        <IoSettingsOutline className="mr-4" />
        <Dropdown
          
          dismissOnClick={false}
          renderTrigger={() => (
            <span className="hover:cursor-pointer">
              <CgProfile onClick={handleClick} />
            </span>
          )}
          label={""}
        >
          <Dropdown.Item onClick={() => alert("Dashboard!")}>
            Profile details
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert("Settings!")}>
            Settings
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert("Earnings!")}>
            Earnings
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert("Sign out!")}>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavBar;
