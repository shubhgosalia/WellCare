import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-tr from-dark-100 to-dark-200 h-full flex space-x-6 text-white">
      {/* Image */}
      <div className="w-48 h-48 bg-dark-600 rounded-full my-auto ml-10"></div>

      {/* Name */}
      <div className="mt-auto mb-6 flex flex-col space-y-1">
        <div className="px-1">PROFILE</div>
        <div className="text-8xl font-bold">Krish</div>
      </div>
    </div>
  );
};

export default Header;
