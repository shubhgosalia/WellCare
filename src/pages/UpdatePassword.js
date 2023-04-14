import React, { useState } from "react";
import Navbar from "components/Utils/Navbar";
import Header from "components/UpdatePassword/Header";

// icons
import FullEyeIcon from "components/Icons/Bold/fullEye";
import EyeOffIcon from "components/Icons/Bold/eyeOff";

const UpdatePassword = () => {
  //
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);

  const handlePassword = () => {
    if (passwordVisiblity) {
      setPasswordVisiblity(false);
    } else {
      setPasswordVisiblity(true);
    }
  };

  let password = "Krish2001@";
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      <div className="w-[84%] min-h-screen">
        {/* Header */}
        <div className="">
          <Header />
        </div>

        {/* Form */}
        <div className="my-20 w-2/3 ml-16 text-white">
          {/* current Password */}
          <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
            {/* Label and Input */}
            <div className="w-[90%] flex flex-col">
              {/* label */}
              <div className="text-base text-dark-600">Password</div>

              {/* input */}
              {passwordVisiblity ? (
                <div className="py-1 bg-dark-100  outline-none text-xl">
                  {password}
                </div>
              ) : (
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength={1}
                  autoComplete="do-not-autofill"
                  className="py-1 bg-dark-100  outline-none text-xl"
                ></input>
              )}
            </div>

            {/* Icon */}
            {passwordVisiblity ? (
              <div className="my-auto" onClick={handlePassword}>
                <EyeOffIcon size="28" color="#ffffff" />
              </div>
            ) : (
              <div className="my-auto" onClick={handlePassword}>
                <FullEyeIcon size="28" color="#ffffff" />
              </div>
            )}
          </div>

          {/* new password */}
          <div></div>

          {/* confirm new password */}
          <div></div>

          {/* save changes and cancel*/}
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
