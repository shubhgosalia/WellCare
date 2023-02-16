import React from "react";

export default function upcomingAppointment({ text = "" }) {
  return (
    <div className="bg-primary-blue w-full flex flex-row space-x-6 p-3 rounded-lg text-white font-body-primary mx-auto">
      {/* image */}
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt=""
        className="w-[30%] h-28 rounded-xl"
      />

      {/* Doctor Credentials */}
      <div className="flex flex-col space-y-3 w-[70%] text-dark-700">
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-lg text-white">
            Dr. Aman Sharma
          </div>

          {/* Speciality */}
          <div className="text-sm">Lung Physiotherapist</div>
        </div>

        {/* Timings */}
        <div className="flex flex-col space-y-0 font-semibold text-base">
          <div className="">12:00 - 13:00 hrs</div>
          <div className="">11th December, 2022</div>
        </div>
      </div>
    </div>
  );
}
