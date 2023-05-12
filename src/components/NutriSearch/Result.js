import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldHalfStarIcon from "components/Icons/Bold/halfStar";
import BoldThumbsupIcon from "components/Icons/Bold/thumbsUp";
import BoldLocationIcon from "components/Icons/Bold/location";
import { Link } from "react-router-dom";

const Result = ({ element }) => {
  // const [date, SetDate] = useState(new Date());
  // const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-4 mt-text-dark-100 mx-4">
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
              {element.rating} Rating
            </div>

            {/* Stars */}
            <div className="flex mr-7">
              {element.rating >= 1 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {element.rating >= 2 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {element.rating >= 3 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {element.rating >= 4 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {element.rating === 5 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}

              {element.rating % 1 !== 0 ? (
                <BoldHalfStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
            </div>

            {/* static */}
          </div>
        </div>

        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-black text-2xl">{element.name}</div>

          {/* Category */}
          <div className="text-lg font-semibold text-dark-900">
            {element.category}
          </div>

          {/* Experience */}
          <div className="text-lg text-dark-900">
            {element.years_Of_Experience} years experience overall
          </div>
        </div>

        {/* Locality + Location hyperlink */}
        <div className="text-dark-100 text-lg flex flex-col">
          <Link
            to={element.address}
            className="flex space-x-1 font-semibold bg-dark-100 hover:bg-dark-200 ease-in-out delay-100 shadow-lg cursor-pointer transition p-1 rounded-lg w-3.5/4"
            target="_blank"
          >
            <BoldLocationIcon color="#ff0000" size="25" />
            <div className="text-white">
              {" "}
              {element.clinic_name}, {element.locality}
            </div>
          </Link>

          {/* Per session fee */}
          <div className="font-semibold mt-2">₹{element.fees} per session</div>
        </div>

        <button className="bg-dark-100 hover:bg-dark-200 text-white text-lg font-bold rounded-lg py-2">
          <Link to={`/doctorProfile/${element.id}`}>View More</Link>
        </button>
      </div>
    </>
  );
};

export default Result;
