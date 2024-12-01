import React from "react";
import login from "../assets/login.svg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

type Props = {
  Login: any;
};

const Login = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="bg-white flex flex-col justify-normal rounded px-4 lg:px-8 py-4 lg:pt-6 lg:pb-8 ml-2 lg:ml-4 mr-2 lg:mr-4 mt-2 lg:mt-4 mb-2 lg:mb-4 lg:items-center lg:w-[900px]">
        <div className="text-center lg:ml-4 lg:mr-10 ">
          <div>
            <h1 className="text-[#4743E0] text-xl lg:text-6xl font-extrabold mb-3 lg:mb-8 mt-5 lg:mt-10">
              Log Into Your Account
            </h1>
            <p className="mx-auto my-auto text-opacity-50 lg:w-1/2 opacity-40 text-center">
              To access your account, please enter your credentials below. By
              logging in, you agree to our terms and conditions. Make sure to
              review our GDPR compliance for data protection.
            </p>
          </div>
          <form className="bg-white mt-4 flex flex-col items-center">
            <div className="flex flex-col mb-3 lg:mb-4 items-start">
              <label className="mb-2 ml-2 lg:ml-4">Work Email</label>
              <input
                className="border rounded-full py-2 px-3 text-grey-darker w-full lg:w-72 "
                type="text"
                placeholder="johnsmith@gmail.com"
              />
            </div>
            <div className="flex flex-col mb-3 lg:mb-4 items-start">
              <label className="mb-2 ml-2 lg:ml-4">Password</label>
              <input
                className="border rounded-full py-2 px-3 text-grey-darker w-full lg:w-72 "
                type="password"
                placeholder="********"
              />
            </div>
            <div className="flex flex-row mb-3 lg:mb-4 items-center">
              <input type="checkbox" className="mr-2" />
              <h1>Remember Me</h1>
            </div>
            <div className="mt-3 lg:mt-4 w-full lg:w-36">
              <Button
                text="Log In"
                onClick={() => navigate(props.Login ? "/login" : "/dashboard")}
              />
            </div>
            <div className="mt-3 lg:mt-4 flex items-center sm:flex flex-col">
              <h1>Don't have an account? </h1>
              <p className="text-blue-400"> Please contact addministration</p>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-black bg-opacity-5 ">
        <img
          src={login}
          alt="no internet"
          className="mt-2 lg:mt-5 w-[1000px]"
        />
      </div>
    </div>
  );
};

export default Login;
