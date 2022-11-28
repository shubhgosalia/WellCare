import React from "react";
import Search from "./../Home/Search";
import NavbarHome from "./../Home/Navbar";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className="w-full h-full">
        <div className="bg-white h-px mx-10"></div>
        <Search />
      </div>
    </>
  );
};

export default Home;
