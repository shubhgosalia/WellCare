import React from "react";
// Light Icons
// import LightHomeIcon from "components/Icons/Light/home";
import LightSearchIcon from "components/Icons/Light/search";
import LightAboutIcon from "components/Icons/Light/about";
import LightMyAccountIcon from "components/Icons/Light/myAccount";
import LightServiceIcon from "components/Icons/Light/service";
// Bold Icons
import BoldHomeIcon from "components/Icons/Bold/home";

const Navbar = () => {
  return (
    <div className="w-[16%] bg-dark-100 font-poppins">
      {/* Main Container */}
      <div className="px-2 flex flex-col justify-between h-screen py-5">
        {/* Logo */}
        <div className="text-4xl font-black text-blue-600 text-center ">
          <a href="/">WELLCARE</a>
        </div>

        {/* Routes */}
        <div className="text-dark-700 flex flex-col space-y-5  text-xl font-sans mx-auto">
          {/* Home */}
          <div className="flex flex-row space-x-2 text-white font-bold">
            <div className="my-auto">
              <BoldHomeIcon color="#ffffff" size="20" />
            </div>
            <a href="/" className="">
              Home
            </a>
          </div>

          {/* Search */}
          <div className="flex flex-row  space-x-2">
            <div className="my-auto">
              <LightSearchIcon color="#b2b2b2" size="20" />
            </div>
            <a href="/">Search</a>
          </div>

          {/* About */}
          <div className="flex flex-row  space-x-2">
            <div className="my-auto">
              <LightAboutIcon color="#b2b2b2" size="22" />
            </div>
            <a href="/">About</a>
          </div>

          {/* Services */}
          <div className="flex flex-row space-x-2">
            <div className="my-auto">
              <LightServiceIcon color="#b2b2b2" size="20" />
            </div>
            <a href="/">Services</a>
          </div>

          {/* My Account */}
          <div className="flex flex-row space-x-2">
            <div className="my-auto">
              <LightMyAccountIcon color="#b2b2b2" size="20" />
            </div>
            <a href="/">My Account</a>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="flex flex-col text-center space-y-3">
          {/* Picture */}
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="rounded-full w-24 h-24 bg-dark-800 mx-auto border-dark-800 border-4"
          />
          {/* Name */}
          <div className="text-dark-900 font-bold text-xl">Krish Vadhani</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
