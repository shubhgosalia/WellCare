import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

// icons
// import VerifiedIcon from "components/Icons/solid/verified";
// import EmailIcon from "components/Icons/solid/envelope";
// import LocationIcon from "components/Icons/solid/location";
// import Review from "components/Review/Review";
// import DatePicker from "react-datepicker";
// import { max } from "date-fns";
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

        {/* main */}
        <div>
          <Main/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
