import React, { useState, useEffect, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "components/Utils/Navbar";
import Header from "components/Profile/Header";
import Main from "components/Profile/Main";
import Swal from "sweetalert2";
import ReviewContainer from "components/Review/Review";

// importing context
import { UserContext } from "context/UserContext";
import { useNavigate } from "react-router-dom";

const ExpertProfile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, profile } = useContext(UserContext);
  const [newReview, setNewReview] = useState([]);
  const [createReview, setCreateReview] = useState("");
  const [positiveReview, setPositiveReview] = useState(0);

  //checking if the user is logged in or not
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    console.log("profile : ", profile);
  }, []);

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

  useEffect(() => {
    setNewReview(data.reviews.filter((x) => x.patient._id === profile.id));
  }, [data]);

  const submitReview = async () => {
    if (createReview.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid input!",
      });
      return;
    }
    try {
      isLoad(true);
      let res = await axios.post(
        "http://localhost:4000/review",
        {
          review: createReview,
          doctor: id,
        },
        {
          withCredentials: true,
        }
      );
      isLoad(false);
      if (res.data.success) {
        setNewReview([
          {
            review: createReview,
            patient: {
              profile_pic: {
                image_url: profile.profile_pic,
              },
              _id: profile.id,
            },
            id: 0,
          },
        ]);
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
        getDoctor();
      }
    } catch (err) {
      console.log("err : ", err);
      isLoad(false);
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    let count = 0;
    data.reviews.forEach((element) => {
      if (element.score > 0) {
        count = count + 1;
      }
    });
    setPositiveReview((count / data.reviews.length) * 100);
  }, [data]);

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%]">
        <Navbar />
      </div>

      {/*  */}
      <div className="w-[84%] h-screen overflow-y-scroll">
        {/* Header */}
        <div className="">
          {/* profile_pic, name,category,bio  */}
          <Header data={data.doctor} reviewPercentage={positiveReview} />
        </div>

        <div className="flex">
          <div className="w-[40%] border border-white border-r-2 border-l-0 border-b-0 border-t-0">
            <Main data={data.doctor} doc_id={id} />
          </div>

          {/* Reviews */}
          <div className="w-[60%] flex flex-col space-y-2">
            <div className="text-white font-black text-3xl text-center">
              Reviews
            </div>
            <div className="overflow-y-scroll h-[75%] rounded-lg">
              {/* created new review */}
              <div>
                {newReview.length !== 0 &&
                  newReview.map((review) => {
                    return (
                      <ReviewContainer
                        key={review._id}
                        review={review}
                        id={profile.id}
                      />
                    );
                  })}
              </div>

              {/* <ReviewContainer /> */}
              {load ? (
                <p>Loading...</p>
              ) : data.reviews.length !== 0 || newReview.length !== 0 ? (
                data.reviews.map((review) => {
                  if (review.patient._id !== profile.id) {
                    return (
                      <ReviewContainer
                        key={review._id}
                        review={review}
                        id={profile.id}
                      />
                    );
                  } else {
                    return null;
                  }
                })
              ) : (
                <p className="text-center text-white font-semibold">
                  No reviews yet.....
                </p>
              )}
            </div>

            {/* create review */}
            {newReview.length === 0 ? (
              <div className="flex space-x-4 w-full px-4">
                {/* input area */}
                <input
                  className="rounded-lg w-[70%] focus:outline-none bg-dark-100 p-1 text-lg text-white border border-dark-600"
                  type="text"
                  id="createReview"
                  name="createReview"
                  value={createReview}
                  onChange={(event) => setCreateReview(event.target.value)}
                />

                {/* button */}
                <div className="button w-44" onClick={submitReview}>
                  {load ? "Loading..." : "Submit"}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
