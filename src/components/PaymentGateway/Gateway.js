import React from "react";
import Navbar from "components/Utils/Navbar";
import Heading from "components/PaymentGateway/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faLock } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";

const Gateway = () => {
  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>
      <div className="w-[84%]">
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          <Heading />
          <div
            className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
            style={{ maxWidth: 600, marginTop: 50 }}
          >
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <FontAwesomeIcon icon={faCreditCard} />
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-center font-bold text-xl uppercase">
                Amount to Pay : ₹500.00
              </h1>
            </div>
            <div class="mb-3 flex -mx-2">
              <div class="px-2">
                <label
                  for="type1"
                  class="flex items-center cursor-pointer"
                ></label>
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  class="h-8 ml-3"
                />
              </div>
            </div>
            <div className="mb-3 mt-5">
              <label for="card_name" className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  id="card_name"
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Name on Card"
                  type="text"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="card_no" className="font-bold text-sm mb-2 ml-1">
                Card number
              </label>
              <div>
                <input
                  id="card_no"
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="number"
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label for="exp_date" className="font-bold text-sm mb-2 ml-1">
                  Expiration date
                </label>
                <div>
                  <input
                    id="exp_date"
                    type="month"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">
                  Security code
                </label>
                <div>
                  <input
                    className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="***"
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div className="mb-10">
              <label for="email" className="font-bold text-sm mb-2 ml-1">
                Email Address
              </label>
              <div>
                <input
                  id="email"
                  class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                <FontAwesomeIcon icon={faLock} /> PAY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
