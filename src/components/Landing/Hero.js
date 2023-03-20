import React from "react";
import bgImg from "assets/holistic_health.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-dark-100 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        {/*  */}
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8 space-y-8">
          <p className="text-3xl text-dark-700">
            Your hollistic well-being our topmost priority
          </p>
          <h1 className="flex flex-col space-y-0">
            <div className=" text-5xl md:text-7xl font-bold text-white">
              WellCare
            </div>
            <p className="text-lg text-dark-600 ml-2">Must for HealthCare</p>
          </h1>
          <button className="py-3 px-6 sm:w-[60%] my-8 rounded-md bg-primary-blue hover:bg-secondary-blue text-white">
            <a href="/signup">Get Started</a>
          </button>
        </div>

        {/* Image */}
        <div>
          <img className="w-full" src={bgImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
