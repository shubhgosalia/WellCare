import React from "react";

export default function upcomingAppointment({ apt, type }) {
  const isDoctor = type === "Doctor" ? true : false;
  // const date = new Date(apt.date);

  //if the slot is booked by the doctor himself/herself then there is no need to show it in the upcoming appointments section
  if (apt.isBookedByDoc) {
    return null;
  }

  return (
    <div className="bg-primary-blue w-full flex flex-row space-x-6 p-3 rounded-lg text-white font-body-primary mx-auto">
      {/* image */}
      {/* <img
        src={isDoctor ? apt.slot_blocked_by.profile_pic.image_url : apt.doctor_id.profile_pic.image_url}
        alt="DP"
        className="w-[30%] h-28 rounded-xl"
      /> */}

      {/* Doctor/Patient Credentials */}
      <div className="flex flex-col space-y-3 w-[70%] text-dark-700">
        <div className="flex flex-col space-y-0">
          {/* Name */}
          <div className="font-semibold text-lg text-white">
            {isDoctor ? apt.slot_blocked_by.name : `Dr. ${apt.doctor_id.name}`}
          </div>

          {/* Speciality if doctor */}
          {isDoctor ? (
            <div className="text-sm">Patient</div>
          ) : (
            <div className="text-sm">
              {apt.doctor_id.specialization === " "
                ? apt.doctor_id.category
                : apt.doctor_id.specialization + " Physiotherapist"}
            </div>
          )}
        </div>

        {/* Timings */}
        <div className="flex flex-col space-y-0 font-semibold text-base">
          <div className="">
            {apt.startTime}:00 - {apt.endTime}:00 hrs
          </div>
          <div className="">{apt.date}</div>
        </div>
      </div>
    </div>
  );
}
