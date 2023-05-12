import React, { useState, useEffect } from "react";
import NavbarHome from "components/Utils/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
const ResetPassword = (props) => {
  let { id } = useParams();
  useEffect(() => {
    console.log("Props in reset PAssword", props);
  }, []);

  const [pass, setPass] = useState({
    password: "",
    cPassword: "",
  });
  const [load, setLoad] = useState(false);

  const handlePass = (e) => {
    const { name, value } = e.target;
    setPass((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submit_form = async () => {
    //send the data to the backend
    try {
      //put regex to verify that the entered mail is correct or not
      if (
        pass.password.trim() !== pass.cPassword.trim() ||
        pass.password.trim() !== ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Passwords do not match...",
        });
      }

      let postData = {
        password: pass.password,
      };

      setLoad(true);
      let res = await axios.post(
        `http://127.0.0.1:4000/auth/setpassword/:${props.match.params.token}`,
        postData
      );
      if (res.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log("error in set password : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!!",
      });
    }
  };
  return (
    <>
      {/* <NavbarHome /> */}
      <div className="bg-white h-px mx-10"></div>
      <section className="bg-dark-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg  shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl dark:text-white">
              Reset Password
            </h2>
            <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onClick={handlePass}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm new password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-600 focus:border-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onClick={handlePass}
                />
              </div>
              <div className="flex items-start">
                {/* <div className="flex items-center h-5"> */}
                {/* <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-600 dark:ring-offset-gray-800"
                    required=""
                  /> */}
                {/* </div> */}
              </div>
              <button
                type="submit"
                className="w-full text-black bg-600 hover:bg-700 focus:ring-4 focus:outline-none focus:ring-300 font-medium rounded-lg  text-md px-5 py-2.5 text-center bg-primary-blue"
                disabled={load ? true : false}
                onClick={submit_form}
              >
                {load ? "Loading...." : "Reset Password"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
