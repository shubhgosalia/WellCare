import React from "react";
import Search from "components/DoctorSearch/Search";
import Navbar from "components/Utils/Navbar";

const Home = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      {/*  */}
      <div className="w-[84%] bg-gradient-to-r from-dark-100 to-dark-200">
        <Search />
      </div>
    </div>
  );
};

export default Home;
