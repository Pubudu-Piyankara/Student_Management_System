import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import NavBar from '../components/NavBar/NavBar'
import CardComponent from '../components/CardComponent/CardComponent'
import student from '../assets/student.svg'


type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="flex flex-row lg:flex-row">
      <div className="flex flex-col lg:w-1/6 lg:ml-4">
        <SideBar />
      </div>
      <div className="flex flex-col  lg: w-full sm: "> 
        <NavBar />
        <div className='justify-between grid grid-cols-3 px-2 py-2 '>
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
      
    </div>
  )
}

export default Dashboard