import React from "react";

const StatHeading = () => {
  return (
    <div className="flex flex-col text-center space-y-0">
      <div className="font-semibold text-5xl text-dark-900 ">
        <span className="text-primary-blue">WellCare Statistics</span>
      </div>

      <div className="text-dark-700 text-lg">Some stats that matter!</div>
    </div>
  );
};

export default StatHeading;
