import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const VerifySuccess = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white  flex flex-col space-y-6">
        <div className="flex items-center justify-center h-screen">
          <div className="p-8 rounded shadow-lg ring ring-indigo-600/50">
            <div
              className="flex flex-col items-center space-y-2"
              style={{ height: 250 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600 w-28 h-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="text-4xl font-bold">Account Verified!</h1>
              <p className="text-xl mt-5">
                Your account is now verified! Go ahead and login!
              </p>
              <div style={{ marginTop: 30 }}>
                <button className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <a href="/login" className="text-lg font-medium">
                    Login
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifySuccess;
