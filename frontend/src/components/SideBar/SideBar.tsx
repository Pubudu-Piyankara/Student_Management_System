import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { HiMenu } from "react-icons/hi";

function SideBar() {
  const [open, setOpen] = useState(true);

  const handleResize = () => {
    // Close the sidebar when the window width is less than or equal to a certain threshold (e.g., 768px)
    if (window.innerWidth <= 900) {
      setOpen(false);
    } else {
      setOpen(true);
    }                                             
  };

  // Add event listener for window resizing
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="grid grid-flow-col ">
        <section className={`flex gap-6 `}>
          <div
            className={`bg-[#e7e7e7] min-h-screen ${
              open ? "w-72" : "w-16"
            } duration-500 text-black-100 px-4`}
          >
            <div className="py-3 flex justify-end">
              <HiMenu
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {SidebarData?.map((menu, i) => (
                <Link
                  to={menu?.path}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-100 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.title}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SideBar;
