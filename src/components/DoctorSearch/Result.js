import { setDate } from "date-fns";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const current = new Date();
  const curr_date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const [date, SetDate] = useState(curr_date);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/slotBook", {
      state: {
        date: `${date}`,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col bg-primary-blue p-5 rounded-lg space-y-5 text-dark-100">
        {/* img */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-32 h-32 rounded-lg  mx-auto"
          />
        </div>
        {/* Credentials */}
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-2xl">Dr. Deepti Sharma</div>

          {/* Speciality */}
          <div className="text-sm text-dark-900">Lung Physiotherapist</div>
        </div>
        {/* Address */}
        <div className=" font-semibold">
          Gymkhana, Rahul building, 1/b, Marve Rd, opp. Malad, Malad, Navy
          Colony, Liberty Garden, Malad West, Mumbai, Maharashtra 400064
        </div>

        <input
          type="date"
          style={{ height: 40, width: 200, padding: 10 }}
          min={new Date().toISOString().split("T")[0]}
          defaultValue={new Date().toISOString().substring(0, 10)}
          onChange={(e) => SetDate(e.target.value)}
          required
        />
        {/* book appointment*/}
        <button
          onClick={clickHandler}
          className="float-right bg-dark-100 hover:bg-gray-800 text-white text-sm font-bold rounded px-2 py-2"
        >
          Book Appointment
        </button>
      </div>
    </>
  );
};

export default Result;
