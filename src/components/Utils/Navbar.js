// import files
import React from "react";
import { useLocation, Link } from "react-router-dom";
// Light Icons
import LightHomeIcon from "components/Icons/Light/home";
import LightSearchIcon from "components/Icons/Light/search";
import LightAboutIcon from "components/Icons/Light/about";
import LightMyAccountIcon from "components/Icons/Light/myAccount";
import LightServiceIcon from "components/Icons/Light/service";
// Bold Icons
import BoldHomeIcon from "components/Icons/Bold/home";
import BoldSearchIcon from "components/Icons/Bold/search";
import BoldMyAccountIcon from "components/Icons/Bold/myAccount";
import BoldAboutIcon from "components/Icons/Bold/about";
import BoldServiceIcon from "components/Icons/Bold/service";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-[16%] bg-dark-200 font-body-primary fixed">
      {/* Main Container */}
      <div className="px-2 flex flex-col justify-between h-screen py-5">
        {/* Logo */}
        <div className="text-4xl font-black text-white text-center font-head-primary">
          <a href="/">WELLCARE</a>
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
              <div className="active-route">
                <div className="my-auto">
                  <LightHomeIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">Home</div>
              </div>
            )}
          </Link>

          {/* Search */}
          <Link to="/search">
            {location.pathname === "/search" ? (
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

          {/* About */}
          <Link to="/about">
            {location.pathname === "/about" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldAboutIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">About</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightAboutIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-xl text-dark-600">About</div>
              </div>
            )}
          </Link>

          {/* Services */}
          <Link to="/services">
            {location.pathname === "/services" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldServiceIcon color="#ffffff" size="27" />
                </div>
                <div className="text-xl">Services</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightServiceIcon color="#94A3B8" size="27" />
                </div>
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
