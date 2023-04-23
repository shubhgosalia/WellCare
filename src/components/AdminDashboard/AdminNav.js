// import files
import React, { useContext, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import UserImage from "../../assets/Krish.png";
// Light Icons
import LightStatIcon from "components/Icons/Light/stat";
import LightVerifyIcon from "components/Icons/Light/verify";
import LightLogoutIcon from "components/Icons/Light/logout";
import LightQueryIcon from "components/Icons/Light/query";
// Bold Icons
import BoldStatIcon from "components/Icons/Bold/stat";
import BoldVerifyIcon from "components/Icons/Bold/verify";
import BoldQueryIcon from "components/Icons/Bold/query";

// importing context
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // using the context for getting the current logged in user
  const { isLoggedIn, profile, setLoginStatus } = useContext(UserContext);
  //   //checking if the user is logged in or not
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate("/login");
  //     }
  //   }, []);

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
          <Link to="/adminDashboard">ADMIN DASHBOARD</Link>
        </div>

        {/* Routes */}
        <div
          className="text-dark-700 flex flex-col space-y-6 text-2xl mx-auto"
          style={{ marginTop: -200 }}
        >
          {/* Statistics */}
          <Link to="/adminDashboard">
            {location.pathname === "/adminDashboard" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldStatIcon color="#ffffff" size="27" />
                </div>
                <div className="text-2xl">Statistics</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightStatIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-2xl text-dark-600">Statistics</div>
              </div>
            )}
          </Link>

          {/* Expert Verification */}
          <Link to="/expertVerify">
            {location.pathname === "/expertVerify" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldVerifyIcon color="#ffffff" size="27" />
                </div>
                <div className="text-2xl">Verify Experts</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightVerifyIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-2xl text-dark-600">Verify Experts</div>
              </div>
            )}
          </Link>

          {/* User Query */}

          <Link to="/userQuery">
            {location.pathname === "/userQuery" ? (
              <div className="active-route">
                <div className="my-auto">
                  <BoldQueryIcon color="#ffffff" size="27" />
                </div>
                <div className="text-2xl">Query</div>
              </div>
            ) : (
              <div className="inactive-route">
                <div className="my-auto">
                  <LightQueryIcon color="#94A3B8" size="27" />
                </div>
                <div className="text-2xl text-dark-600">Query</div>
              </div>
            )}
          </Link>

          {/* logout  */}
          <div
            className="flex flex-row items-center mx-4 hover:cursor-pointer"
            onClick={logout}
          >
            <div className="my-auto">
              <LightLogoutIcon color="#94A3B8" size="27" />
            </div>
            <div className="text-2xl mx-2 text-dark-600">Logout</div>
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

export default AdminNav;
