import React from "react";

const Result = () => {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-dark-100 to-blue-900  p-5 rounded-lg space-y-5 border border-blue-900 text-dark-700 cursor-pointer">
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
        <div className="font-semibold text-2xl ">Deepti Sharma</div>

        {/* Speciality */}
        <div className="text-base">Lung Physiotherapist</div>
      </div>

      {/* Address */}
      <div className="font-semibold">
        Gymkhana, Rahul building, 1/b, Marve Rd, opp. Malad, Malad, Navy Colony,
        Liberty Garden, Malad West, Mumbai, Maharashtra 400064
      </div>
    </div>
  );
};

export default Result;
