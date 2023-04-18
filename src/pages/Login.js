import React from "react";
import LeftLogin from "../components/Login/LeftLogin";
import RightLogin from "components/Login/RightLogin";

const Login = () => {
  return (
    <>
      {/* main container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 w-full min-h-screen font-body-primary">
        <div className="flex flex-col lg:flex-row p-4 lg:space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="w-full lg:w-1/3">
            <LeftLogin />
          </div>

          {/* right sidebar */}
          <div className="w-[95%] mx-auto lg:w-2/3 h-full text-black flex flex-col space-y-4 lg:space-y-6">
            <RightLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
