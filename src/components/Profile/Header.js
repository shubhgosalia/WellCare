import React, { useState } from "react";
// import UserImage from "../../assets/Krish.png";

const Header = (props) => {
  return (
    <div className="bg-gradient-to-tr from-dark-100 to-dark-200 h-full flex space-x-6 text-white py-4">
      {/* Image */}
      <div className=""></div>

      <img
        src={props.data.profile_pic.image_url}
        alt=""
        className="w-48 h-48 rounded-full my-auto ml-10"
      />

      {/* Name */}
      <div className="mt-auto mb-4 flex flex-col space-y-2 font-body-primary">
        <div className="px-1 text-2xl">
          {props.data.specialization} {props.data.category}
        </div>

        <div className="text-8xl font-bold">{props.data.name}</div>

        <div className="flex space-x-4">
          <div className="text-xl font-semibold px-1 text-dark-600">
            {props.data.email}
          </div>
          {isNaN(props.reviewPercentage) ? (
            <div className="bg-green-500 rounded-md font-bold px-4 py-2">
              0% postive reviews
            </div>
          ) : (
            <div className="bg-green-500 rounded-md font-bold px-4 py-2">
              {Number.parseInt(props.reviewPercentage)}% positive reviews
            </div>
          )}
        </div>

        <div className="font-medium text-xl px-1">
          {props.data.gender}, {props.data.age}yrs
        </div>

        <div className="w-[80%] text-lg font-normal px-1">{props.data.bio}</div>
      </div>
    </div>
  );
};

export default Header;
