import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "components/Utils/Navbar";
import Header from "components/Profile/Header";
import Main from "components/Profile/Main";
import Swal from "sweetalert2";
import ReviewContainer from "components/Review/Review";

const ExpertProfile = () => {
  const curr_date = new Date();
  const maxdate = new Date(curr_date);
  maxdate.setDate(maxdate.getDate() + 2);

  const [data, setData] = useState({
    doctor: {
      years_Of_Experience: "",
      bio: "",
      email: "",
      locality: "",
      category: "",
      specialization: "",
      fees: "",
      profile_pic: "",
    },
    reviews: [],
  });
  const [load, isLoad] = useState(false);

  let { id } = useParams();
  const getDoctor = async () => {
    isLoad(true);
    try {
      const res = await axios.get(`http://localhost:4000/doctor/${id}`, {
        withCredentials: true,
      });
      console.log(res.data.data.doctor);
    isLoad(false);
      setData(res.data.data);
    } catch (err) {
      console.log("errr : ", err);
      isLoad(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

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
      <div className="w-[84%] h-screen overflow-y-hidden">
        {/* Header */}
        <div className="">
          {/* profile_pic, name,category,bio  */}
          <Header
            profile_pic={data.doctor.profile_pic}
            name={data.doctor.name}
            category={data.doctor.category}
            bio={data.doctor.bio}
          />
        </div>

        <div className="flex h-[60%]">
          <div className="w-[30%]">
            <Main
              experience={data.doctor.years_Of_Experience}
              email={data.doctor.email}
              locality={data.doctor.locality}
            />
          </div>

          {/* Reviews */}
          <div className="w-[70%] flex flex-col space-y-2">
            <div className="text-white font-black text-3xl text-center">
              Reviews
            </div>
            <div className="overflow-y-scroll h-[75%] rounded-lg">
              {/* <ReviewContainer /> */}
              {load ? (
                <p>Loading...</p>
              ) : data.reviews.length !== 0 ? (
                data.reviews.map((review) => {
                  return <ReviewContainer key={review._id} review={review} />;
                })
              ) : (
                <p>No reviews yet.....</p>
              )}
            </div>

            {/* create review */}
            <div className="flex space-x-4 w-full px-4">
              {/* input area */}
              <input className="rounded-lg w-[70%] focus:outline-none bg-dark-100 p-1 text-lg text-white border border-dark-600"></input>

              {/* button */}
              <div className="button w-44">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
