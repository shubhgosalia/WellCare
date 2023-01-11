import React from "react";

export default function upcomingAppointment({ text = "" }) {
  return (
    <div className="bg-dark-100 w-full p-3 rounded-lg text-white border border-white">
      <div className="flex flex-row space-x-5">
        {/* image */}
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-28 h-28 rounded"
        />

        {/* Doctor Credentials */}
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-0">
            {/* Name */}
            <div className="font-bold text-xl">Dr. Aman Sharma</div>

            {/* Speciality */}
            <div className="text-sm">Lung Physiotherapist</div>
          </div>

          {/* Timings */}
          <div>
            <div className="font-bold">12:00 - 13:00 hrs</div>
            <div className="font-bold">11th December, 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}
