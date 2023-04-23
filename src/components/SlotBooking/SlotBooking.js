import React, { useEffect } from "react";
import Navbar from "components/Utils/Navbar";
import Title from "components/SlotBooking/Title";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SlotBooking = (props) => {
  const {location} = useLocation();
  const [time, SetTime] = useState();
  console.log(location.state.date);
  const [findate, SetFindate] = useState(location.state.date);
  const doc_id = location.state.doc_id;
  // const doc_data = location.state.data;
  // console.log(location.state);
  // console.log(doc_data);
  console.log("doc_id", doc_id);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/checkoutPayment", {
      state: {
        time: `${time}`,
        findate: `${findate}`,
      },
    });
  };

  // 2023-04-23

  const getSlots = async () => {
    try {
      setLoad(true);
      // let res = await axios.get(`http://localhost:4000/getAppointments/${doc_id}`);
      // console.log("res : ", res);
      // setData(res.data.data);
      setLoad(false);
    } catch (err) {
      console.log("err : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!!",
      });
    }
  };

  useEffect(() => {
    getSlots();
  }, []);

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
          {load ? (
            <p>Loading....</p>
          ) : (
            <div
              className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto"
              style={{ marginTop: -280, marginLeft: 400 }}
            >
              <div className="relative flex flex-col min-w-0 break-words bg-dark w-full mb-6 shadow-lg rounded "></div>
              <div className="block w-full overflow-x-auto">
                <button
                  onClick={clickHandler}
                  onClickCapture={(e) => SetTime(e.target.innerHTML)}
                  className=" bg-transparent hover:bg-primary-blue text-white text-xl font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  10.00 AM
                </button>
              </div>
            </div>
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default SlotBooking;
