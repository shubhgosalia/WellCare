import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px]mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted By users across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            A one stop destination that connects users to experts <br></br> with
            the primary aim of providing one-to-one monitoring <br></br> which
            would help in enhancing the overall well-being of an individual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 px-20 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">25k</p>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">5k</p>
            <p className="text-gray-400 mt-2">Experts Registered</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100k</p>
            <p className="text-gray-400 mt-2">Total Impressions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
