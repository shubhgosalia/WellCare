import React, { useEffect } from "react";
import Navbar from "components/Utils/Navbar";
import Title from "components/SlotBooking/Title";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SlotBooking = (props) => {
  const location = useLocation();
  const [time, SetTime] = useState();
  console.log("loc :", location.state);

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const doc_id = location.state.doc_id;
  console.log("location : ",location.state);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/checkoutPayment", {
      state: {
        time: `${time}`,
        date: location.state.date,
        doc_id: doc_id,
        data: location.state.data,
        status: location.state.status,
      },
    });
  };

  // 2023-04-23
  const slots = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  const getSlots = async () => {
    try {
      setLoad(true);
      let res = await axios.get(
        `http://localhost:4000/patient/getAppointments/${doc_id}`,
        {
          params: {
            date: new Date(location.state.date).toISOString().slice(0, 10),
          },
          withCredentials: true,
        }
      );
      console.log("res : ", res.data.data);
      setData(res.data.data);
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
            {/* SLOTS FOR {location.state.date} */}
          </div>
          <div style={{ height: 300, width: 300 }}>
            <img
              src={location.state.data.profile_pic.image_url}
              alt=""
              className=" rounded-lg mt-2 ml-10 h-[250px] w-[250px]"
            />
            <div
              className="mt-5 font-semibold text-2xl"
              style={{ marginLeft: 90 }}
            >
              Dr. {location.state.data.name}
            </div>
            <div
              className="ml-20 text-md text-dark-900"
              style={{ marginLeft: 90 }}
            >
              {location.state.data.specialization}{" "}
              {location.state.data.category}
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
              <div className="w-full overflow-x-auto grid grid-cols-3 grid-flow-row gap-4">
                {slots.map((item) => {
                  let disable = false;
                  data.forEach((i) => {
                    if (i.startTime === item) {
                      disable = true;
                    }
                  });
                  if (
                    new Date().toISOString().slice(0, 10) ===
                      new Date(location.state.date).toISOString().slice(0, 10) &&
                    new Date().getHours() > item
                  ) {
                    disable = true;
                  }
                  return (
                    <button
                      type="button"
                      onClick={clickHandler}
                      disabled={disable}
                      onClickCapture={(e) => SetTime(e.target.innerHTML)}
                      className={`${
                        disable
                          ? "cursor-not-allowed pointer-events-none bg-red-500/70 hover:bg-red-600"
                          : "bg-green-500 hover:bg-green-600"
                      }  text-white text-xl font-semibold py-3 px-4 rounded shadow-lg transition delay-100 ease-in-out`}
                    >
                      {/* pointer-events-none */}
                      {item}
                      {item >= 10 && item < 12 ? " : 00 AM" : " : 00 Hrs"}
                    </button>
                  );
                })}
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
