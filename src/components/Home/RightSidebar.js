import React from "react";
import UpcomingAppointment from "components/Home/Appointment";

const Part2 = () => {
  return (
    <div className="w-[20%] px-5 py-10 fixed h-screen bg-dark-200 rounded-lg">
      {/* UpComing Appointments */}
      <div className="flex flex-col space-y-10 h-full">
        <div className="text-2xl text-center text-dark-700 font-semibold">
          Upcoming Appointments
        </div>

        {/* Containers */}
        <div className="flex flex-col space-y-5 overflow-y-scroll">
          {/*  */}
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
        </div>
      </div>
    </div>
  );
};

export default Part2;
