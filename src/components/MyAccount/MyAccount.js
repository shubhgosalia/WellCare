import React from "react";
import Navbar from "components/Utils/Navbar";
import Header from "components/MyAccount/Header";
import Form from "components/MyAccount/Form";

const MyAccount = () => {
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      <div className="w-[84%] flex flex-col space-y-10">
        {/* Header */}
        <div className="h-[30%]">
          <Header />
        </div>

        {/* Form */}
        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
