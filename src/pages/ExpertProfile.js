import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "components/Utils/Navbar";
import Header from "components/Profile/Header";
import Main from "components/Profile/Main";

const ExpertProfile = () => {
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

  const [data, setData] = useState({
    years_Of_Experience: "",
    bio: "",
    email: "",
    address: "",
    category: "",
    specialization: "",
    fees: '',
    profile_pic:'',
  });

  const getDoctor = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/doctor/${id}`, {
        withCredentials: true,
      });
    } catch (err) {
      console.log("errr : ", err);
    }
  };
  let { id } = useParams();

  useEffect(() => {
    getDoctor();
  }, []);

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
          <div>
            <Main />
          </div>

          {/* Reviews */}
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

export default ExpertProfile;
