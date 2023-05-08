import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// icons
import LightContactIcon from "components/Icons/Light/contact";
import BoldMailIcon from "components/Icons/Bold/mail";
import FullEyeIcon from "components/Icons/Bold/fullEye";
import EyeOffIcon from "components/Icons/Bold/eyeOff";
import LightUserNameIcon from "components/Icons/Light/userName";
import BoldMoneyIcon from "components/Icons/Bold/money";
import BoldLicenceIcon from "components/Icons/Bold/licence";
import BoldCategoryIcon from "components/Icons/Bold/user";
import BoldExpierenceIcon from "components/Icons/Bold/experience";

const Form = ({ profile }) => {
  // const [passwordVisiblity, setPasswordVisiblity] = useState(false);
  // const [password,setPassword] = useState(profile.password);
  useEffect(() => {
    console.log("Profile inside myAccount of doctor ", profile);
  }, []);
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
            <div className="py-1 bg-dark-100  outline-none text-xl">
              {profile.name.split(" ")[0]}
            </div>
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
            <div className="py-1 bg-dark-100 outline-none text-xl">
              {profile.name.split(" ").length > 1
                ? profile.name.split(" ")[1]
                : null}
            </div>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Category specializatiob & Exp in yrs */}
      {profile.type === "Doctor" ? (
        <div className="flex space-x-3">
          {/* Category Specialization */}
          <div className="form-property">
            <div className="w-[90%] flex flex-col">
              {/* label */}
              <div className="text-base text-dark-600">Category</div>

              {/* input */}
              <div className="py-1 bg-dark-100  outline-none text-xl">
                {profile.specialization} {profile.category}
              </div>
            </div>

            {/* Icon */}
            <div className="my-auto">
              <BoldCategoryIcon size="30" color="#ffffff" />
            </div>
          </div>

          {/* Fee per session */}
          <div className="form-property">
            <div className="w-[90%] flex flex-col">
              {/* label */}
              <div className="text-base text-dark-600">Experience (in yrs)</div>

              {/* input */}
              <div className="py-1 bg-dark-100 outline-none text-xl">
                {profile.years_Of_Experience}
              </div>
            </div>

            {/* Icon */}
            <div className="my-auto">
              <BoldExpierenceIcon size="30" color="#ffffff" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

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

      {/* License ID & Fee/session for doctor side */}
      {profile.type === "Doctor" ? (
        <div className="flex space-x-3">
          {/* License ID */}
          <div className="form-property">
            <div className="w-[90%] flex flex-col">
              {/* label */}
              <div className="text-base text-dark-600">License ID</div>

              {/* input */}
              <div className="py-1 bg-dark-100  outline-none text-xl">
                {profile.licenseNumber}
              </div>
            </div>

            {/* Icon */}
            <div className="my-auto">
              <BoldLicenceIcon size="30" color="#ffffff" />
            </div>
          </div>

          {/* Fee per session */}
          <div className="form-property">
            <div className="w-[90%] flex flex-col">
              {/* label */}
              <div className="text-base text-dark-600">Fee/session</div>

              {/* input */}
              <div className="py-1 bg-dark-100 outline-none text-xl">
                ₹ {profile.fees}
              </div>
            </div>

            {/* Icon */}
            <div className="my-auto">
              <BoldMoneyIcon size="30" color="#ffffff" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

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
            <div className="py-1 bg-dark-100  outline-none text-xl">
              {profile.age}
            </div>
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
            <div className="py-1 bg-dark-100 outline-none text-xl">
              {profile.gender}
            </div>
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
