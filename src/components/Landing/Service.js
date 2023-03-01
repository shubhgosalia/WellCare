import React from "react";
import service from "assets/Services.avif";
import BoldPhysioIcon from "components/Icons/Bold/physio";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldGymIcon from "components/Icons/Bold/gym";

const Service = () => {
  return (
    <div name="service" className="w-full bg-dark-100 pb-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        {/* Image */}
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={service}
          alt="/home"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Services
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Find the right expert for you!
          </h3>
          <p className="py-4 text-3xl text-slate-300 text-center">
            Look out for physiotherpists, nutritionists and gym trainers{" "}
            <br></br>
            all under one roof! Book an appointment with an expert, <br></br>
            have multiple sessions and see the magic unfold!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          {/* Physio */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div
                className="w-16 p-4 bg-primary-blue text-white rounded-lg 
              mt-[-4rem] shadow-xl"
              >
                <BoldPhysioIcon size="35" color="#ffffff" />
              </div>

              <h3 className="font-bold text-2xl my-6">Physiotherapists</h3>
              <p className="text-gray-600 text-xl">
                Having a back pain, joint pain or knee pain? Well, specialized
                physiotherapists are here to heal! Find the right
                physiotherapist, get treated and monitored routinely and get
                yourself up and running!
              </p>
            </div>
          </div>

          {/* Nutritionist */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div
                className="w-16 p-4 bg-primary-blue text-white rounded-lg 
              mt-[-4rem] shadow-xl"
              >
                <BoldNutritionistIcon size="35" color="#ffffff" />
              </div>
              <h3 className="font-bold text-2xl my-6">Nutritionists</h3>
              <p className="text-gray-600 text-xl">
                Having difficulty losing weight? Well, nutritionists are here to
                help! Find the right nutritionist, get treated and monitored
                routinely and be back in shape!
              </p>
            </div>
          </div>

          {/* Gym Trainers */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div
                className="w-16 p-4 bg-primary-blue text-white rounded-lg 
              mt-[-4rem] shadow-xl"
              >
                <BoldGymIcon size="35" color="#ffffff" />
              </div>
              <h3 className="font-bold text-2xl my-6">Gym Trainers</h3>
              <p className="text-gray-600 text-xl">
                Want to maintain overall fitness? Well, gym trainers are here
                for that! Find the right instrcutor,enroll in their batch,
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
