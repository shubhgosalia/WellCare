import React from "react";
import Search from "components/DoctorSearch/Search";
import Navbar from "components/Utils/Navbar";

const Home = () => {
  return (
    <div className="w-full flex flex-row bg-dark-100 font-body-primary">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. hr */}
      <div className="w-px my-20 bg-dark-700"></div>

      {/*  */}
      <div className="w-[84%]">
        <Search />
      </div>
    </div>
  );
};

export default Home;
