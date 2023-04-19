import React from "react";
// import UserImage from "../../assets/Krish.png";

const Header = ({ profile_pic, name,category,bio }) => {
  return (
    <div className="bg-gradient-to-tr from-dark-100 to-dark-200 h-full flex space-x-6 text-white py-4">
      {/* Image */}
      <div className=""></div>

      <img
        src={profile_pic.image_url}
        alt=""
        className="w-48 h-48 rounded-full my-auto ml-10"
      />

      {/* Name */}
      <div className="mt-auto mb-4 flex flex-col space-y-2 font-body-primary">
        <div className="px-1 text-2xl">Sports {category}</div>
        <div className="text-8xl font-bold">{name}</div>
        <div className="text-xl font-semibold px-1 text-dark-600">ishit.fariya@somaiya.edu</div>
        <div className="font-medium text-xl px-1">Male, 32yrs</div>
        <div className="w-[80%] text-lg font-normal px-1">
          {bio}
        </div>
      </div>
    </div>
  );
};

export default Header;
