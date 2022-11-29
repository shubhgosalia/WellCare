import React from "react";
import service from "../assets/service.png";
import physio from "../assets/physiotherapy.png";
import nutrition from "../assets/nutrition.jpg";
import yoga from "../assets/yoga.png";

const Service = () => {
  return (
    <div name="service" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={service}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Service
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Find the right expert for you!
          </h3>
          <p className="py-4 text-3xl text-slate-300 text-center">
            Look out for physiotherpists, nutritionists and yoga trainers{" "}
            <br></br>
            all under one roof! Book an appointment with an expert, <br></br>
            enroll in their course and see the magic unfold!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                src={physio}
                alt="/"
                className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl my-6">Physiotherapists</h3>
              <p className="text-gray-600 text-xl">
                Having a back pain, joint pain or knee pain? Well, specialized
                physiotherapists are here to heal! Find the right
                physiotherapist,enroll in their course, get treated and
                monitored routinely and get yourself up and running!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                src={nutrition}
                alt="/"
                className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl my-6">Nutritionists</h3>
              <p className="text-gray-600 text-xl">
                Having difficulty losing weight? Well, nutritionists are here to
                help! Find the right nutritionist,enroll in their course, get
                treated and monitored routinely and be back in shape!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <img
                src={yoga}
                alt="/"
                className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]"
              />
              <h3 className="font-bold text-2xl my-6">Yoga Trainers</h3>
              <p className="text-gray-600 text-xl">
                Want to maintain overall fitness? Well, yoga instructors are
                here for that! Find the right instrcutor,enroll in their batch,
                attend yoga sessions regularly and stay fit,mentally and
                physically!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
