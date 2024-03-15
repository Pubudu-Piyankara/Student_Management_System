import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import axios from "axios";
import { AnnouncementInterface } from "../types/Types";
import NavBar from "../components/NavBar/NavBar";

import SampleCard from "../components/CardComponent/SampleCard";
import { Tabs } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

type Props = {};

const Messages = (props: Props) => {
  const [announcement, setAnnouncement] = useState(
    [] as AnnouncementInterface[]
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get("http://localhost:8800/announcement");

        setAnnouncement(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchAnnouncement();
  }, []);
  const handleDelete = async (idMessage: number) => {
    try {
      await axios.delete(`http://localhost:8800/announcement/${idMessage}`);
      window.location.reload();
      navigate("/announcement");
    } catch (error) {
      console.log(error, "error");
    }
  };
  const [newAnnouncementData, setNewAnnouncementData] = useState(
    {} as AnnouncementInterface
  );

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAnnouncementData((prev: AnnouncementInterface) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleCreate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8800/announcement",
        newAnnouncementData
      );
      window.location.reload();
      navigate("/announcement");
      console.log("Add Announcement");
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
        <h1 className="text-2xl  px-2 py-4">Announcement </h1>

        <div className="px-2">
          <div className="grid grid-cols-3 px-5 pb-5">
            {announcement.map((msg: AnnouncementInterface) => (
              <div key={msg.idMessage} >
                <section className="">
                  <SampleCard
                    title={msg.title}
                    description={msg.msgDescription}
                    id={msg.idMessage}
                  />
                </section>
              </div>
            ))}
          </div>
          <hr className="pb-5" />
          <Tabs>
            <Tabs.Item title="Announcement" active>
              <div className="px-2 py-4">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        publishDate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        expireDate Number
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {announcement.map((msg: AnnouncementInterface) => (
                      <tr key={msg.idMessage}>
                        <td className="px-6 py-4 whitespace-nowrap hover:underline cursor-pointer">
                          <a href=" ">{msg.title}</a>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          {msg.publishDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {msg.expireDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                          <div>
                            <button className="text-indigo-600 hover:text-indigo-900">
                              <Link
                                to={`/updateAnnouncement/${msg.idMessage}`} //--------------Edit student details----------------
                              >
                                Edit
                              </Link>
                            </button>
                            <button
                              className="ml-2 text-red-600 hover:text-red-900"
                              onClick={() => handleDelete(msg.idMessage)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Create Announcement">
              <div className="flex flex-col justify-between mx-56 px-5">
                <div className="flex flex-row justify-evenly">
                  <div className="flex flex-col  py-4">
                    <Label label="Publish Date" />
                    <Input
                      label=""
                      placeholder="Publish Date"
                      onchange={handelChange}
                      name="publishDate"
                      type="Date"
                    />
                  </div>
                  <div className="flex flex-col py-4">
                    <Label label="Expire Date" />
                    <Input
                      label=""
                      placeholder="Expire Date"
                      onchange={handelChange}
                      name="expireDate"
                      type="Date"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between text-right py-4">
                  <Label label="Title" />
                  <Input
                    label=""
                    placeholder="Enter Title Here"
                    onchange={handelChange}
                    name="title"
                    type="text"
                  />
                </div>
                <div className="flex flex-row justify-between text-right py-4">
                  <Label label="Description" />
                  <Input
                    label=""
                    placeholder="Write a Description Here"
                    onchange={handelChange}
                    name="msgDescription"
                    type="text"
                  />
                </div>
                <div className="flex flex-row justify-between text-left py-4">
                  <Label label="Content" />
                  <Input
                    label=""
                    placeholder="Write Content Here"
                    onchange={handelChange}
                    name="content"
                    type="text"
                  />
                </div>

                <Button onClick={handleCreate} text="Create Announcement" />
              </div>
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Messages;
