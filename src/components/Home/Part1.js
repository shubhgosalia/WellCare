import React from "react";
// Icons
import BoldYogaIcon from "components/Icons/Bold/yoga";
import BoldGymIcon from "components/Icons/Bold/gym";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldPhysioIcon from "components/Icons/Bold/physio";
// importing Files
import Button from "components/Dynamic/Button";

const Part1 = () => {
  return (
    <div className="flex flex-col space-y-5 w-[65%] py-5">
      {/* Title */}
      <div className="flex flex-row space-x-3 text-white text-4xl font-semibold">
        <span className="my-auto">Good Morning,</span>
        <br />
        <span className="font-bold text-primary-blue">Krish</span>
      </div>

      {/* Description */}
      <div className="text-white text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
        facere nesciunt non quisquam sapiente odio illo nisi? Fuga, accusamus
        sapiente! Voluptatum nihil at corrupti veritatis, et non animi inventore
        quis.
      </div>

      {/* Button */}
      <Button text="See Suggestions" color="" />

      {/* Categories */}
      <div className="w-full flex flex-col space-y-8">
        <div className="font-bold text-3xl text-center text-white">
          Categories
        </div>

        {/* Conatiners */}
        <div className="flex flex-col space-y-12">
          {/* Physio and Yoga */}
          <div className="flex flex-row justify-center space-x-20">
            {/* Yoga */}
            <div className=" flex flex-col space-y-3 w-[40%] bg-neon-orange rounded-lg p-5 cursor-pointer">
              {/* Icon */}
              <div className="mx-auto">
                <BoldYogaIcon size="86" />
              </div>

              {/* Text */}
              <div className="font-bold text-lg text-center">Yoga</div>
            </div>

            {/* Gym Trainers */}
            <div className="flex flex-col space-y-3 w-[40%] bg-neon-purple rounded-lg p-5 cursor-pointer">
              <div className="mx-auto">
                <BoldGymIcon size="86" />
              </div>

              {/* Text */}
              <div className="font-bold text-lg text-center">Gym Trainers</div>
            </div>
          </div>

          {/* Gym Trainers and Nutritionist */}
          <div className="flex flex-row justify-center space-x-20">
            {/* Nutritionist */}
            <div className="flex flex-col space-y-3 w-[40%] bg-neon-green rounded-lg p-5 cursor-pointer">
              <div className="mx-auto">
                <BoldNutritionistIcon size="86" />
              </div>

              {/* Text */}
              <div className="font-bold text-lg text-center">Nutritionist</div>
            </div>

            {/* Nutritionist */}
            <div className="flex flex-col space-y-3 w-[40%] bg-neon-yellow rounded-lg p-5 cursor-pointer">
              <div className="mx-auto">
                <BoldPhysioIcon size="86" />
              </div>

              {/* Text */}
              <div className="font-bold text-lg text-center">
                Physiotherapist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
