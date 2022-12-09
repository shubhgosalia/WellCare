// Modules
import React from "react";

// Components
import Navbar from "components/Home1/Navbar";
import HomePart1 from "components/Home1/Part1";
import HomePart2 from "components/Home1/Part2";

const Home = () => {
  return (
    <div className="w-full flex flex-row bg-dark-100 font-poppins">
      {/* 1.Navbar */}
      <Navbar />

      {/* 2. hr */}
      <div className="w-px my-20 bg-dark-700"></div>

      {/* 3.Home Page */}
      <div className="bg-dark-100 w-[84%] flex px-10 space-x-10">
        {/* 3a */}
        <HomePart1 />

        {/* 3b */}
        <HomePart2 />
      </div>
    </div>
  );
};

export default Home;
