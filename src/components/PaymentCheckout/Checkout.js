import React from "react";
import Navbar from "components/Utils/Navbar";
import { useLocation } from "react-router-dom";
import Head from "components/PaymentCheckout/Head";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
// import { faClock } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";

const Checkout = () => {
  const location = useLocation();

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
              <div className="h-70 lg:h-auto lg:w-62 flex-none bg-cover lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>

              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="mb-2 text-gray-700 text-xl">
                    {/* <FontAwesomeIcon icon={faCalendarDays} /> Date :{" "} */}
                    {location.state.findate}
                  </div>
                  <div className="text-gray-700 text-xl mb-2 mt-5">
                    {/* <FontAwesomeIcon
                      icon={faClock}
                      style={{ marginRight: 3 }}
                    /> */}
                    Time : {location.state.time}
                  </div>
                  <div className="border-t-2 mt-5"></div>
                  <div className="text-gray-700 text-xl mb-2 mt-5">
                    Wellness & Beyond Physiotherapy Clinic.
                  </div>
                  <div className="text-md">
                    <div className="mt-2">
                      <a
                        className="text-blue-900 font-bold"
                        href="https://tinyurl.com/5ybzfn3w"
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
                      defaultValue={"Shubh Kalpesh Gosalia"}
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
                      defaultValue={"8082031500"}
                      disabled
                    />
                  </div>
                </div>
                <button className="bg-slate-500 hover:bg-gray-600 py-2 text-sm rounded-md">
                  <a href="/paymentGateway">Proceed to Payment</a>
                </button>

                <div className="flex items-center mt-5">
                  <div className="text-md">
                    <p className="text-gray-500 leading-none">
                      Dr. Deepti Sharma
                    </p>
                    <p className="text-gray-500">Lung Physiotherapist</p>
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
