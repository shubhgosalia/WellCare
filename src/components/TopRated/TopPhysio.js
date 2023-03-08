import React from "react";

const TopPhysio = () => {
  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-5 text-dark-100">
        {/* img */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-32 h-32 rounded-lg  mx-auto"
          />
        </div>
        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-2xl">Dr. Deepti Sharma</div>

          {/* Speciality */}
          <div className="text-sm text-dark-900">Lung Physiotherapist</div>
        </div>
        {/* Address */}
        <div className=" font-semibold">
          Gymkhana, Rahul building, 1/b, Marve Rd, opp. Malad, Malad, Navy
          Colony, Liberty Garden, Malad West, Mumbai, Maharashtra 400064
        </div>

        {/* book appointment*/}
        <button
          // onClick={clickHandler}
          className="float-right bg-dark-100 hover:bg-gray-800 text-white text-sm font-bold rounded px-2 py-2"
        >
          <a href="/doctorProfile"> View More</a>
        </button>
      </div>
    </>
  );
};

export default TopPhysio;
