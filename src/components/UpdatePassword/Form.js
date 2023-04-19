import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
// icons
import FullEyeIcon from "components/Icons/Bold/fullEye";
import EyeOffIcon from "components/Icons/Bold/eyeOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [passwordVisiblity, setPasswordVisiblity] = useState(false);
  const [pass, setPass] = useState({
    ogPass: "",
    newPass: "",
    confirmPass: "",
  });
  const [load, setLoad] = useState(false);

  const changePassword = async () => {
    try {
      if (
        pass.newPass.trim() !== pass.confirmPass.trim() ||
        pass.newPass.trim() === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "passwords do not match!!",
        });
        return;
      }
      setLoad(true);
      let res = await axios.post(
        `http://localhost:4000/auth/resetpassword`,
        {
          password: pass.ogPass,
          newPassword: pass.newPass,
        },
        {
          withCredentials: true,
        }
      );
      setLoad(false);
      Swal.fire({
        icon: "success",
        title: res.data.message,
      });
      if (res.data.success) {
        navigate("/myAccount");
      }
    } catch (err) {
      console.log("error : ", err);
      setLoad(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  useEffect(() => {}, []);
  const handlePassword = () => {
    if (passwordVisiblity) {
      setPasswordVisiblity(false);
    } else {
      setPasswordVisiblity(true);
    }
  };

  const update_pass = (e) => {
    setPass((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      {/* current Password */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">Current Password</div>

          {/* input */}
          {passwordVisiblity ? (
            <input
              type="text"
              id="password"
              name="ogPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.ogPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          ) : (
            <input
              type="password"
              id="password"
              name="ogPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.ogPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          )}
        </div>

        {/* Icon */}
        {passwordVisiblity ? (
          <div className="my-auto" onClick={handlePassword}>
            <FullEyeIcon size="28" color="#ffffff" />
          </div>
        ) : (
          <div className="my-auto" onClick={handlePassword}>
            <EyeOffIcon size="28" color="#ffffff" />
          </div>
        )}
      </div>

      {/* new password */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">New Password</div>

          {/* input */}
          {passwordVisiblity ? (
            <input
              type="text"
              id="password"
              name="newPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.newPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          ) : (
            <input
              type="password"
              id="password"
              name="newPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.newPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          )}
        </div>

        {/* Icon */}
        {passwordVisiblity ? (
          <div className="my-auto" onClick={handlePassword}>
            <FullEyeIcon size="28" color="#ffffff" />
          </div>
        ) : (
          <div className="my-auto" onClick={handlePassword}>
            <EyeOffIcon size="28" color="#ffffff" />
          </div>
        )}
      </div>

      {/* confirm new password */}
      <div className="flex w-full justify-between bg-dark-100 rounded-lg  p-5 border border-dark-200">
        {/* Label and Input */}
        <div className="w-[90%] flex flex-col">
          {/* label */}
          <div className="text-base text-dark-600">Confirm Password</div>

          {/* input */}
          {passwordVisiblity ? (
            <input
              type="text"
              id="password"
              name="confirmPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.confirmPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          ) : (
            <input
              type="password"
              id="password"
              name="confirmPass"
              placeholder="Enter Password"
              minLength={1}
              autoComplete="do-not-autofill"
              value={pass.confirmPass}
              className="py-1 bg-dark-100  outline-none text-xl"
              onChange={update_pass}
            ></input>
          )}
        </div>

        {/* Icon */}
        {passwordVisiblity ? (
          <div className="my-auto" onClick={handlePassword}>
            <FullEyeIcon size="28" color="#ffffff" />
          </div>
        ) : (
          <div className="my-auto" onClick={handlePassword}>
            <EyeOffIcon size="28" color="#ffffff" />
          </div>
        )}
      </div>

      {/* save changes and cancel*/}
      <button
        className="button w-1/3 mt-4"
        to="/updatePassword"
        onClick={changePassword}
        disabled={load ? true : false}
      >
        {load ? " Loading..." : "Change Password"}
      </button>
    </div>
  );
};

export default Form;
