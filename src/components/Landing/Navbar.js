import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false); 
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-dark-100 fixed drop-shadow-lg font-body-primary">
      <div className="px-28 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="text-4xl font-black mr-4 sm:text-4xl text-primary-blue font-head-primary">
            WellCare
          </h1>

          {/* Routes */}
          <ul className="hidden md:flex md:font-bold md:text-lg text-white">
            {/* Home */}
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                className="cursor-pointer"
              >
                About
              </Link>
            </li>

            {/* Services */}
            <li>
              <Link
                to="service"
                smooth={true}
                offset={-50}
                duration={500}
                className="cursor-pointer"
              >
                Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Login Signup */}
        <div className="hidden md:flex text-xl text-white md:space-x-4">
          {/* Login */}
          <button className="px-8 py-3">

            <NavLink to="/login">Login</NavLink>
          </button>

          {/* Sign up */}
          <button className="px-8 py-3">
            <NavLink to="/signup">Signup</NavLink>
          </button>
        </div>

        {/* Responsive  */}
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      {/* line */}
      <div className="bg-white h-0.5 mx-28"></div>

      {/* Responsive */}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        {/* Home */}
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        {/* Link */}
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>

        {/* Service */}
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="service"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Service
          </Link>
        </li>

        <div className="flex flex-col my-4">
          {/*  */}
          {/* Login */}
          <button className="bg-transparent text-primary-blue px-8 py-3 mb-4">
            <NavLink to="/login">Login</NavLink>
          </button>

          {/* Signup */}
          <button className="px-8 py-3 ">
            <NavLink to="/signup">Signup</NavLink>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
