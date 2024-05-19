import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnnouncementInterface } from "../../types/Types";
import axios from "axios";

type Props = {};

const AnnouncementDetail = (props: Props) => {
  const location = useLocation();

  const announcementId = location.pathname.split("/")[2]; //get the announcement id from the url
  const [announcementDetail, setAnnouncementDetail] = useState(
    [] as AnnouncementInterface[]
  );

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/announcement/${announcementId}`
        );
        setAnnouncementDetail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAnnouncement();
  }, [announcementId]);

  
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl py-4">Announcement Details</h1>
      {announcementDetail.map((announcement: AnnouncementInterface) => (
        <div key={announcement.idMessage}  className="flex flex-col">
          <div className="p-8 border rounded-lg shadow-md bg-slate-100 mx-48">
            <h1 className="font-semibold py-2 justify-center w-full text-lg">{announcement.title}</h1>
            <p className="content-center px-5 ">{announcement.content}</p>
            <div className="py-4 ">
            <p className="justify-end ">{announcement.publishDate}</p>
            <p>{announcement.expireDate}</p>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default AnnouncementDetail;
