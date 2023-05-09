import React from "react";
import Navbar from "components/Utils/Navbar";
import PhysioSearch from "components/PhysioSearch/PhysioSearch";

const Home = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] min-h-screen">
        <Navbar />
      </div>

      {/*  */}
      <div className="w-[84%] ">
        <PhysioSearch />
      </div>
    </div>
  );
};

export default Home;
