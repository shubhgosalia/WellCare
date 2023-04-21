import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldHalfStarIcon from "components/Icons/Bold/halfStar";
import BoldThumbsupIcon from "components/Icons/Bold/thumbsUp";
import { Link } from "react-router-dom";

const Result = ({element}) => {
  // const [date, SetDate] = useState(new Date());
  // const navigate = useNavigate();

  return (
    <>
      <div className="w-[30%] flex flex-col bg-primary-blue p-5 rounded-lg space-y-4 mt-text-dark-100 mx-4">
        <div className="flex justify-center space-x-6">
          {/* img */}
          <div>
            <img
              src={element.profile_pic.image_url}
              alt="Profile Pic"
              className="w-32 h-32 rounded-lg mx-auto"
            />
          </div>
          <div>
            {/* Average Rating */}
            <div className="text-3xl text-gray-200 font-bold">
              {element.rating}/5
            </div>

            {/* Stars */}
            <div className="flex">
              <BoldFullStarIcon color="#ffdf00" size="27" />
              <BoldFullStarIcon color="#ffdf00" size="27" />
              <BoldFullStarIcon color="#ffdf00" size="27" />
              <BoldFullStarIcon color="#ffdf00" size="27" />
              <BoldHalfStarIcon color="#ffdf00" size="27" />
            </div>

            {/* static */}
            <div className="text-white text-md font-thin ml-2 mt-1">
              <i>(72% rated 4 star)</i>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-black text-2xl">{element.name}</div>

          {/* Speciality
          <div className="text-lg font-semibold text-dark-900">
            {element.specialization}
          </div> */}

          {/* Experience */}
          <div className="text-lg text-dark-900">
            {element.years_Of_Experience} years experience overall
          </div>
        </div>

        {/* Locality + Location hyperlink */}
        <div className="text-dark-100 text-lg flex flex-col">
          <Link className="font-semibold">{element.locality}</Link>

          {/* Per session fee */}
          <div className="font-semibold">₹{element.fees} per session</div>
        </div>

        {/* % Upvoted */}
        <div className="">
          <button
            type="button"
            className="flex space-x-1 px-3 py-1 text-md font-semibold text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <BoldThumbsupIcon color="#ffffff" size="23" />
            <div>94%</div>
          </button>
        </div>

        <button className="bg-dark-100 hover:bg-dark-200 text-white text-lg font-bold rounded-lg py-2">
          <Link to={`/doctorProfile/${element.id}`}>View More</Link>
        </button>
      </div>
    </>
  );
};

export default Result;
