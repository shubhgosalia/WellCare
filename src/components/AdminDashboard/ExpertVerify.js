import React from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import VerifyHeading from "components/AdminDashboard/VerifyHeading";
import Swal from "sweetalert2";
import "./Modal.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Expert from "./Expert";
const ExpertVerify = () => {
  const [experts, setExperts] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchExperts = async () => {
    try {
      setLoad(true);
      const res = await axios.get("http://localhost:4000/admin/getAllDoctors", {
        withCredentials: true
      })
      console.log("resp  : ", res.data.data.doctors);
      setLoad(false);
      setExperts(res.data.data.doctors);
    }
    catch (err) {
      console.log("error : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  }

  useEffect(() => {
    fetchExperts();
  }, [])


  const verifyDoctor = async(_id) => {
    try {
        setLoad(true);
        let res= await axios.patch(`http://localhost:4000/admin/verifyDoctor/${_id}`,{},{
            withCredentials: true
        })
        if (res.data.success) {
            Swal.fire({
                icon: "success",
                title: "Expert Verified!",
                text: "This expert can now be seen on the WellCare Portal!",
            });
            fetchExperts();
        }
        setLoad(false);
    }
    catch (err) {
        setLoad(false);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.error,
          });
    }
}
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <AdminNav />
      </div>
      <div className="w-[84%] flex flex-col space-y-10">
        <div className="top-0 w-[100%] mx-auto mt-5">
          {/* Title */}
          <VerifyHeading />
        </div>
        {/* Expert list table format */}
        <div className="min-h-screen">
          <div className="overflow-x-auto w-full">
            <table className="mx-auto max-w-6xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
              <thead className="bg-gray-700">
                <tr className="text-white text-left">
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Name
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Category
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Clinic/Centre Address
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                    License No.
                  </th>

                  <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                    Verification status
                  </th>

                  <th className="font-semibold text-md uppercase px-6 py-4 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />
                      </div>
                      <div>
                        <div className="text-lg">Dr. Neha Dayma</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 27yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Nutritionist</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      nehadayma@mail.com{" "}
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
                        Sama Health
                      </a>{" "}
                      <div>+91 8376421734</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      8603957681{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick1}
                      style={{ background: bgColor1 }}
                    >
                      {buttonText1}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
                              alt=""
                              className="rounded-lg mx-auto"
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
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />
                      </div>
                      <div>
                        <div className="text-lg">Rupa Shroff</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 32yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Gym Trainer</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      rupashroff@mail.com{" "}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      <a
                        className=" hover:underline text-black font-medium text-md"
                        href="https://tinyurl.com/4rvxy5jz"
                      >
                        Fitness Hub
                      </a>{" "}
                      <div>+91 9572387876</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      3501284623{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white  font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick2}
                      style={{ background: bgColor2 }}
                    >
                      {buttonText2}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
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
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />{" "}
                      </div>
                      <div>
                        <div className="text-lg">Dr. Drishti Sharma</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 41yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Sports Physiotherapist</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      drishtas@mail.com{" "}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      <a
                        className=" hover:underline text-black font-medium text-md"
                        href="https://tinyurl.com/4rvxy5jz"
                      >
                        Spotic Physio
                      </a>{" "}
                      <div>+91 7381923643</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      6756092124{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white  font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick3}
                      style={{ background: bgColor3 }}
                    >
                      {buttonText3}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
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
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />{" "}
                      </div>
                      <div>
                        <div className="text-lg">Dr. Sakshi Gandhi</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 52 yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Nutritionist</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      sakshig@mail.com{" "}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      <a
                        className=" hover:underline text-black font-medium text-md"
                        href="https://tinyurl.com/4rvxy5jz"
                      >
                        Nutri Delight
                      </a>{" "}
                      <div>+91 9011098767</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      7651273784{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white  font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick4}
                      style={{ background: bgColor4 }}
                    >
                      {buttonText4}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
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
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />{" "}
                      </div>
                      <div>
                        <div className="text-lg">Anamika Shetty</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 37yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Gym Trainer</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      anamikashetty@mail.com{" "}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      <a
                        className=" hover:underline text-black font-medium text-md"
                        href="https://tinyurl.com/4rvxy5jz"
                      >
                        Zodiac Fit
                      </a>{" "}
                      <div>+91 6927635122</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      9472634812{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick5}
                      style={{ background: bgColor5 }}
                    >
                      {buttonText5}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
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
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex w-10 h-10">
                        {" "}
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />{" "}
                      </div>
                      <div>
                        <div className="text-lg">Dr. Aparna Dixit</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 45yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-lg">Orthopedic Physiotherapist</div>
                    <p className="text-gray-500 text-md font-medium tracking-wide">
                      {" "}
                      aparnadixit@mail.com{" "}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      <a
                        className=" hover:underline text-black font-medium text-md"
                        href="https://tinyurl.com/4rvxy5jz"
                      >
                        Physio Touch
                      </a>{" "}
                      <div>+91 9283746565</div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {" "}
                    <div className="text-gray-700 text-lg font-medium">
                      {" "}
                      4718236459{" "}
                    </div>{" "}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="focus:outline-none text-white  font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2"
                      onClick={handleClick6}
                      style={{ background: bgColor6 }}
                    >
                      {buttonText6}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Certificate
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <img
                              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6A617ZKQ.jpg"
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertVerify;
