import React, { useState, useContext } from "react";
import Navbar from "components/Utils/Navbar";
import { useLocation } from "react-router-dom";
import Head from "components/PaymentCheckout/Head";
import axios from "axios";
import Swal from "sweetalert2";
import { UserContext } from "context/UserContext";

const Checkout = () => {
  const [load, setLoad] = useState(false);
  const location = useLocation();
  console.log(location.state);
  const { profile } = useContext(UserContext);
  const doc_id = location.state.doc_id;
  const pat_id = profile.id;
  console.log("Location in checkout ", location.state);
  const paymentHandler = async () => {
    try {
      setLoad(true);
      let res = await axios.post(
        `http://localhost:4000/patient/bookAppointment`,
        {
          startTime: Number(location.state.time.slice(0, 2)),
          endTime: Number(location.state.time.slice(0, 2)) + 1,
          isOnline: location.state.status,
          reason: "Appointment",
          date: location.state.date,
          doctor_id: location.state.doc_id,
        },
        {
          withCredentials: true,
        }
      );
      console.log("resp  : ", res.data);
      setLoad(false);
      if (res.data.success) {
        payment(doc_id, pat_id, res.data.book_id);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!!",
        });
      }
      // setDocs(res.data.data);
    } catch (err) {
      console.log("error : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  const payment = async (doc_id, patient_id, book_id) => {
    try {
      setLoad(true);
      let res = await axios.post(
        `http://localhost:4000/patient/checkoutSession/${doc_id}`,
        {
          book_id: book_id,
          doctor_id: doc_id,
          patient_id: pat_id,
        },
        {
          withCredentials: true,
        }
      );
      console.log("resp  : ", res.data.session.url);
      setLoad(false);
      window.location.href = res.data.session.url;
      // setDocs(res.data.data);
    } catch (err) {
      console.log("error : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>
      <div className="w-[84%] ">
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          <Head />
          <div className="m-auto" style={{ marginTop: 50 }}>
            <div className=" w-full lg:max-w-full lg:flex">
              <div className="h-70 lg:h-auto lg:w-62 flex-none bg-cover lg:rounded-t-none lg:rounded-l text-center overflow-hidden mx-3 my-20">
                <img
                  src={location.state.data.profile_pic.image_url}
                  alt=""
                  className="h-[400px] w-[350px]"
                />
              </div>

              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal w-[500px]">
                <div className="mb-4">
                  <div className="mb-2 text-gray-700 text-xl">
                    Date : {location.state.date}
                  </div>
                  <div className="text-gray-700 text-xl mb-2 mt-5">
                    Time : {location.state.time}
                  </div>
                  <div className="border-t-2 mt-5"></div>
                  <div className="text-gray-700 text-xl mb-2 mt-5 w-[50%]">
                    {location.state.data.clinic_name}
                  </div>
                  <div className="text-md">
                    <div className="mt-2">
                      <a
                        className="text-blue-900 font-bold"
                        href={location.state.data.address}
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  <div className="border-t-2 mt-5"></div>
                  <div className="text-xl text-gray-600 flex items-center mb-2 mt-4">
                    Patient Details :
                  </div>
                  <div className="mb-2   mt-2">
                    <label
                      for="full_name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      defaultValue={profile.name}
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                      disabled
                    />
                  </div>
                  <div className=" mt-2">
                    <label
                      for="phone_no"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone no.
                    </label>
                    <input
                      type="number"
                      id="phone_no"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
                      defaultValue={profile.phoneNumber}
                      disabled
                    />
                  </div>
                </div>
                <button
                  className="bg-slate-500 hover:bg-gray-600 py-2 text-sm rounded-md"
                  onClick={paymentHandler}
                >
                  {load ? "Loading..." : "Proceed to Payment"}
                </button>

                <div className="flex items-center mt-5">
                  <div className="text-md">
                    <p className="text-gray-500 leading-none">
                      {location.state.data.name}
                    </p>
                    <p className="text-gray-500">
                      {location.state.data.specialization}{" "}
                      {location.state.data.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
