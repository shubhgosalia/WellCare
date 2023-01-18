import React from "react";

// icons
import LightContactIcon from "components/Icons/Light/contact";
import BoldMailIcon from "components/Icons/Bold/mail";

const Form = () => {
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
              className="py-1 bg-gradient-to-r from-dark-100 to-dark-200  outline-none text-xl"
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
              className="py-1 bg-gradient-to-r from-dark-100 to-dark-200 outline-none text-xl"
            ></input>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>

      {/* Email Id and Username */}
      <div className="flex space-x-3">
        {/* Email Id */}
        <div className="form-property">
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
              className="py-1 bg-gradient-to-r from-dark-100 to-dark-200  outline-none text-xl"
            ></input>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <BoldMailIcon size="30" color="#ffffff" />
          </div>
        </div>

        {/* Username */}
        <div className="form-property">
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
              className="py-1 bg-gradient-to-r from-dark-100 to-dark-200  outline-none text-xl"
            ></input>
          </div>

          {/* Icon */}
          <div className="my-auto">
            <BoldMailIcon size="30" color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
