// import files
import React from "react";
import { useLocation, Link } from "react-router-dom";
import UserImage from "../../assets/Krish.png";
// Light Icons
import LightHomeIcon from "components/Icons/Light/home";
import LightSearchIcon from "components/Icons/Light/search";
import LightChatIcon from "components/Icons/Light/chat";
import LightMyAccountIcon from "components/Icons/Light/myAccount";
import LightServiceIcon from "components/Icons/Light/service";
// Bold Icons
import BoldHomeIcon from "components/Icons/Bold/home";
import BoldSearchIcon from "components/Icons/Bold/search";
import BoldMyAccountIcon from "components/Icons/Bold/myAccount";
import BoldChatIcon from "components/Icons/Bold/chat";
import BoldServiceIcon from "components/Icons/Bold/service";


const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-[16%] bg-dark-200 font-body-primary fixed">
      {/* Main Container */}
      <div className="px-2 flex flex-col justify-between h-screen py-5">
        {/* Logo */}
        <div className="text-4xl font-black text-white text-center font-head-primary">
          <Link to="/home">WELLCARE</Link>
        </div>

        {/* Routes */}
        <div className="text-dark-700 flex flex-col space-y-5 text-xl mx-auto">
          {/* Home */}
          <Link to="/home">
            {location.pathname === "/home" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldHomeIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">Home</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightHomeIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">Home</div>
              </div>
            )}
          </Link>

          {/* Search */}
          <Link to="/doctorSearch">
            {location.pathname === "/doctorSearch" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldSearchIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">Search</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightSearchIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">Search</div>
              </div>
            )}
          </Link>

          {/* Chat */}
          <Link to="/chat">
            {location.pathname === "/chat" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldChatIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">Chats</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightChatIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">Chats</div>
              </div>
            )}
          </Link>

          {/* Services */}
          <Link to="/chat">
            {location.pathname === "/services" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldServiceIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">Services</div>
              </div>
            ) : (
              <div className="inactive-route">
                <LightServiceIcon color="#94A3B8" size="27" />
                <div className="text-xl text-dark-600">Services</div>
              </div>
            )}
          </Link>

          {/* My Account */}
          <Link to="/myAccount">
            {location.pathname === "/myAccount" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldMyAccountIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">My Account</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightMyAccountIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">My Account</div>
              </div>
            )}
          </Link>
        </div>
        {/* Profile Picture */}
        <div className="flex flex-col text-center space-y-3">
          {/* Picture */}
          <div className="border-primary-blue border-2 mx-auto overflow-hidden rounded-full">
            <img
              src={UserImage}
              alt=""
              className="rounded-full m-2 w-24 h-24"
            />
          </div>

          {/* Name */}
          <div className="text-dark-900 font-bold text-xl">Krish Vadhani</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
