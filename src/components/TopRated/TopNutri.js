import React from "react";

import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldHalfStarIcon from "components/Icons/Bold/halfStar";
import BoldThumbsupIcon from "components/Icons/Bold/thumbsUp"

const TopNutri = ({info}) => {
  const { name, rating, fees, address, profile_pic, experience, category, locality } = info;

  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-4 mt-12 text-dark-100 mx-4">
        <div style={{ marginLeft: 160 }}>
          <div
            style={{ marginLeft: 50 }}
            className="text-3xl text-gray-200 font-bold"
          >
            {rating}/5
          </div>
          <div className="flex">

            <BoldFullStarIcon color="#ffdf00" size="27" />
            <BoldFullStarIcon color="#ffdf00" size="27" />
            <BoldFullStarIcon color="#ffdf00" size="27" />
            <BoldFullStarIcon color="#ffdf00" size="27" />
            <BoldHalfStarIcon color="#ffdf00" size="27" />
          </div>
          <div className="text-white text-md font-thin ml-2 mt-1">
            <i>(72% rated 4 star)</i>
          </div>
        </div>

        {/* img */}
        <div style={{ width: 140, marginTop: -105 }}>
          <img
           src={profile_pic.image_url}
            alt="Profile Pic"
            className="w-32 h-32 rounded-lg  mx-auto"
          />
        </div>

        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-2xl" style={{ marginTop: -5 }}>
            Dr. {name}
          </div>

          <div className="text-lg text-dark-900">{category}</div>

          {/* Experience */}
          <div className="text-md text-dark-900">
            <i>15 years experience overall</i>
          </div>
        </div>

        {/* Locality + Location hyperlink */}
        <div className="font-semibold text-md" style={{ marginTop: 10 }}>
          {locality}
          <span className="ml-2 text-black">•</span>
          <a
            className="hover:underline text-black font-semibold ml-2 text-md"
            href="https://tinyurl.com/3sktjaca"
          >
            Nutriwealth Healthify Clinic
          </a>
          {/* Per session fee */}
          <div className="text-md font-semibold text-black  ">Fees : ₹{fees}</div>
        </div>

        {/* % Upvoted */}
        {/* % Upvoted */}
        <div className="">
          <button
            type="button"
            className="flex space-x-1 px-3 py-1 text-md font-semibold text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <BoldThumbsupIcon color="#ffffff" size="23" />
            <div>94%</div>
          </button>

          <a
            href="/doctorProfile"
            className="mt-2 font-thin text-white hover:underline"
          >
            <i>120 Patient Reviews</i>
          </a>
        </div>

        {/* book appointment*/}
        <button className="bg-dark-100 hover:bg-dark-200 text-white text-lg font-bold rounded-lg py-2">
          <a href="/doctorProfile"> View More</a>
        </button>
      </div>
    </>
  );
};

export default TopNutri;
