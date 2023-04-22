import React, { useState } from "react";
import { Link } from "react-router-dom";

// icons
import LightContactIcon from "components/Icons/Light/contact";
import BoldMailIcon from "components/Icons/Bold/mail";
import FullEyeIcon from "components/Icons/Bold/fullEye";
import EyeOffIcon from "components/Icons/Bold/eyeOff";
import LightUserNameIcon from "components/Icons/Light/userName";

const Form = ({ profile }) => {
  //
  // const [passwordVisiblity, setPasswordVisiblity] = useState(false);
  // const [password,setPassword] = useState(profile.password);


  return (
    <div className="flex flex-col space-y-6 text-white mx-10 w-2/3 font-body-primary">
      {/* Name */}
      <div className="flex space-x-3">
        {/* First Name */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">First Name</div>

            {/* input */}
            <div className="py-1 bg-dark-100  outline-none text-xl">{profile.name.split(" ")[0]}</div>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>

        {/* Last Name */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">Last Name</div>

            {/* input */}
            <div className="py-1 bg-dark-100 outline-none text-xl">{profile.name.split(" ").length > 1 ? profile.name.split(" ")[1] : null}</div>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Email Id */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">Email</div>

          {/* input */}
          <div className="py-1 bg-dark-100  outline-none text-xl cursor-pointer">
           {profile.email}
          </div>
        </div>

        {/* Icon */}
        <div className="my-auto">
          <BoldMailIcon size="30" color="#ffffff" />
        </div>
      </div>

      {/* Username */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">Username</div>

          {/* input */}
          <div className="py-1 bg-dark-100  outline-none text-xl">
            {profile.username}
          </div>
        </div>

        {/* Icon */}
        <div className="my-auto">
          <LightUserNameIcon size="30" color="#ffffff" />
        </div>
      </div>

      {/* age */}
      <div className="flex space-x-3">
        {/* First Name */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">Age</div>

            {/* input */}
            <div className="py-1 bg-dark-100  outline-none text-xl">{profile.age}</div>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>

        {/* Gender */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">Gender</div>

            {/* input */}
            <div className="py-1 bg-dark-100 outline-none text-xl">{profile.gender}</div>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>
         {/* update credentials */}
         <Link className="button w-1/3" to="/updatePassword">
          Update Password
        </Link>
    </div>
  );
};

export default Form;
