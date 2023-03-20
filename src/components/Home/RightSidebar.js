import React from "react";
import UpcomingAppointment from "components/Home/Appointment";

const Part2 = ({ appointments, type }) => {
  return (
    <div className="w-[20%] px-5 py-10 fixed h-screen bg-dark-200 rounded-lg">
      {/* UpComing Appointments */}
      <div className="flex flex-col space-y-10 h-full">
        <div className="text-2xl text-center text-dark-700 font-semibold">
          Upcoming Appointments
        </div>

        {/* appointment containers */}
        <div className="flex flex-col space-y-5 overflow-y-scroll">
          {/*  */}
          {
            appointments.length !== 0 ?
              appointments.map((apt, index) => (
                <UpcomingAppointment key={index} apt={apt} type={type} />
              ))
              :
              <div className="text-dark-700 text-center text-xs">No upcoming appointments right now!!</div>
          }
        </div>
      </div>
    </div>
  );
};

export default Part2;
