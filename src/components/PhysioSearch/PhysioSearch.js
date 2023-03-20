import React from "react";
import Heading from "components/PhysioSearch/Heading";
import Filter from "components/PhysioSearch/Filter";
import DoctorResult from "components/PhysioSearch/Result";
import Pagination from "components/PhysioSearch/Pagination";

const PhysioSearch = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
        <div className="top-0 w-[100%] mx-auto">
          {/* Title */}
          <Heading />

          {/* form and results */}
          <Filter />
        </div>

        {/* Results */}
        <div
          className="w-[85%] h-full mx-auto flex items-center justify-start overflow-x-auto gap-6 relative"
          style={{ marginTop: -5 }}
        >
          <DoctorResult />
          <DoctorResult />
          <DoctorResult />
        </div>

        <div
          className="w-[85%] h-full mx-auto flex items-center justify-start overflow-x-auto gap-6 relative"
          style={{ marginTop: -5 }}
        >
          <DoctorResult />
          <DoctorResult />
          <DoctorResult />
        </div>

        <div className="mx-auto flex">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default PhysioSearch;
