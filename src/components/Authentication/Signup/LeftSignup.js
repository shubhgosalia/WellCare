import React from "react";

const LeftSignup = () => {
  return (
    <div className="flex flex-col bg-primary-blue rounded-lg  px-14 py-10 justify-between fixed w-1/3 h-[95%]">
      {/* heading */}
      <div className="flex-col space-y-0 text-center">
        <div className="font-black text-5xl font-head-primary text-dark-100">
          WellCare
        </div>
        <div className="text-xs">Must for HealthCare</div>
      </div>

      {/* Center Tagline */}
      <div className="flex flex-col space-y-2">
        <div className="font-black text-5xl text-dark-100">
          Start your journey with us
          <span className="text-white">.</span>
        </div>
        <div className="text-base font-thin">
          Discover the health portal full of of doctors and trainers who are
          waiting to help you on making your health journey easier.
        </div>
      </div>

      {/* Container 3 */}
      <div className="font-bold text-xl text-dark-100">
        Being healthy has countless benefits. So what is stopping you? Just
        connect with us and take a step towards improving your health...
      </div>
    </div>
  );
};

export default LeftSignup;
