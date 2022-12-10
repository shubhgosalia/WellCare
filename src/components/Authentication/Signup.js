import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();
  //patient data
  let [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    checked: false,
  });
  const [load, setLoad] = useState(false);

  const submit = async (event) => {
    //send the data to the backend
    try {
      if (data.password !== data.confirmPassword) {
        // setKey("password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Passwords do not match.",
        });
        setData((prevState) => {
          return { ...prevState, password: "", confirmPassword: "" };
        });
        return;
      }
      if (!data.checked) {
        // setKey("password");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please check the checkbox..",
        });
        return;
      }
      event.preventDefault();
      let postData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
        gender: data.gender,
        age: data.age,
        username: data.username,
      };

      setLoad(true);
      let res = await axios.post(
        "http://127.0.0.1:4000/patient/register",
        postData
      );
      console.log("RESSSSSULTT : ", res);
      setLoad(false);
      setData({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        confirmPassword: "",
        age: "",
        gender: "",
        username: "",
      });

      if (res.data.status === true) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
        navigate("/login");
      }
    } catch (err) {
      setLoad(false);
      console.log("err : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error ? err.response.data.error : "Something went wrong!",
      });
    }
  };

  const check = (event) => {
    const { name, checked } = event.target;
    console.log("check : ", checked);
    setData((prevData) => {
      return { ...prevData, [name]: checked };
    });
  };

  const updateInfo = (event) => {
    const { name, value } = event.target;
    //setting the data
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <>
      {/* main container */}
      <div className="bg-dark-100  w-full  h-full">
        <div className="flex p-5 space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="flex flex-col w-1/3 bg-blue-600  rounded-lg px-14 py-8 justify-between">
            {/* heading */}
            <div className="flex-col space-y-0 text-center">
              <div className="font-black text-4xl">WellCare</div>
              <div className="text-xs">Must for HealthCare</div>
            </div>

            {/* Center Tagline */}
            <div className="flex flex-col space-y-5">
              <div className="font-bold text-5xl leading-10">
                Start your journey with us.
              </div>
              <div className="text-base leading-7 font-thin">
                Discover the health portal full of of doctors and trainers who are waiting to help you on making your health journey easier.
              </div>
            </div>

            {/* Container 3 */}
            <div className="flex flex-col rounded-lg bg-blue-700 p-5">
              {/* Message */}
              <div className="">
                <b>
                  Being healthy has countless benefits. So what is stopping you? Just connect with us and take a step towards improving your health...
                </b>

              </div>

              {/*  */}
              <div></div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="w-2/3 h-full text-black p-5">
            {/* logo */}
            <div className="flex-col space-y-0 text-center ">
              <div className="font-black text-4xl text-blue-700">WellCare</div>
              <div className="text-xs text-white">Must for HealthCare</div>
            </div>

            {/* Redirect To Doctor register */}
            <p className="mt-1 px-9" style={{ color: "white" }}>
              Are you a doctor/Expert?{" "}
              <a style={{ color: "blue" }} href="/doctorRegistration">
                Signup Here
              </a>{" "}
            </p>

            {/* form */}
            <div className=" py-8 px-6 shadow rounded-lg sm:px-10 flex flex-col space-y-6">

              {/* Full Name */}
              <div className="">
                <label
                  htmlFor="fullName"
                  className="block text-base font-medium text-gray-200"
                >
                  Full Name<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    autoComplete="text"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-200"
                >
                  Email address<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* userName */}
              <div>
                <label
                  htmlFor="userName"
                  className="block text-base font-medium text-gray-200"
                >
                  UserName<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="userName"
                    name="username"
                    type="text"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-200"
                >
                  Password<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* confirm password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-200"
                >
                  Confirm Password<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="cpassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* age */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-base font-medium text-gray-200"
                >
                  Age<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    required
                    className="rounded p-2 text-lg w-1/3"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-base font-medium text-gray-200"
                >
                  Gender<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1 ">
                  <select
                    name="gender"
                    id="company-size"
                    className="rounded p-2 w-1/3 text-lg font-bold"
                    onChange={updateInfo}
                  >
                    <option value="">Please select</option>
                    <option value="small">Male</option>
                    <option value="medium">Female</option>
                    <option value="large">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-base font-medium text-gray-200"
                  onChange={updateInfo}
                >
                  Phone Number<sup className="text-red-600">*</sup>
                </label>
                <div className="mt-1 flex flex-row space-x-2">
                  <div className="text-white my-auto font-bold text-lg">
                    +91
                  </div>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    display="none"
                    autoComplete="current-password"
                    required
                    className="w-full rounded p-2 text-lg"
                    onChange={updateInfo}
                  />
                </div>
              </div>

              {/* t&c */}
              <div className="flex items-center">
                <input
                  id="terms-and-privacy"
                  name="checked"
                  type="checkbox"
                  className=""
                  required
                  onChange={check}
                />
                <label
                  htmlFor="terms-and-privacy"
                  className="ml-2 block text-base text-gray-200"
                >
                  I agree to the
                  <a
                    href="/"
                    className="text-blue-600 hover:text-blue-800 px-1"
                  >
                    Terms
                  </a>
                  and
                  <a
                    href="/"
                    className="text-blue-600 hover:text-blue-800 px-1"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {/* Sign in Button */}
              <div>
                <button
                  type="submit"
                  className="w-1/3 flex justify-center py-3 rounded-md text-md font-medium text-white bg-blue-700 hover:bg-blue-800"
                  disabled={load ? true : false}
                  onClick={submit}
                >
                  {
                    load ? "Loading..." : "Register"
                  }
                </button>
              </div>
              <div className="text-white">
                Already registered??
                <a
                  href="/login"
                  className="hover:underline-offset-8 text-blue-600 mx-2"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
