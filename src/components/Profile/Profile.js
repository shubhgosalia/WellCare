import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

// icons
import VerifiedIcon from "components/Icons/solid/verified";
import EmailIcon from "components/Icons/solid/envelope";
import LocationIcon from "components/Icons/solid/location";
import Review from "components/Review/Review";
import DatePicker from "react-datepicker";
import { max } from "date-fns";
import Navbar from "components/Utils/Navbar";
import Header from "./Header";
import Main from "./Main";

const Profile = () => {
  // const [date, SetDate] = useState(new Date());
  // const navigate = useNavigate();
  // const clickHandler = () => {
  //   navigate("/slotBook", {
  //     state: {
  //       date: `${date}`,
  //     },
  //   });
  // };

  // const [reviews, setReviews] = useState([]);

  const curr_date = new Date();
  const maxdate = new Date(curr_date);
  maxdate.setDate(maxdate.getDate() + 2);

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%]">
        <Navbar />
      </div>

      {/*  */}
      <div className="w-[84%] min-h-screen">
        {/* Header */}
        <div className="">
          <Header />
        </div>

        <div className="flex border-r-[1px] h-[60%]">
          <div className="flex-col w-[25%] border-2 border-black space-y-4 px-4 align-items-center py-7 ">
            {/* profile years of experience */}
            <div className="font-normla text-lg">7 yrs of experience</div>
            <div className="flex">
              <VerifiedIcon size={25} color="#008000" />
              <div className="font-normal text-base pl-1">
                Medical Registration verified
              </div>
            </div>

            {/* profile email */}
            <div className="flex ">
              <EmailIcon size={22} color="#0047AB" />
              <div className="font-normal text-base pl-2">
                ishitfariya@gmail.com
              </div>
            </div>

            {/* clinic address */}
            <div className="flex">
              <LocationIcon size={25} color="#0047AB" />
              <div className="font-normal text-base pl-1">
                12/Sundaram apt,Ramchandra lane,Malad west
              </div>
            </div>

            {/* fees */}
            <div className="text-xl font-bold">Rs 2000</div>

            {/* <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
              />
              <label
                for="bordered-radio-1"
                className="w-full py-4 ml-2 text-md font-medium text-white dark:text-gray-300"
              >
                In-Clinic
              </label>
            </div>
            <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                checked
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label
                for="bordered-radio-2"
                class="w-full py-4 ml-2 text-md font-medium text-white dark:text-gray-300"
              >
                Virtual Consult
              </label>
            </div>
 */}
            {/* Datepicker for appointment date selection */}
            <div>
              <div className="mb-1">Select Appointment/Session Date :</div>
              <DatePicker
                className="p-2 rounded-md text-black"
                minDate={new Date(new Date().toISOString().split("T")[0])}
                maxDate={new Date(maxdate)}
                // onChange={(app_date) => SetDate(app_date)}
                // selected={date}
                placeholderText="select appointment date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Book Appointment/Session Button */}
            <div>
              <button
                type="submit"
                // onClick={clickHandler}
                className="py-3 px-3
                 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-800  "
              >
                Book Session/Appointment
              </button>
            </div>
          </div>
          <div className="w-[75%] border-l-[1px] h-full overflow-auto pt-2 ">
            <div className="font-black text-3xl text-center ">Reviews</div>
            {/* {reviews.map((review) => {
              return <Review key="review._id" review={review} />;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
