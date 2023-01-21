// Modules
import React from "react";

// Components
import Navbar from "components/Utils/Navbar";
import HomePart1 from "components/Home/Part1";
import HomePart2 from "components/Home/Part2";

const Home = () => {
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* 1.Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      {/* 3.Home Page */}
      <div className="w-[84%] flex">
        {/* 3a */}
        <div className="w-[75%] bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 px-6">
          <HomePart1 />
        </div>

        {/* 3b */}
        <div className="w-[25%] h-screen">
          <HomePart2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
