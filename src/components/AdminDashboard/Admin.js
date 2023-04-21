import React, { useEffect, useState } from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import StatHeading from "components/AdminDashboard/StatHeading";
import BoldGymIcon from "components/Icons/Bold/gym";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldPhysioIcon from "components/Icons/Bold/physio";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import { faUser } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faCalendarCheck } from "../../../node_modules/@fortawesome/free-solid-svg-icons/index";
import axios from "axios";
import Swal from "sweetalert2";
const Admin = () => {

  const [stats,setStats]=useState({
    physio:"",
    nutri:"",
    gym:"",
    patients:"",
    appointments:"",
    avgSessions:""
  });
  
  const [load, setLoad] = useState(false);

  const fetchStats=async()=>{
    try{
      setLoad(true);
      const res= await axios.get("http://localhost:4000/admin/stats",{
        withCredentials:true
      })
      setLoad(false);
      setStats(res.data.data);

    }
    catch(err){
    console.log("error : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  }
  useEffect(()=>{
    fetchStats();
  },[])


  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <AdminNav />
      </div>
      <div className="w-[84%] flex flex-col space-y-10">
        <div className="top-0 w-[100%] mx-auto mt-5">
          {/* Title */}
          <StatHeading />
        </div>
        {/* Stats Cards */}
        <div className="grid lg:gap-x-8 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0 lg:mt-5">
            <div
              className="rounded-lg shadow-lg block h-full bg-white ml-10"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <BoldPhysioIcon size="30" />
                </div>
              </div>
              <div className="p-4">
                {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.physio}
                 </h3>
                }
                
                <h5 className="text-2xl font-medium mb-4 text-center text-gray-700">
                  Physiotherapists
                </h5>
                <p className="text-gray-500 text-center text-lg">
                  Number of Physiotherapists registered onto our portal!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0 lg:mt-5">
            <div
              className="rounded-lg shadow-lg h-full block bg-white ml-5"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <BoldNutritionistIcon size="30" />
                </div>
              </div>
              <div className="p-4">
              {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.nutri}
                 </h3>
                }
                
                <h5 className="text-2xl font-medium text-center mb-4 text-gray-700">
                  Nutritionists
                </h5>
                <p className="text-gray-500 text-center text-lg">
                  Number of Nutritionists registered onto our portal!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0 lg:mt-5">
            <div
              className="rounded-lg shadow-lg h-full block bg-white"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <BoldGymIcon size="30" />
                </div>
              </div>
              <div className="p-4">
              {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.gym}
                 </h3>
                }
                
                <h5 className="text-2xl font-medium mb-4 text-center text-gray-700">
                  Gym Trainers
                </h5>
                <p className="text-gray-500 text-center text-lg">
                  Number of Gym Trainers registered onto our portal!
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 lg:mb-0 lg:mt-20">
            <div
              className="rounded-lg shadow-lg h-full block bg-white ml-10"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#ffffff" }}
                    size="2xl"
                  />
                </div>
              </div>
              <div className="p-4">
              {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.patients}
                 </h3>
                }
                
                <h5 className="text-2xl text-center font-medium mb-4 text-gray-700">
                  Patients/Users
                </h5>
                <p className="text-gray-500 text-lg text-center">
                  Number of patients/users registered onto the portal!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0 lg:mt-20">
            <div
              className="rounded-lg shadow-lg h-full block bg-white ml-5"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    style={{ color: "#ffffff" }}
                    size="2xl"
                  />
                </div>
              </div>
              <div className="p-4">
              {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.appointments}
                 </h3>
                }
              
                <h5 className="text-2xl text-center text-gray-700 font-medium mb-4">
                  Appointments/Sessions
                </h5>
                <p className="text-gray-500 text-center text-lg">
                  Total no. of Appointments/Sessions booked via the portal!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0 lg:mt-20">
            <div
              className="rounded-lg shadow-lg h-full block bg-white"
              style={{ width: 420 }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                  <svg
                    className="w-8 h-8 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
              {
                  load? (<p className="text-center">Loading...</p>):
                  <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                  {stats.avgSessions}
                 </h3>
                }
                
                <h5 className="text-2xl text-center font-medium mb-4 text-gray-700">
                  Avg. Sessions per Patient
                </h5>
                <p className="text-gray-500 text-lg text-center">
                  Avg. no of appointments/sessions per patient/user{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-[85%] h-full mx-auto flex items-center justify-start overflow-x-auto gap-6 relative"
          style={{ marginTop: -5 }}
        ></div>
      </div>
    </div>
  );
};

export default Admin;
