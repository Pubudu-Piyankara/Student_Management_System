import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import CardComponent from "../components/CardComponent/CardComponent";
import student from "../assets/student.svg";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-row sm:flex overflow-visible ">
      <div className="place-items-start align-top items-center">
        <SideBar />
      </div>
      <div className="w-full left-84 max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl xl:max-w-screen-3xl">
        <div className="flex w-full justify-around gap-[500px] items-center">
          <NavBar handleSearch={(e) => console.log(e.target.value)} />
        </div>

        <div>
          <div className="gap-3 justify-center lg:grid grid-flow-col grid-cols-3 x-2 py-2 ">
            <CardComponent
              title="Students"
              description="23"
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
          <p>jdshfjhdskj fdskjn</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
