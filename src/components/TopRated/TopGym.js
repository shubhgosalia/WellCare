import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldHalfStarIcon from "components/Icons/Bold/halfStar";

const TopGym = () => {
  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-4 mt-12 text-dark-100 mx-4">
        <div style={{ marginLeft: 160 }}>
          <div
            style={{ marginLeft: 50 }}
            className="text-3xl text-gray-200 font-bold"
          >
            4/5
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
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-32 h-32 rounded-lg  mx-auto"
          />
        </div>

        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-2xl" style={{ marginTop: -5 }}>
            Rupa Shroff
          </div>

          {/* Speciality */}
          <div className="text-lg text-dark-900">Gym Trainer</div>

          {/* Experience */}
          <div className="text-md text-dark-900">
            <i>15 years experience overall</i>
          </div>
        </div>

        {/* Locality + Location hyperlink */}
        <div className=" font-semibold text-md" style={{ marginTop: 10 }}>
          Jogeshwari West
          <span className="ml-2 text-black">•</span>
          <a
            className=" hover:underline text-black font-semibold ml-2 text-md"
            href="https://tinyurl.com/3sktjaca"
          >
            The Cloud 9 Fitness Club
          </a>
          {/* Per session fee */}
          <div className="text-md font-semibold text-black  ">
            ₹1500 session fee
          </div>
        </div>

        {/* % Upvoted */}
        <div className="left-align">
          <button
            type="button"
            className="px-3 py-1 text-md font-semibold text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <FontAwesomeIcon icon={faThumbsUp} /> 94%
          </button>

          <a
            href="/doctorProfile"
            className="ml-2 font-thin text-white hover:underline"
          >
            <i>120 Patient Reviews</i>
          </a>
        </div>

        {/* book appointment*/}
        <button
          // onClick={clickHandler}
          className="float-right bg-dark-100 hover:bg-gray-800 text-white text-sm font-bold rounded px-2 py-2"
        >
          <a href="/doctorProfile"> View More</a>
        </button>
      </div>
    </>
  );
};

export default TopGym;
