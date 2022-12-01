import React from "react";
import Search from "components/Home/Search";
import NavbarHome from "components/Utils/Navbar";

const Home = () => {
  return (
    <div className="h-screen">
      <NavbarHome />
      <div className="w-full ">
        <div className="bg-white h-px mx-10"></div>
        <Search />
      </div>
    </div>
  );
};

export default Home;
