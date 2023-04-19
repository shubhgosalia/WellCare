import React from "react";

import LeftSignup from "components/Signup/LeftSignup";
import RightSignup from "components/Signup/RightSignup";

const Signup = () => {
  return (
    <>
      {/* main container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 w-full h-full font-body-primary">
        <div className="flex flex-col lg:flex-row p-5 lg:space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="w-full lg:w-1/3">
            <LeftSignup />
          </div>

          {/* right sidebar */}
          <div className="w-full lg:w-2/3 h-full text-black lg:p-5">
            <RightSignup />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
