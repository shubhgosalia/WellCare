import React, { useState,useEffect,useContext } from "react";
import Navbar from "components/Utils/Navbar";
import Header from "components/UpdatePassword/Header";
import Form from "components/UpdatePassword/Form";
// importing context
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  const navigate = useNavigate();
  // using the context for getting the current logged in user
  const { isLoggedIn, profile } = useContext(UserContext);
  //checking if the user is logged in or not
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    console.log("profile : ", profile);
  }, []);

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      <div className="w-[84%] min-h-screen">
        {/* Header */}
        <div className="">
          <Header 
            profile_pic={profile?.profile_pic.image_url}
            name={profile.name}
            />
        </div>

        {/* Form */}
        <div className="my-20 w-2/3 ml-16 text-white">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
