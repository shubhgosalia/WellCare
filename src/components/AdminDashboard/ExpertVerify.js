import React from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import VerifyHeading from "components/AdminDashboard/VerifyHeading";
import Swal from "sweetalert2";
import "./Modal.css";

import { useState } from "react";

const ExpertVerify = () => {
  // use state for verification button - color change and button text change
  let green = "#3b8132";
  const [buttonText1, setButtonText1] = useState("Verify");
  const [bgColor1, setBgColor1] = useState(green);

  const [buttonText2, setButtonText2] = useState("Verify");
  const [bgColor2, setBgColor2] = useState(green);

  const [buttonText3, setButtonText3] = useState("Verify");
  const [bgColor3, setBgColor3] = useState(green);

  const [buttonText4, setButtonText4] = useState("Verify");
  const [bgColor4, setBgColor4] = useState(green);

  const [buttonText5, setButtonText5] = useState("Verify");
  const [bgColor5, setBgColor5] = useState(green);

  const [buttonText6, setButtonText6] = useState("Verify");
  const [bgColor6, setBgColor6] = useState(green);

  // function for each expert verification button
  function handleClick1() {
    setButtonText1("Verified!");
    let blue = "#008ecc";

    setBgColor1(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  function handleClick2() {
    setButtonText2("Verified!");
    let blue = "#008ecc";

    setBgColor2(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  function handleClick3() {
    setButtonText3("Verified!");
    let blue = "#008ecc";

    setBgColor3(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  function handleClick4() {
    setButtonText4("Verified!");
    let blue = "#008ecc";

    setBgColor4(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  function handleClick5() {
    setButtonText5("Verified!");
    let blue = "#008ecc";

    setBgColor5(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  function handleClick6() {
    setButtonText6("Verified!");
    let blue = "#008ecc";

    setBgColor6(blue);

    Swal.fire({
      icon: "success",
      title: "Expert Verified!",
      text: "This expert can now be seen on the WellCare Portal!",
    });
  }

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

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
                    {" "}
                    Name{" "}
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    {" "}
                    Category{" "}
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    {" "}
                    Clinic/Centre Address
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                    {" "}
                    License No.{" "}
                  </th>

                  <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                    {" "}
                    Verification status{" "}
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
                        <div classNameName="text-lg">Dr. Neha Dayma</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          {" "}
                          Female, 27yrs{" "}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div classNameName="text-lg">Nutritionist</div>
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
