import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavigateBack from "components/Utils/NavigateBack";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
    type: "Patient",
  });
  const [load, setLoad] = useState(false);
  const Navigate = NavigateBack();

  const handleMail = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const submit_form = async () => {
    //send the data to the backend
    try {
      //put regex to verify that the entered mail is correct or not
      if (data.email === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please put correct mail...",
        });
        return;
      }

      let postData = {
        email: data.email,
        type: data.type,
      };

      setLoad(true);
      let res = await axios.post(
        "http://127.0.0.1:4000/auth/forgotpassword",
        postData
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
      console.log("error in forgot password : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!!",
      });
    }
  };

  return (
    <>
      <div className="bg-white h-px mx-10"></div>

      <section className="bg-dark-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-3 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl dark:text-white">
              Password Reset
            </h2>
            <p className="text-gray-600 mb-2">
              Don't worry, please enter your e-mail address and we will send you
              a link to reset your password!
            </p>
            <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-medium text-gray-600"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e-mail"
                  required
                  onChange={handleMail}
                />
              </div>

              {/* radio button */}
              {/* <label className="block text-md font-medium text-gray-600 dark:text-white">
                You are?
              </label> */}
              <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value="Doctor"
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  checked={data.type === "Doctor" ? true : false}
                  onChange={handleMail}
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="py-4 ml-2 w-full text-sm font-medium text-gray-500"
                >
                  Doctor
                </label>
              </div>

              <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value="Patient"
                  name="type"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  checked={data.type === "Patient" ? true : false}
                  onChange={handleMail}
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="py-4 ml-2 w-full text-sm font-medium text-gray-500"
                >
                  Patient
                </label>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-dark-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-dark-400"
                disabled={load ? true : false}
                onClick={submit_form}
              >
                {load ? "Loading...." : "Reset Link"}
              </button>
            </div>
          </div>
          <button
            className="w-full sm:max-w-md text-white bg-dark-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-dark-300 my-3"
            onClick={() => Navigate("/login")}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
