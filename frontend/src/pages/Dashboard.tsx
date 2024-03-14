import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import CardComponent from "../components/CardComponent/CardComponent";
import students from "../assets/students.svg";
import teacher from "../assets/teacher.svg";
import staff from "../assets/staff.svg";
import axios from "axios";
import { AnnouncementInterface } from "../types/Types";
import SampleCard from "../components/CardComponent/SampleCard";

type Props = {};

const Dashboard = (props: Props) => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const res = await axios.get("http://localhost:8800/student");
        const count = res.data.length;
        setStudentCount(count);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudentCount();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/teachers");
        const count = res.data.length;
        setTeacherCount(count);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeachers();
  }, []);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("http://localhost:8800/admin");
        const count = response.data.length;
        setStaffCount(count);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchStaff();
  }, []);
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
    <div className="flex flex-row sm:flex overflow-visible ">
      <div className="place-items-start align-top items-center">
        <SideBar />
      </div>
      <div className="w-full left-84 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl xl:max-w-screen-3xl">
        <div className="flex w-full justify-around gap-[500px] items-center">
          <NavBar handleSearch={(e) => console.log(e.target.value)} />
        </div>

        <section className="px-5 py-4">
          <div className="gap-3 justify-center lg:grid grid-flow-col grid-cols-3 x-2 py-2 ">
            <CardComponent
              title="Students"
              description={`Total Students : ${studentCount} `}
              imgAlt="Card Image"
              imgSrc={students}
            />
            <CardComponent
              title="Teachers"
              description={`Total Teachers : ${teacherCount} `}
              imgAlt="Card Image"
              imgSrc={teacher}
            />
            <CardComponent
              title="Staffs"
              description={`Total Admin Staff : ${staffCount} `}
              imgAlt="Card Image"
              imgSrc={staff}
            />
          </div>
        </section>
       <hr className="h-5"></hr>
        <section className="px-5 py-4">
          <h1 className="text-2xl py-4">Announcement </h1>
          <div className="px-2">
          {announcement.map((msg: AnnouncementInterface) => (
            <div key={msg.idMessage} >
              <SampleCard title={msg.title} description={msg.msgDescription} id={msg.idMessage}/>
            </div>
          ))}
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default Dashboard;
