import React from "react";

// Icons
import BoldGymIcon from "components/Icons/Bold/gym";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldPhysioIcon from "components/Icons/Bold/physio";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const clickHandler1 = () => {
    navigate("/searchPhysiotherapists");
  };

  const clickHandler2 = () => {
    navigate("/searchNutritionists");
  };

  const clickHandler3 = () => {
    navigate("/searchGymtrainers");
  };

  return (
    <div
      className="w-full flex flex-col space-y-5 text-white"
      style={{ marginBottom: 20 }}
    >
      <div className="text-4xl text-center text-dark-700 font-semibold">
        Categories
      </div>

      {/* Containers */}

      {/* Physio and Yoga */}
      <div className="flex flex-row justify-center space-x-8">
        {/* Gym Trainers */}

        <div
          className="flex flex-col space-y-3 w-[30%] bg-primary-blue rounded-lg p-5 cursor-pointer"
          onClick={clickHandler3}
        >
          <div className="mx-auto">
            <BoldGymIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Gym Trainers</div>
        </div>

        {/* Nutritionist */}
        <div
          className="flex flex-col space-y-3 w-[30%] bg-primary-blue rounded-lg  p-5 cursor-pointer"
          onClick={clickHandler2}
        >
          <div className="mx-auto">
            <BoldNutritionistIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Nutritionists</div>
        </div>

        {/* Physio */}
        <div
          className="flex flex-col space-y-3 w-[30%] bg-primary-blue rounded-lg p-5 cursor-pointer"
          onClick={clickHandler1}
        >
          <div className="mx-auto">
            <BoldPhysioIcon size="86" color="#ffffff" />
          </div>

          {/* Text */}
          <div className="font-bold text-lg text-center">Physiotherapists</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
