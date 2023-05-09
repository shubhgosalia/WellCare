// Modules
import React, { useEffect, useContext } from "react";

// Components
import Navbar from "components/Utils/Navbar";
import Home1 from "components/Home/Center";
import HomeRightSidebar from "components/Home/RightSidebar";

// importing context
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // using the context for getting the current logged in user
  const { isLoggedIn, profile } = useContext(UserContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    console.log("Profile inside home page is ", profile);
    // if (profile.type === "Doctor") {
    //   if (!profile.adminVerified) {
    //     navigate("/docNotverified");
    //   }
    // }
  }, []);

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* 1.Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      {/* 3.Home Page */}
      {/* 3a */}
      <div className="w-[64%] px-6 bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100">
        <Home1 profile={profile} />
      </div>

      {/* 3b */}
      <div className="w-[20%] h-screen">
        <HomeRightSidebar
          appointments={profile.appointments}
          type={profile.type}
        />
      </div>
    </div>
  );
};

export default Home;
