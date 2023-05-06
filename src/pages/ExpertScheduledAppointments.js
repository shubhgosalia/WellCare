import React, { useEffect, useState } from "react";
import Navbar from "components/Utils/Navbar";
import Main from "components/ScheduledAppointments/Main";

const ExpertScheduledAppointments = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] min-h-screen">
        <Navbar />
      </div>

      {/*  */}
      <div className="w-[85%] bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100">
        <Main />
      </div>
    </div>
  );
};

export default ExpertScheduledAppointments;
