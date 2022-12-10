import React from "react";
import UpcomingAppointment from "components/Home/upcomingAppointment";

const Part2 = () => {
  return (
    <div className="w-[35%] py-5">
      {/* UpComing Appointments */}
      <div className="flex flex-col space-y-10">
        <div className="text-white text-center font-bold text-2xl">
          Upcoming Appointments
        </div>

        {/* Containers */}
        <div className="flex flex-col space-y-5">
          {/*  */}
          <UpcomingAppointment />
          <UpcomingAppointment />
          <UpcomingAppointment />
        </div>
      </div>

      {/* Past Appointments */}
      <div></div>
    </div>
  );
};

export default Part2;
