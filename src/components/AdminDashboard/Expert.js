import React from "react";
import Swal from "sweetalert2";
import "./Modal.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Expert = ({ info, verifyDoctor }) => {
  const {
    _id,
    name,
    age,
    gender,
    category,
    email,
    licenseNumber,
    phoneNumber,
    locality,
    specialization,
    clinic_name,
  } = info;

  // use state for verification button - color change and button text change
  let green = "#3b8132";
  const [buttonText1, setButtonText1] = useState("Verify");
  const [bgColor1, setBgColor1] = useState(green);

  const [load, setLoad] = useState(false);

  // function for each expert verification button
  function handleClick() {
    setButtonText1("Verified!");
    let blue = "#008ecc";
    setBgColor1(blue);
    verifyDoctor(_id);
  }

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <tr>
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="inline-flex w-10 h-10">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-12 h-12 rounded-lg mx-auto"
            />
          </div>
          <div>
            {/* Name */}
            <div classNameName="text-lg">{name}</div>
            <p className="text-gray-600 text-md font-medium tracking-wide">
              {gender}, {age}yrs
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div classNameName="text-lg">
          {specialization} {category}
        </div>
        <p className="text-gray-500 text-md font-medium tracking-wide">
          {email}
        </p>
      </td>
      <td className="px-6 py-4 text-center">
        {" "}
        <div className="text-gray-700 text-lg font-medium">
          {" "}
          <a
            classNameName=" hover:underline text-black font-medium text-md"
            href="https://tinyurl.com/4rvxy5jz"
          >
            {clinic_name}, {locality}
          </a>
          <div>+91 {phoneNumber}</div>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="text-gray-700 text-lg font-medium">{licenseNumber}</div>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="focus:outline-none text-white font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
          onClick={handleClick}
          style={{ background: bgColor1 }}
          disabled={load ? true : false}
        >
          {buttonText1}
        </button>
      </td>
      {/* <td className="px-6 py-4 text-center">
                <button className="text-primary-blue" onClick={toggleModal}>
                    View Certificate
                </button>
                {modal && (
                    <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvChauvpn9_bbGIIFcXsvlho-DboGEYIeQjVsBiy5uGMRcl7Gclva3OpiErRpK681h4w&usqp=CAU"
                                    alt=""
                                    className="w-250 h-200 rounded-lg mx-auto"
                                />
                                <button
                                    className="close-modal text-white font-medium rounded-lg bg-green-800"
                                    onClick={toggleModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </td> */}
    </tr>
  );
};

export default Expert;
