import React from "react";
import Navbar from "components/Utils/Navbar";
import Title from "components/SlotBooking/Title";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SlotBooking = () => {
  const location = useLocation();
  const [time, SetTime] = useState();
  const [findate, SetFindate] = useState(location.state.date);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/checkoutPayment", {
      state: {
        time: `${time}`,
        findate: `${findate}`,
      },
    });
  };

  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] ">
        <Navbar />
      </div>
      <div className="w-[84%] ">
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          {/* Title */}
          <Title />
          <div
            className="font-semibold text-2xl "
            style={{ textAlign: "center", marginTop: 40, marginLeft: 250 }}
          >
            SLOTS FOR {location.state.date}
          </div>
          <div style={{ height: 300, width: 300 }}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className=" rounded-lg mt-2 ml-10"
            />
            <div
              className="mt-5 font-semibold text-2xl"
              style={{ marginLeft: 90 }}
            >
              Dr. Deepti Sharma
            </div>
            <div
              className="ml-20 text-md text-dark-900"
              style={{ marginLeft: 90 }}
            >
              Lung Physiotherapist
            </div>
          </div>
          <div
            className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto"
            style={{ marginTop: -280, marginLeft: 400 }}
          >
            <div className="relative flex flex-col min-w-0 break-words bg-dark w-full mb-6 shadow-lg rounded ">
              <div className="block w-full overflow-x-auto">
                <table className="items-right bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-white align-right border border-solid border-blueGray-100 py-3 text-2xl  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Morning
                      </th>
                      <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-2xl  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Afternoon
                      </th>
                      <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-2xl  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Evening
                      </th>
                      <th className="px-6 bg-blueGray-50 text-white align-middle border border-solid border-blueGray-100 py-3 text-2xl  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Night
                      </th>
                    </tr>
                  </thead>
                  <br></br>
                  <tbody>
                    <tr>
                      <td className="border-t-0 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black-700 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className=" bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          10.00 AM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <button className="bg-transparent text-white text-xl font-semibold py-3 px-4 border border-blue-500  rounded opacity-50 cursor-not-allowed">
                          12.30 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          4.00 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          8.00 PM
                        </button>
                      </td>
                    </tr>
                    <br></br>

                    <tr>
                      <td className="border-t-0 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black-700 ">
                        <button className="bg-transparent text-white text-xl font-semibold py-3 px-4 border border-blue-500  rounded opacity-50 cursor-not-allowed">
                          10.30 AM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 pl-5 pr-6 border border-blue-500 hover:border-transparent rounded"
                        >
                          1.30 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          5.00 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          8.30 PM
                        </button>
                      </td>
                    </tr>
                    <br></br>

                    <tr>
                      <td className="border-t-0 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black-700 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          11.00 AM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 pl-5 pr-6 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          2.30 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="bg-transparent text-white text-xl font-semibold py-3 px-4 border border-blue-500  rounded opacity-50 cursor-not-allowed">
                          6.00 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          9.00 PM
                        </button>
                      </td>
                    </tr>
                    <br></br>

                    <tr>
                      <td className="border-t-0 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-black-700 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          11.30 AM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 pl-5 pr-6 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          3.30 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button
                          onClick={clickHandler}
                          onClickCapture={(e) => SetTime(e.target.innerHTML)}
                          className="bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          7.00 PM
                        </button>
                      </td>
                      <td className="border-t-0 px-6 align-right border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="bg-transparent text-white text-xl font-semibold py-3 px-4 border border-blue-500  rounded opacity-50 cursor-not-allowed">
                          9.30 PM
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
