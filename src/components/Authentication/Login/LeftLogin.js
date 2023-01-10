import React from "react";

const LeftLogin = () => {
  return (
    <div className="flex flex-col w-1/3 bg-primary-blue  rounded-lg px-14 py-8 justify-between ">
      {/* heading */}
      <div className="flex-col space-y-0 text-center">
        <div className="font-black text-4xl font-head-primary">WellCare</div>
        <div className="text-xs">Must for HealthCare</div>
      </div>

      {/* Center Tagline */}
      <div className="flex flex-col space-y-5">
        <div className="font-bold text-5xl leading-10">
          Start your journey with us.
        </div>
        <div className="text-base leading-7 font-thin">
          Discover the health portal full of of doctors and trainers who are
          waiting to help you on making your health journey easier.
        </div>
      </div>

      {/* Container 3 */}
      <div className="flex flex-col rounded-lg bg-primary-blue p-5">
        {/* Message */}
        <div className="">
          <b>
            Being healthy has countless benefits. So what is stopping you? Just
            connect with us and take a step towards improving your health...
          </b>
        </div>

        {/*  */}
        <div></div>
      </div>
    </div>
  );
};

export default LeftLogin;
