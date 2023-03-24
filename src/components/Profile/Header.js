import React from "react";
import UserImage from "../../assets/Krish.png";

const Header = ({ profile_pic, name }) => {
  return (
    <div className="bg-gradient-to-tr from-dark-100 to-dark-200 h-full flex space-x-6 text-white py-10">
      {/* Image */}
      <div className=""></div>

      <img
        src={UserImage}
        alt=""
        className="w-48 h-48 rounded-full my-auto ml-10"
      />

      {/* Name */}
      <div className="mt-auto mb-4 flex flex-col space-y-2 font-body-primary">
        <div className="px-1">ORTHOPEDIC</div>
        <div className="text-8xl font-bold">Krish Vadhani</div>
        <div className="w-[80%] text-dark-600 text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          facere nesciunt non quisquam sapiente odio illo nisi? Fuga, accusamus
          sapiente! Voluptatum nihil at corrupti veritatis, et non animi
          inventore quis. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptate, facere nesciunt non quisquam sapiente odio illo nisi?
          Fuga, accusamus sapiente! Voluptatum nihil at corrupti veritatis, et
          non animi inventore quis.
        </div>
      </div>
    </div>
  );
};

export default Header;
