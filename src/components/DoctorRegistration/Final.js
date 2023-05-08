import React, { useState, useEffect } from "react";
import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import axios from "axios";
import Swal from "sweetalert2";

export default function Final() {
  const [load, setLoad] = useState(false);
  const { userData } = useStepperContext();

  useEffect(() => {
    console.log("userData in registration is ",userData)
    registerDoctor();
  }, []);

  const registerDoctor = async () => {
    //send the data to the backend
    try {
      let postData = {
        name: userData.name,
        age: userData.age,
        gender: userData.gender,
        licenseNumber: userData.licenseNumber,
        locality: userData.locality,
        specialization: userData.specialization,
        years_Of_Experience: userData.years_Of_Experience,
        phoneNumber: userData.phoneNumber,
        fees: userData.fees,
        profile_pic: userData.profile_pic,
        // certi_proof: userData.certi_proof,
        email: userData.email,
        address: userData.address,
        have_clinic: userData.have_clinic,
        username: userData.username,
        password: userData.password,
        category: userData.category,
        bio: userData.bio,
        clinic_name: userData.c_name
      };

      setLoad(true);
      console.log("Post Data is ",postData );
      console.log("postinggg...");
      let res = await axios.post(
        "http://localhost:4000/doctor/register",
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success === true) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log("error in login : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <a className="mt-10" href="/login">
          <button
            className="h-10 px-5 text-white bg-blue-600 transition-colors duration-150 border border-gray-300 rounded-lg  focus:shadow-outline hover:bg-blue-900"
            disabled={load ? true : false}
          >
            {load ? "Registering..." : "Login"}
          </button>
        </a>
      </div>
    </div>
  );
}
