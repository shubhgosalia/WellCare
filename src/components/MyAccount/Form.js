import React from "react";

// icons
import LightContactIcon from "components/Icons/Light/contact";
import BoldMailIcon from "components/Icons/Bold/mail";
import FullEyeIcon from "components/Icons/Bold/fullEye";

const Form = ({ profile }) => {
  return (
    <div className="flex flex-col space-y-3 text-white mx-10 w-2/3 font-body-primary">
      {/* Name */}
      <div className="flex space-x-3">
        {/* First Name */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">First Name</div>

            {/* input */}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Yash"
              minLength={1}
              autoComplete="do-not-autofill"
              className="py-1 bg-dark-100  outline-none text-xl"
            ></input>
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
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Sharma"
              minLength={1}
              autoComplete="do-not-autofill"
              className="py-1 bg-dark-100 outline-none text-xl"
            ></input>
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
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="yashsharma7@gmail.com"
            minLength={1}
            autoComplete="do-not-autofill"
            className="py-1 bg-dark-100  outline-none text-xl"
          ></input>
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
          <input
            type="text"
            id="username"
            name="username"
            placeholder="yash.sharma"
            minLength={1}
            autoComplete="do-not-autofill"
            className="py-1 bg-dark-100  outline-none text-xl"
          ></input>
        </div>

        {/* Icon */}
        <div className="my-auto">
          <BoldMailIcon size="30" color="#ffffff" />
        </div>
      </div>

      {/* password */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">Password</div>

          {/* input */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            minLength={1}
            autoComplete="do-not-autofill"
            className="py-1 bg-dark-100  outline-none text-xl"
          ></input>
        </div>

        {/* Icon */}
        <div className="my-auto">
          <FullEyeIcon size="30" color="#ffffff" />
        </div>
      </div>

      {/* gender */}
      {/* age */}
      <div className="flex space-x-3">
        {/* First Name */}
        <div className="form-property">
          <div className="w-[90%] flex flex-col">
            {/* label */}
            <div className="text-base text-dark-600">Gender</div>

            {/* input */}
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Yash"
              minLength={1}
              autoComplete="do-not-autofill"
              className="py-1 bg-dark-100  outline-none text-xl"
            ></input>
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
            <div className="text-base text-dark-600">Age</div>

            {/* input */}
            <input
              type="number"
              id="age"
              name="age"
              placeholder="21"
              autoComplete="do-not-autofill"
              className="py-1 bg-dark-100 outline-none text-xl"
            ></input>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
