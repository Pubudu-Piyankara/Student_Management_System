import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

type Props = {};

const Profile = (props: Props) => {
  const [userData, setUserData] = useState(null as any);


  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/user/1");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfilePic = () => {
    try {
      
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <div>
        <SideBar />
      </div>
      
      <div className=" flex gap-10">
        <div className="container mx-auto py-8">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {userData ? (
        <div>
          <div className="flex flex-row items-center justify-around">
            <h1 className="text-[#4743E0] text-lg lg:text-6xl font-extrabold mb-3 lg:mb-8 mt-5 lg:mt-10">
              Welcome, {userData.firstName} {userData.lastName}
            </h1>
            {profilePicture ? (
        <img
          src={profilePicture}
          alt="profile"
          className="w-32 h-32 rounded-full cursor-pointer"
        />
      ) : (
        <CgProfile
          className="text-[#828282] text-6xl lg:text-8xl cursor-pointer w-32 h-32"
           
        />
      )}
      {/* Hidden input for selecting profile picture */}
      <input
        type="file"
        id="profileImageInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleProfilePic}
      />
          </div>
          <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 lg:ml-0 opacity-40">
            To access your account, please enter your credentials below. By
            logging in, you agree to our terms and conditions. Make sure to
            review our GDPR compliance for data protection.
          </p>
          <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] mt-12 mb-5" />
          <label className="text-[#4743E0] lg:ml-0 font-semibold mb-2 ">
            Change the Profile Details
          </label>
          <div className="flex flex-col lg:flex-row justify-around py-2 my-5">
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
              <label className="lg:ml-2 mb-2">First Name</label>
              <input
                
                type={"text"}
                placeholder={"John"}
                name={"firstName"}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 "
                
                value={userData.firstName}
              />

              <label className="mb-2 lg:ml-2 ">Department</label>
              <select
                className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                defaultValue=""
                
                value={userData.department}
              >
                <option value="">Select Department</option>
                <option value="Civil">CEE</option>
                <option value="Electrical">EIE</option>
                <option value="Mechanical">MME</option>
                <option value="IS">IS</option>
              </select>
              <label className="lg:ml-2 mb-2 mt-10">Contact Number</label>
              <input
                
                type={"tel"}
                placeholder={"+94 00 000 0000"}
                name={"contactNumber"}
                value={userData.contactNumber}
               
                className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
              />
              <div className="mt-4 lg:justify-between flex flex-col gap-5 items-left  w-full lg:w-[80%]">
                <div className="flex flex-col lg:flex-row   justify-between items-center mt-4">
                  <div className="mt-3 lg:mt-4 w-full">
                    <button
                      className="px-5 py-2 bg-[#4743E0] text-white rounded-3xl lg:w-60"
                      // onClick={() => navigate()}
                    >
                      Save Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around ">
              <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
                <label className="lg:ml-2 mb-2">Last Name</label>
                <input
                 
                  type={"text"}
                  placeholder={"smith"}
                  name={"lastName"}
                  value={userData.lastName}
                  
                  className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                />
                <label className="lg:ml-2 mb-2 mt-10">Role</label>
                <input
                  
                  type={"text"}
                  placeholder={"smith"}
                  name={"lastName"}
                  value={userData.role}
                  
                  className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                />
                <label className="lg:ml-2 mb-2 mt-10">Work Email</label>
                <input
                  
                  type={"text"}
                  placeholder={"johnsmith@gmail.com"}
                  name={"email"}
                  value={userData.email}
                  
                  className="border rounded-full py-2 px-3 mb-24 text-grey-darker w-72"
                />
              </div>
            </div>
          </div>
          <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] mt-12 mb-5" />
          <label className="text-[#4743E0] lg:ml-0 font-semibold mb-2 ">
            Change the Password
          </label>
          <div className="flex flex-col lg:flex-row justify-around py-2 my-5">
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
              <label className="lg:ml-2 mb-2">Password</label>
              <input
                
                type={"password"}
                placeholder={"*******"}
                name={"password"}
                className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 "
                
                value={""}
              />
              <div className="mt-4 lg:justify-between flex flex-col gap-5 items-left  w-full lg:w-[80%]">
                <div className="flex flex-col lg:flex-row   justify-between items-center mt-4">
                  <div className="mt-3 lg:mt-4 w-full">
                    <button
                      className="px-5 py-2 bg-[#4743E0] text-white rounded-3xl lg:w-60"
                      // onClick={() => navigate()}
                    >
                      Save Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-col mx-auto items-start justify-around py-">
              <div className="flex flex-col lg:flex-col mx-auto items-start justify-around mb-4 lg:mb-0">
                <label className="lg:ml-2 mb-2">Confirm Password</label>
                <input
                  
                  type={"password"}
                  placeholder={"*******"}
                  name={"confirmPassword"}
                  
                  
                  className="border rounded-full py-2 px-4 mb-28 text-grey-darker w-72"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
