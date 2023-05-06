import React from "react";

const StatHeading = () => {
  return (
    <div className="flex flex-col text-center space-y-0">
      <div className="font-semibold text-5xl text-dark-900 ">
        <span className="text-primary-blue">User/Expert Query</span>
      </div>

      <div className="text-dark-700 text-lg">
        Here are some of the user/expert queries we got!
      </div>
    </div>
  );
};

export default StatHeading;
