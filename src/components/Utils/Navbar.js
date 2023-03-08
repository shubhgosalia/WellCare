// import files
import React, { useContext, useEffect } from "react";
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

// importing context 
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from "sweetalert2";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // using the context for getting the current logged in user
  const { isLoggedIn, profile, setLoginStatus } = useContext(UserContext);
  //checking if the user is logged in or not
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  const logout = async () => {
    try {
      let resp = await axios.get("http://localhost:4000/auth/logout", { withCredentials: true });
      if (resp.data.success) {
        setLoginStatus(false);
        Swal.fire({
          icon: "success",
          title: resp.data.message,
        });
        navigate("/login");
      }
    } catch (err) {
      console.log("error while logging out : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  }

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
          {/* logout  */}
          <div className="flex flex-row items-center mx-4 hover:cursor-pointer" onClick={logout}>
            <div className="my-auto">
              <LightServiceIcon color="#94A3B8" size="27" />
            </div>
            <div className="text-xl mx-2 text-dark-600">Logout</div>
          </div>
        </div>
        {/* Profile Picture */}
        <div className="flex flex-col text-center space-y-3">
          {/* Picture */}
          <div className="border-primary-blue border-2 mx-auto overflow-hidden rounded-full">
            <img
              src={profile.profile_pic.image_url}
              alt="DP"
              className="rounded-full m-2 w-24 h-24"
            />
          </div>

          {/* Name */}
          <div className="text-dark-900 font-bold text-xl">{profile.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
