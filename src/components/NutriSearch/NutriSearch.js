import React from "react";
import Heading from "components/NutriSearch/Heading";
import Filter from "components/NutriSearch/Filter";
import DoctorResult from "components/NutriSearch/Result";
import Pagination from "components/PhysioSearch/Pagination";

const NutriSearch = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
        <div className="fixed top-0 w-[84%] backdrop-blur-2xl z-50 py-4">
          {/* Title */}
          <Heading />

          {/* form and results */}
          <Filter />
        </div>

        {/* Results */}
        <div className="w-[85%] h-full mx-auto grid grid-cols-3 gap-6 z-40 relative top-44 bottom-0">
          <DoctorResult />
          <DoctorResult />
          <DoctorResult />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default NutriSearch;
