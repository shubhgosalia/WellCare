import React from "react";
import bgImg from "assets/holistic_health.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-centre md:items-start w-full px-2 py-8">
          <p className="text-2xl">
            Your hollistic well-being our topmost priority
          </p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">WellCare</h1>
          <p className="text-2xl">Well, we Care!!</p>
          <button className="py-3 px-6 sm:w-[60%] my-8 rounded-md">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
