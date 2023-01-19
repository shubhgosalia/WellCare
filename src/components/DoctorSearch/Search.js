import React from "react";
import Heading from "components/DoctorSearch/Heading";
import Filter from "components/DoctorSearch/Filter";
import DoctorResult from "components/DoctorSearch/Result";

const Search = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
        {/* Title */}
        <Heading />

        {/* form and results */}
        <Filter />

        {/* Results */}
        <div className="px-20">
          <DoctorResult />
        </div>
      </div>
    </>
  );
};

export default Search;
