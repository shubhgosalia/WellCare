import React from "react";
import Search from "components/Home/Search";
import NavbarHome from "components/Home/Navbar";

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
