import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

function SideBar() {
  return (
    <>
      <div>
        <nav className="bg-white-300 h-full fixed top-0 left-0 transition-transform duration-350 bg-slate-50 px-5 py-4 lg:w-64">
          <ul>
            {SidebarData.map((item, index) => (
              <li key={index} className={`${item.cName} nav-tex`}>
                <Link
                  to={item.path}
                  className="flex items-center text-black text-lg w-full h-full pb-4"
                >
                  <span
                    className="flex flex-row px-2 py-2 space-x-4 rounded-full ml-4 w-full border bg-blue-300 items-center hover:bg-blue-400 hover:text-white"
                    onClick={() => {}}
                  >
                    <div className="pl-4">{item.icon}</div>
                    <div>{item.title}</div>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
