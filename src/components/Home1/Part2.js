import React from "react";

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
          <div className="bg-primary-blue w-full p-3 rounded-lg">
            Appointment1
          </div>
          <div className="bg-primary-blue w-full p-3 rounded-lg">
            Appointment2
          </div>
          <div></div>
        </div>
      </div>

      {/* Past Appointments */}
      <div></div>
    </div>
  );
};

export default Part2;
