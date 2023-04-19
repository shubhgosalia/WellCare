import React from "react";

const LeftSignup = () => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 lg:h-[95%] lg:fixed lg:px-14 lg:py-10 lg:rounded-lg bg-primary-blue justify-between rounded-md p-5 space-y-4">
      {/* heading */}
      <div className="flex-col space-y-0 text-center">
        <div className="font-black text-6xl font-head-primary text-dark-100">
          WellCare
        </div>
        <div className="text-lg">Must for HealthCare</div>
      </div>

      {/* Center Tagline */}
      <div className="flex flex-col lg:space-y-2 space-y-6">
        <div className="font-extrabold text-4xl lg:text-5xl text-dark-100 text-center leading-10 lg:leading-normal">
          Start your journey with us
          <span className="text-white">.</span>
        </div>
        <div className=" text-lg lg:text-base font-thin leading-6">
          <i>
            Discover the health portal full of of doctors and trainers who are
            waiting to help you on making your health journey easier.
          </i>
        </div>
      </div>

      {/* Container 3 */}
      <div className="font-bold text-lg lg:text-xl text-dark-100 leading-6">
        <i>
          Being healthy has countless benefits. So what is stopping you? Just
          connect with us and take a step towards improving your health...
        </i>
      </div>
    </div>
  );
};

export default LeftSignup;
