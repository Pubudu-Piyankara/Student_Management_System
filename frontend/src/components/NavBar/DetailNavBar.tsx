import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { Dropdown } from "flowbite-react";


const DetailNavBar = () => {
  const handleClick = () => {};

  return (
    <div className="flex flex-row mr-auto w-full justify-between bg-white-300  bg-slate-100 px-5 sm:min-w-fit ">
      <div className="flex items-center">
        <h1 className="flex flex-row text-[#000000] text-md justify-start lg:text-3xl font-extrabold mb-3 lg:mb-8 mt-5 lg:mt-10">
          Welcome Back!<h1 className=" text-orange-300 ml-4">John Smith</h1>
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mt-8">
          <h1 className="bg-orange-200 px-4 py-1 rounded-full border">
            Teacher Account
          </h1>
          <IoNotificationsOutline className="mr-4" />

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
        <div className="mt-4 mr-2"></div>
      </div>
    </div>
  );
};

export default DetailNavBar;
