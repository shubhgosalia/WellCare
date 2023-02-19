// Modules
import React from "react";

// Components
import Navbar from "components/Utils/Navbar";
import Home1 from "components/Home/Center";
import HomeRightSidebar from "components/Home/RightSidebar";

const Home = () => {
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* 1.Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      {/* 3.Home Page */}
      {/* 3a */}
      <div className="w-[64%] px-6 bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100">
        <Home1 />
      </div>

      {/* 3b */}
      <div className="w-[20%] h-screen">
        <HomeRightSidebar />
      </div>
    </div>
  );
};

export default Home;
