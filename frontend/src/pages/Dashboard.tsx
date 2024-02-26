import React from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import CardComponent from "../components/CardComponent/CardComponent";
import student from "../assets/student.svg";

type Props = {};

const Dashboard = (props: Props) => {


  return (
    <div className="grid grid-cols-5">
      <div className="">
        <SideBar />
      </div>

      <div className="col-span-4 md:grid-flow-col">
        <div className="flex-row">
          <NavBar />
        </div>
        <div>
          <div className="gap-3 w-auto h-auto justify-center lg:grid grid-flow-col grid-cols-3 x-2 py-2 ">
            <CardComponent
              title="Card Title"
              description="This is a card description"
              imgAlt="Card Image"
              imgSrc={student}
            />
            <CardComponent
              title="Card Title"
              description="This is a card description"
              imgAlt="Card Image"
              imgSrc={student}
            />
            <CardComponent
              title="Card Title"
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