import React from "react";
import BoldVerifiedIcon from "components/Icons/Bold/verified";
import BoldMailIcon from "components/Icons/Bold/mail";
import BoldLocationIcon from "components/Icons/Bold/location";
import BoldExpierenceIcon from "components/Icons/Bold/expierence";

const Main = () => {
  const handleBookAppointment = () => {};

  return (
    <div className="flex text-white p-8">
      <div className=" w-[40%]">
        <div className="w-[80%] mx-auto flex flex-col space-y-8">
          {/* expierence */}
          <div className="flex space-x-3 cursor-pointer">
            <div className="my-auto">
              <BoldExpierenceIcon size="30" color="#ffffff" />
            </div>

            {/*  */}
            <div className="text-xl font-bold">7 years Expierence</div>
          </div>

          {/* medical registration verified */}
          <div className="flex space-x-3 cursor-pointer">
            <div className="my-auto">
              <BoldVerifiedIcon size="30" color="#39FF14" />
            </div>

            {/*  */}
            <div className="text-xl font-bold">
              Medical registration verified
            </div>
          </div>

          {/* email */}
          <div className="flex space-x-3 cursor-pointer">
            <div className="my-auto">
              <BoldMailIcon size="30" color="#0000FF" />
            </div>

            {/*  */}
            <div className="text-xl font-bold">krish.vadhani@somaiya.edu</div>
          </div>

          {/* address */}
          <div className="flex space-x-3">
            <div className="mt-1">
              <BoldLocationIcon size="30" color="#FF0000" />
            </div>

            {/*  */}
            <div className="text-xl font-bold">
              12, Sundaram Apartment, Ramchandra Lane, Malad - West
            </div>
          </div>

          {/* button */}
          <div className="button" onClick={handleBookAppointment}>
            Book Appointment
          </div>
        </div>
      </div>

      {/* reviews */}
      <div className="">reviews</div>
    </div>
  );
};

export default Main;
