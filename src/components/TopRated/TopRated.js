import React from "react";
import Heading from "components/TopRated/Heading";
import Navbar from "components/Utils/Navbar";
import TopPhysio from "components/TopRated/TopPhysio";
import TopNutri from "components/TopRated/TopNutri";
import TopGym from "components/TopRated/TopGym";
import Pagination from "components/PhysioSearch/Pagination";
import { Scrollbars } from "react-custom-scrollbars-2";

const TopRated = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] min-h-screen">
        <Navbar />
      </div>
      <div className="w-[84%]">
        {/* Main Container */}
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          <div className="top-0 w-[84%] mx-auto">
            {/* Title */}
            <Heading />
          </div>

          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-10 border-l-0 border-r-0"
            style={{ marginTop: 40, fontSize: 22 }}
          >
            Top Rated Physiotherapists
          </div>

          {/* Top Rated Physios */}
          <div className="w-[85%] mx-auto h-full flex items-center justify-start overflow-x-auto gap-6 relative">
            <div>
              <TopPhysio />
            </div>
            <div>
              <TopPhysio />
            </div>
            <div>
              <TopPhysio />
            </div>
          </div>

          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-16 border-l-0 border-r-0"
            style={{ marginTop: 75, fontSize: 22 }}
          >
            Top Rated Nutritionists
          </div>

          {/* Top rated Nutritionists */}
          <div
            className="w-[85%] mx-auto h-full flex items-center justify-start overflow-x-auto gap-6 relative"
            style={{ marginTop: -22 }}
          >
            <div>
              <TopNutri />
            </div>
            <div>
              <TopNutri />
            </div>
            <div>
              <TopNutri />
            </div>
          </div>

          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-16 border-l-0 border-r-0"
            style={{ marginTop: 75, fontSize: 22 }}
          >
            Top Rated Gym Trainers
          </div>

          {/* Top rated Gym Trainers */}
          <div
            className="w-[85%] mx-auto h-full flex items-center justify-start overflow-x-auto gap-6 relative"
            style={{ marginTop: -22 }}
          >
            <div>
              <TopGym />
            </div>
            <div>
              <TopGym />
            </div>
            <div>
              <TopGym />
            </div>
          </div>

          <div className="mx-auto flex">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
