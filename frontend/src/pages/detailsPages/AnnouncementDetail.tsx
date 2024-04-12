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
    <div>
      <h1 className="text-2xl py-4">Announcement Details</h1>
      {announcementDetail.map((announcement: AnnouncementInterface) => (
        <div key={announcement.idMessage}>
          <div>
            <h1>{announcement.title}</h1>
            <p>{announcement.content}</p>
            <p>{announcement.publishDate}</p>
            <p>{announcement.expireDate}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default AnnouncementDetail;
