import React, { useEffect, useState } from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import StatHeading from "components/AdminDashboard/StatHeading";
import BoldGymIcon from "components/Icons/Bold/gym";
import BoldNutritionistIcon from "components/Icons/Bold/nutritionist";
import BoldPhysioIcon from "components/Icons/Bold/physio";
import BoldCalendarCheck from "components/Icons/Bold/calendarCheck"
import BoldSettingsIcon from "components/Icons/Bold/settings"
import BoldUserIcon from "components/Icons/Bold/myAccount"
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

      {/*  */}
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
                  <BoldPhysioIcon size="30" color="#0d1117" />
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
                  <BoldNutritionistIcon size="30" color="#0d1117" />
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
                  <BoldGymIcon size="30" color="#0d1117" />
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
                  <BoldUserIcon size="30" color="#0d1117" />
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
                  <BoldCalendarCheck size="30" color="#0d1117" />
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
                  <BoldSettingsIcon size="30" color="#0d1117" />
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
