import React from "react";
import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldHalfStarIcon from "components/Icons/Bold/halfStar";
import BoldThumbsupIcon from "components/Icons/Bold/thumbsUp";
import LightStarIcon from "components/Icons/Light/star";
import BoldLocationIcon from "components/Icons/Bold/location";

import { Link } from "react-router-dom";

const TopNutri = ({ info }) => {
  const {
    name,
    rating,
    fees,
    address,
    profile_pic,
    years_Of_Experience,
    clinic_name,
    category,
    locality,
    _id,
  } = info;

  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-4 mt-12 text-dark-100 mx-4">
        <div className="flex justify-center space-x-6">
          {/* img */}
          <div>
            <img
              src={profile_pic.image_url}
              alt="Profile Pic"
              className="w-32 h-32 rounded-lg mx-auto"
            />
          </div>
          <div>
            {/* Average Rating */}
            <div className="text-3xl text-gray-200 font-bold">
              {rating} Rating
            </div>

            {/* Stars */}
            <div className="flex">
              {rating >= 1 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {rating >= 2 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {rating >= 3 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {rating >= 4 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}
              {rating === 5 ? (
                <BoldFullStarIcon color="#ffdf00" size="27" />
              ) : (
                <></>
              )}

              {rating % 1 !== 0 ? (
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
          <div className="font-black text-2xl">{name}</div>

          {/* Category */}
          <div className="text-lg font-semibold text-dark-900">{category}</div>

          {/* Experience */}
          <div className="text-lg text-dark-900">
            {years_Of_Experience} years experience overall
          </div>
        </div>

        {/* Locality + Location hyperlink */}
        <div className="text-dark-100 text-lg flex flex-col">
          <Link
            to={address}
            className="flex space-x-1 font-semibold bg-dark-100 hover:bg-dark-200 ease-in-out delay-100 shadow-lg cursor-pointer transition p-1 rounded-lg w-3.5/4"
            target="_blank"
          >
            <BoldLocationIcon color="#ff0000" size="25" />
            <div className="text-white">
              {clinic_name}, {locality}
            </div>
          </Link>

          {/* Per session fee */}
          <div className="font-semibold mt-2">₹{fees} per session</div>
        </div>


        {/* book appointment*/}
        <button className="bg-dark-100 hover:bg-dark-200 text-white text-lg font-bold rounded-lg py-2">
          <Link to={`/doctorProfile/${_id}`}>View More</Link>
        </button>
      </div>
    </>
  );
};

export default TopNutri;
