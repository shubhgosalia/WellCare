import React from "react";
import LightRightArrowIcon from "components/Icons/Light/rightArrow";

const Navbar = () => {
  return (
    <div>
      {/* Main container */}
      <div className="flex flex-row justify-between px-36 py-3 bg-dark-100">
        {/* Logo */}
        <div className="text-4xl font-black  text-blue-600">WELLCARE</div>

        {/* Routes and My Account Button */}
        <div className="flex flex-row w-1/2 justify-between text-white text-xl">
          {/* Routes */}
          <div className="flex flex-row space-x-20 font-medium p-2">
            {/*  */}
            <div>Home</div>
            <div>Doctor</div>
            <div>Services</div>
            <div>Review</div>
          </div>

          {/* My account Button */}
          <div className="font-medium text-white bg-blue-600 p-2 rounded flex flex-row">
            <div>My Account</div>
            <LightRightArrowIcon size={20} color="#000000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
