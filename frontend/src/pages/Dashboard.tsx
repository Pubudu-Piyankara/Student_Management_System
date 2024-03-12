import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import CardComponent from "../components/CardComponent/CardComponent";
import student from "../assets/student.svg";
import axios from "axios";

type Props = {};

const Dashboard = (props: Props) => {
  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const res = await axios.get("http://localhost:8800/student/count");
        setStudentCount(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStudentCount();
  }, []);

  console.log("where is my count ", studentCount);
  return (
    <div className="flex flex-row sm:flex overflow-visible ">
      <div className="place-items-start align-top items-center">
        <SideBar />
      </div>
      <div className="w-full left-84 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl xl:max-w-screen-3xl">
        <div className="flex w-full justify-around gap-[500px] items-center">
          <NavBar handleSearch={(e) => console.log(e.target.value)} />
        </div>

        <div className="px-2">
          <p> {}</p>
          <div className="gap-3 justify-center lg:grid grid-flow-col grid-cols-3 x-2 py-2 ">
            {/* {studentCount.map((student: any) => {
              return (
                <CardComponent
                  title={student.name}
                  description={`Student Count : ${student.count}`}
                  imgAlt="Card Image"
                  imgSrc={student}
                />
              );

            },
            )} */}
            <CardComponent
              title="Students"
              description={`Student Count : ${studentCount}`}
              imgAlt="Card Image"
              imgSrc={student}
            />
            <CardComponent
              title="Teachers"
              description="This is a card description"
              imgAlt="Card Image"
              imgSrc={student}
            />
            <CardComponent
              title="Staffs"
              description="This is a card description"
              imgAlt="Card Image"
              imgSrc={student}
            />
          </div>
        </div>

        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
