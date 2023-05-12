import React from "react";

const Review = ({ review, id }) => {
  return (
    <div className="bg-primary-blue mx-3 my-2 text-dark-100 p-3 rounded-lg">
      <div className="flex-col ">
        <div className="flex space-x-4">
          {/* icon */}
          <img
            src={
              review.patient._id === id
                ? review.profile_pic
                : review.patient.profile_pic.image_url
            }
            alt="profilePic"
            className="w-8 h-8 bg-white rounded-full"
          />

          {/* User name */}
          <div className="text-2xl font-bold">
            {review.patient._id === id ? "You" : review.patient.name}
          </div>
        </div>

        {/* Review text */}
        <div className="w-[90%] ml-4 text-dark-100 text-lg">
          {review.review}
        </div>
      </div>
    </div>
  );
};

export default Review;
