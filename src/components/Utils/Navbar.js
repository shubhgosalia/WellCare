// import files
import React, { useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import UserImage from "../../assets/Krish.png";

// Light Icons
import LightHomeIcon from "components/Icons/Light/home";
import LightStarIcon from "components/Icons/Light/star";
import LightChatIcon from "components/Icons/Light/chat";
import LightMyAccountIcon from "components/Icons/Light/myAccount";
import LightContactUsIcon from "components/Icons/Light/contactUs";
import LightLogoutIcon from "components/Icons/Light/logout";

// Bold Icons
import BoldHomeIcon from "components/Icons/Bold/home";
import BoldStarIcon from "components/Icons/Bold/fullStar";
import BoldMyAccountIcon from "components/Icons/Bold/myAccount";
import BoldChatIcon from "components/Icons/Bold/chat";
import BoldContactUsIcon from "components/Icons/Bold/contactUs";
import BoldCalendarIcon from "components/Icons/Bold/calendarCheck";

// importing modules
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // using the context for getting the current logged in user
  const { isLoggedIn, profile, setLoginStatus } = useContext(UserContext);
  //checking if the user is logged in or not
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const logout = async () => {
    try {
      let resp = await axios.get("http://localhost:4000/auth/logout", {
        withCredentials: true,
      });
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
  };

  return (
    <div className="w-[16%] bg-dark-200 font-body-primary fixed">
      {/* Main Container */}
      <div className="px-2 flex flex-col justify-between h-screen py-5">
        {/* Logo */}
        <div className="text-4xl font-black text-white text-center font-head-primary">
          <Link to="/home">WELLCARE</Link>
        </div>

        {/* Routes */}
        <div
          className="flex flex-col space-y-6 mx-auto w-[80%]"
          style={{ marginTop: -30 }}
        >
          {/* Home */}
          <Link to="/home">
            {location.pathname === "/home" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldHomeIcon color="#ffffff" size="27" />
                </div>
                <div>Home</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightHomeIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-dark-600">Home</div>
              </div>
            )}
          </Link>

          {/* Top Rated */}
          {profile.type === "Patient" ? (
            <Link to="/topRated">
              {location.pathname === "/topRated" ? (
                <div className="active-route">
                  <div className="my-auto">
                    <BoldStarIcon color="#ffffff" size="27" />
                  </div>
                  <div>Top Rated</div>
                </div>
              ) : (
                <div className="inactive-route">
                  <div className="my-auto">
                    <LightStarIcon color="#94A3B8" size="27" />
                  </div>
                  <div className=" text-dark-600">Top Rated</div>
                </div>
              )}
            </Link>
          ) : (
            <></>
          )}

          {/* scheduled appointment */}
          {/* {profile.type === "Doctor" ? (
            <Link to="/scheduledAppointments">
              {location.pathname === "/scheduledAppointments" ? (
                <div className="active-route">
                  <div className="my-auto">
                    <BoldCalendarIcon color="#ffffff" size="27" />
                  </div>
                  <div>Appointments</div>
                </div>
              ) : (
                <div className="inactive-route">
                  <div className="my-auto">
                    <BoldCalendarIcon color="#94A3B8" size="27" />
                  </div>
                  <div className=" text-dark-600">Appointments</div>
                </div>
              )}
            </Link>
          ) : (
            <></>
          )} */}

          {/* Chat */}
          <Link to="/chat">
            {location.pathname === "/chat" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldChatIcon color="#ffffff" size="27" />
                </div>
                <div>Chats</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightChatIcon color="#94A3B8" size="27" />
                </div>
                <div className="">Chats</div>
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
                <div style={{ marginTop: 3 }}>My Account</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightMyAccountIcon color="#94A3B8" size="27" />
                </div>
                <div style={{ marginTop: 3 }} className=" text-dark-600">
                  My Account
                </div>
              </div>
            )}
          </Link>

          {/* Reach Us */}
          <Link to="/contactUs">
            {location.pathname === "/contactUs" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldContactUsIcon color="#ffffff" size="27" />
                </div>
                <div>Reach Us</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightContactUsIcon color="#94A3B8" size="27" />
                </div>
                <div className=" text-dark-600">Reach Us</div>
              </div>
            )}
          </Link>

          {/* logout  */}
          <div
            className="button flex space-x-2 justify-center"
            onClick={logout}
          >
            <div className="my-auto">
              <LightLogoutIcon color="#ffffff" size="27" />
            </div>

            {/*  */}
            <div className="">Logout</div>
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
