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
    <div className="flex flex-row mr-auto w-full justify-between bg-white-300  bg-slate-100 px-5 py-4 sm:min-w-fit ">
      <div className="flex items-center">
        <Input
          label=""
          type="text"
          placeholder="Search"
          onchange={handleSearch}
          name="search"
        />
      </div>
      <div className="flex items-center sm:justify-normal">
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
