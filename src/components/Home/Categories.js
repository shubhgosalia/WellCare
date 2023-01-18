import React from "react";

// Icons
import BoldYogaIcon from "components/Icons/Bold/yoga";
import BoldGymIcon from "components/Icons/Bold/gym";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldPhysioIcon from "components/Icons/Bold/physio";

const Categories = () => {
  return (
    <div className="w-full flex flex-col space-y-8 text-white">
      <div className="font-bold text-3xl text-center">Categories</div>

      {/* Conatiners */}

      {/* Physio and Yoga */}
      <div className="flex flex-row justify-center space-x-8">
        {/* Yoga */}
        <div className=" flex flex-col space-y-3 w-[40%] bg-primary-blue shadow-md shadow-primary-blue/70 rounded-lg  p-5 cursor-pointer">
          {/* Icon */}
          <div className="mx-auto">
            <BoldYogaIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Yoga</div>
        </div>

        {/* Gym Trainers */}
        <div className="flex flex-col space-y-3 w-[40%] bg-primary-blue shadow-md shadow-primary-blue/70 rounded-lg  p-5 cursor-pointer">
          <div className="mx-auto">
            <BoldGymIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Gym Trainers</div>
        </div>

        {/* Nutritionist */}
        <div className="flex flex-col space-y-3 w-[40%] bg-primary-blue shadow-md shadow-primary-blue/70 rounded-lg  p-5 cursor-pointer">
          <div className="mx-auto">
            <BoldNutritionistIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Nutritionist</div>
        </div>

        {/* Physio */}
        <div className="flex flex-col space-y-3 w-[40%] bg-primary-blue shadow-md shadow-primary-blue/70 rounded-lg  p-5 cursor-pointer">
          <div className="mx-auto">
            <BoldPhysioIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Physiotherapist</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
