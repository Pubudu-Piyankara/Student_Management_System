import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import { Tabs } from "flowbite-react";

type Props = {};

const Teachers = (props: Props) => {
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
