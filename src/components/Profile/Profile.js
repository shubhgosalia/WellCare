import React from "react";
import VerifiedIcon from "components/Icons/solid/verified";
import EmailIcon from "components/Icons/solid/envelope";
import LocationIcon from "components/Icons/solid/location";
import Review from "components/Review/Review";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { max } from "date-fns";

const Profile = () => {
  const [date, SetDate] = useState(new Date());
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/slotBook", {
      state: {
        date: `${date}`,
      },
    });
  };

  const [reviews, setReviews] = useState([]);

  const curr_date = new Date();
  const maxdate = new Date(curr_date);
  maxdate.setDate(maxdate.getDate() + 2);

  return (
    <div className=" w-full h-screen bg-dark-100 text-white pt-20 font-poppins">
      <div className="flex-col mx-24 border-[1px] border-white drop-shadow-2xl h-[92%] w-[80%] tracking-wide">
        <div className="p-4  bg-blue-900 h-[40%]">
          {/* Profile image */}
          <div className="flex space-x-10 ">
            <div>
              <div className="w-[9rem] h-[9rem] ml-8 my-2 overflow-hidden ">
                <img
                  src="https://res.cloudinary.com/dprscch9k/image/upload/v1669660130/Well%20Care/ialboxwwhirn0n6l3kst.jpg"
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </div>
            </div>

            <div className="flex-col pt-5 text-white space-y-1">
              {/* Profile Name */}
              <div className="font-black text-5xl">Ishit Fariya</div>
              {/* Profile specialization */}
              <div className="font-bold text-xl">Orthopedic</div>

              {/* Profile Bio */}
              <div className="font-normal text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                voluptatibus sunt ipsa rem architecto! Iste illum velit, ratione
                maiores a magnam autem quae distinctio totam placeat quod
                corrupti ab reprehenderit Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Impedit nam voluptates at aliquid
                rem sed, numquam eos ducimus sequi voluptatem, nulla delectus
                facilis optio, minima obcaecati. Blanditiis optio minima itaque?
              </div>
            </div>
          </div>
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
              <div className="mb-1">Select Appointment Date :</div>
              <DatePicker
                className="p-2 rounded-md text-black"
                minDate={new Date(new Date().toISOString().split("T")[0])}
                maxDate={new Date(maxdate)}
                onChange={(app_date) => SetDate(app_date)}
                selected={date}
                placeholderText="select appointment date"
                dateFormat="dd/MM/yyyy"
              />
            </div>

            {/* Book Appointment Button */}
            <div>
              <button
                type="submit"
                onClick={clickHandler}
                className="py-3 px-3
                 rounded-md text-base font-medium text-white bg-blue-700 hover:bg-blue-800  "
              >
                Book Appointment
              </button>
            </div>
          </div>
          <div className="w-[75%] border-l-[1px] h-full overflow-auto pt-2 ">
            <div className="font-black text-3xl text-center ">Reviews</div>
            {reviews.map((review) => {
              return <Review key="review._id" review={review} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
