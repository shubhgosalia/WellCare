import React from "react";
import Navbar from "components/Utils/Navbar";
import Header from "components/UpdatePassword/Header";
import Form from "components/UpdatePassword/Form";

const UpdatePassword = () => {
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
          <Form />
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
