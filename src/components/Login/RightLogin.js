import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "context/UserContext";

const Login = () => {
  //if the user is already logged in don't allow it to Login again
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);

  let [data, setData] = useState({
    username: "",
    password: "",
    type: "Patient",
  });
  const [load, setLoad] = useState(false);
  const { setLoginStatus } = useContext(UserContext);

  const submit_form = async (event) => {
    //send the data to the backend
    try {
      event.preventDefault();
      let postData = {
        username: data.username,
        password: data.password,
        type: data.type,
      };

      setLoad(true);
      let res = await axios.post("http://localhost:4000/auth/login", postData, {
        withCredentials: true,
      });
      if (res.data.success === true) {
        setLoginStatus(true);
        Swal.fire({
          icon: "success",
          title: res.data.message,
        });

        navigate("/home");
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log("error in login : ", err);
      setLoginStatus(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  const login = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <>
      {/* logo */}
      <div className="flex-col space-y-0 text-center ">
        <div className="font-black text-5xl text-primary-blue font-head-primary">
          WellCare
        </div>
        <div className="text-xs text-white">Must for HealthCare</div>
      </div>
      {/* form */}
      <div className="lg:py-8 lg:px-6 lg:rounded-lg rounded shadow">
        <div className="space-y-6">
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Username/Email ID
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="username"
                type="text"
                required
                className="w-full rounded-lg p-2 text-lg"
                onChange={login}
              />
            </div>
          </div>

          {/* password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg p-2 text-lg"
                onChange={login}
              />
            </div>
          </div>

          {/* radio button */}
          <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value="Doctor"
              name="type"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              checked={data.type === "Doctor" ? true : false}
              onChange={login}
            />
            <label
              htmlFor="bordered-radio-1"
              className="py-4 ml-2 w-full text-sm font-medium text-gray-200 dark:text-gray-500"
            >
              Doctor / Expert
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
              onChange={login}
            />
            <label
              htmlFor="bordered-radio-1"
              className="py-4 ml-2 w-full text-sm font-medium text-gray-200 dark:text-gray-500"
            >
              Patient
            </label>
          </div>

          {/* Sign in Button */}
          <div>
            <button
              type="submit"
              className="w-1/3 flex justify-center py-3 rounded-md text-md font-medium text-white bg-primary-blue hover:bg-secondary-blue"
              onClick={submit_form}
            >
              {load ? "Loading..." : "Login"}
            </button>
            <div className="my-3">
              <div className="hover:underline-offset-8 text-primary-blue">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
            </div>
            <div className="text-white my-3">
              Don't have an account?
              <Link
                className="hover:underline-offset-8 text-primary-blue mx-2"
                to="/signup"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
