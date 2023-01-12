import React from "react";
import Navbar from "components/Utils/Navbar";
import Header from "components/MyAccount/Header";
import Form from "components/MyAccount/Form";

const MyAccount = () => {
  return (
    <div className="w-full flex flex-row bg-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      <div className="bg-dark-100 w-[84%]">
        {/* Header */}
        <div className="h-[30%]">
          <Header />
        </div>

        {/* Form */}
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
