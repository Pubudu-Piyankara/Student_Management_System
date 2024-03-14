import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import axios from "axios";
import { AnnouncementInterface } from "../types/Types";
import NavBar from "../components/NavBar/NavBar";

import SampleCard from "../components/CardComponent/SampleCard";

type Props = {};

const Messages = (props: Props) => {
  const [announcement, setAnnouncement] = useState(
    [] as AnnouncementInterface[]
  );
  

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
          {announcement.map((msg: AnnouncementInterface) => (
            <div key={msg.idMessage} >
              <SampleCard title={msg.title} description={msg.msgDescription} id={msg.idMessage}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
