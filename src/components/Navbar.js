import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="p-5 bg-slate-600 text-white h-16 flex flex-col justify-center">
      <div className="flex justify-between">
        {/* Routes + Logo */}
        <div className="flex flex-row space-x-24">
          {/* logo */}
          <div className="font-black">LOGO</div>
          {/* Routes */}
          <div className="flex flex-row space-x-3">
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Support</ul>
            <ul>Platforms</ul>
            <ul>Pricing</ul>
          </div>
        </div>

        {/* Sign In Login Button */}
        <div className="flex flex-row space-x-2 font-bold">
          <div>Signin</div>
          <div>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
