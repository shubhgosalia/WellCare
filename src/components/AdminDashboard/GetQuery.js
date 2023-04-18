import React from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import { useState } from "react";

import QueryHeading from "components/AdminDashboard/QueryHeading";
import "./Modal.css";

const GetQuery = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <AdminNav />x{" "}
      </div>
      <div className="w-[84%] flex flex-col space-y-10">
        <div className="top-0 w-[100%] mx-auto mt-5">
          {/* Title */}
          <QueryHeading />
        </div>
        {/* Expert list table format */}
        <div className="min-h-screen">
          <div className="overflow-x-auto w-full">
            <table className="mx-auto max-w-6xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
              <thead className="bg-gray-700">
                <tr className="text-white text-left">
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    User
                  </th>
                  <th className="font-semibold text-md uppercase px-10 py-4">
                    Topic
                  </th>
                  <th className="font-semibold text-md uppercase px-14 py-4">
                    Subject
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
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
                        <div className="text-lg">Neha Dayma</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          nehadayma
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="text-lg">Technical Glitch</div>
                  </td>
                  <td className="py-4">
                    <div className="text-gray-700 text-lg font-medium">
                      Issue in appointment booking
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Message
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <div className="font-bold">Query Message</div>
                            <p>
                              Did not get appointment booked verification mail
                              <br></br>
                              even after making payment.Had to make the<br></br>
                              appointment once again.Please fix the glitch.
                            </p>
                            <button
                              className="close-modal text-white text-sm rounded-md bg-green-800"
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
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />
                      </div>
                      <div>
                        <div className="text-lg">Rupa Shroff</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          rupa90
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="text-lg">Give Suggestion</div>
                  </td>
                  <td className="py-4">
                    <div className="text-gray-700 text-lg font-medium">
                      Chatbot option can be useful
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Message
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <div className="font-bold">Query Message</div>
                            <p>
                              Did not get appointment booked verification mail
                              <br></br>
                              even after making payment.Had to make the<br></br>
                              appointment once again.Please fix the glitch.
                            </p>
                            <button
                              className="close-modal text-white text-sm rounded-md bg-green-800"
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
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />
                      </div>
                      <div>
                        <div className="text-lg">Drishti Sharma</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          dsharma
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="text-lg">Give Suggestion</div>
                  </td>
                  <td className=" py-4">
                    <div className="text-gray-700 text-lg font-medium">
                      More payment options can be added
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Message
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <div className="font-bold">Query Message</div>
                            <p>
                              Did not get appointment booked verification mail
                              <br></br>
                              even after making payment. Had to make the
                              <br></br>
                              appointment once again. Please fix the glitch.
                            </p>
                            <button
                              className="close-modal text-white text-sm rounded-md bg-green-800"
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
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                          alt=""
                          className="w-12 h-12 rounded-lg mx-auto"
                        />
                      </div>
                      <div>
                        <div className="text-lg">Sakshi Gandhi</div>
                        <p className="text-gray-600 text-md font-medium tracking-wide">
                          sakgandhi
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4">
                    <div className="text-lg">Technical Glitch</div>
                  </td>
                  <td className="py-4">
                    <div className="text-gray-700 text-lg font-medium">
                      Video calling lag there sometimes
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="text-primary-blue" onClick={toggleModal}>
                      View Message
                    </button>
                    {modal && (
                      <div className="modal">
                        <div className="overlay">
                          <div className="modal-content">
                            <div className="font-bold">Query Message</div>
                            <p>
                              Did not get appointment booked verification mail
                              <br></br>
                              even after making payment. Had to make the
                              <br></br>
                              appointment once again. Please fix the glitch.
                            </p>
                            <button
                              className="close-modal text-white text-sm rounded-md bg-green-800"
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

export default GetQuery;
