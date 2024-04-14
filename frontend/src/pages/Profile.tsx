import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import profilepic from "../assets/profilepic.jpg";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Profile = (props: Props) => {
  const [profilePicture, setProfilePicture] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleProfilePic = (e: any) => {
    try {
      const profileImage = e.target.files[0];
      setProfilePicture(URL.createObjectURL(profileImage));
      console.log("profile pic uploaded successfully!");
    } catch (error) {
      console.log(error);
    }
  };

   

  return (
    <div className="flex flex-row sm:flex overflow-visible">
      <div className=" place-items-start align-top items-center">
        <SideBar />
      </div>

      <div className=" flex">
        <div className="container mx-auto py-1">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
              <div className="flex flex-row items-center justify-between mr-36 ">
                <h1 className="text-[#4743E0] text-lg justify-start lg:text-6xl font-extrabold mb-3 lg:mb-8 mt-5 lg:mt-10">
                  Welcome John Smith
                </h1>
               
                  <img
                    src={profilepic}
                    alt="profile"
                    className="w-48 h-44 rounded-full cursor-pointer"
                  />
               
              </div>
              <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 lg:ml-0 opacity-40">
                To access your account, please enter your credentials below. By
                logging in, you agree to our terms and conditions. Make sure to
                review our GDPR compliance for data protection.
              </p>
              <Button text="Create New User" onClick={()=>{navigate('/user')}} />
              <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] mt-12 mb-5" />
              <label className="text-[#4743E0] lg:ml-0 font-semibold mb-2 ">
                Change the Profile Details
              </label>
              <div className="flex flex-col">
                <section className="flex flex-row justify-evenly py-5">
                  <div className="flex flex-col">
                    <label className="lg:ml-2 mb-2">First Name</label>
                    <input
                      type={"text"}
                      placeholder={"John"}
                      name={"firstName"}
                      className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="lg:ml-2 mb-2">Last Name</label>
                    <input
                      type={"text"}
                      placeholder={"smith"}
                      name={"lastName"}
                      className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                    />
                  </div>
                </section>
                <section className="flex flex-row justify-evenly py-5">
                  <div className="flex flex-col">
                    <label className="mb-2 lg:ml-2 ">Role</label>
                    <select
                      className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                      defaultValue=""
                    >
                      <option value="">Select Role</option>
                      <option value="Civil">Admin Staff</option>
                      <option value="Electrical">Teacher</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="lg:ml-2 mb-2 ">Email</label>
                    <input
                      type={"text"}
                      placeholder={"johnsmith@gmail.com"}
                      name={"email"}
                      className="border rounded-full py-2 px-3  text-grey-darker w-72"
                    />
                  </div>
                </section>
              </div>
              <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] " />
              <label className="text-[#4743E0] mt-5 lg:ml-0 font-semibold mb-2 ">
                Change the Password
              </label>
              <div className="flex flex-col lg:justify-around py-2 my-5">
                <section className="flex flex-row justify-evenly">
                  <div className="flex flex-col ">
                    <label className="lg:ml-2 mb-2">Password</label>
                    <input
                      type={"password"}
                      placeholder={"*******"}
                      name={"password"}
                      className="border rounded-full py-2 px-3 mb-4 text-grey-darker w-72 "
                      value={""}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="lg:ml-2 mb-2">Confirm Password</label>
                    <input
                      type={"password"}
                      placeholder={"*******"}
                      name={"confirmPassword"}
                      className="border rounded-full py-2 px-4 mb-4 text-grey-darker w-72"
                    />
                  </div>
                </section>

                <div className="mt-3 self-end mx-5 py-5">
                  <button
                    className="px-5 py-2 bg-[#4743E0] text-white rounded-3xl lg:w-60"
                    // onClick={() => navigate()}
                  >
                    Save Password
                  </button>
                </div>
              </div>
              <hr className="mx-auto border-dashed rounded-md w-[1000%] lg:w-[1000px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
