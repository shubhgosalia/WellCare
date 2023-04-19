import React from "react";
import UserImage from "../../assets/Krish.png";

const Header = ({ profile_pic, name }) => {
  return (
    <div className="bg-gradient-to-tr from-dark-100 to-dark-200 h-full flex space-x-6 text-white py-10">
      {/* Image */}
      <div className=""></div>

      <img
        src={profile_pic}
        alt=""
        className="w-48 h-48 rounded-full my-auto ml-10"
      />

      {/* Name */}
      <div className="mt-auto mb-6 flex flex-col space-y-1">
        <div className="px-1">PROFILE</div>
        <div className="text-8xl font-bold">{name}</div>
      </div>
    </div>
  );
};

export default Header;
