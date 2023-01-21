import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full py-32 my-0.5 bg-dark-100">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          {/* Slogan */}
          <h2 className="text-5xl font-bold text-primary-blue">
            Trusted By users across the world
          </h2>

          {/* Tagline */}
          <p className="text-3xl py-6 text-dark-900">
            A one stop destination that connects users to experts <br></br> with
            the primary aim of providing one-to-one monitoring <br></br> which
            would help in enhancing the overall well-being of an individual.
          </p>
        </div>

        {/* Analysis Containers */}
        <div className="grid md:grid-cols-3 gap-5 px-20 text-center mt-2">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-blue">25k</p>
            <p className="text-dark-800 font-medium text-lg">Active Users</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-blue">5k</p>
            <p className="text-dark-800 font-medium text-lg">
              Experts Registered
            </p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-blue">100k</p>
            <p className="text-dark-800 font-medium text-lg">
              Total Impressions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
