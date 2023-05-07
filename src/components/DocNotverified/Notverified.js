import React, { useEffect, useState } from "react";

const Notverified = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white  flex flex-col space-y-6">
        <div className="flex items-center justify-center h-screen">
          <div className="p-8 rounded shadow-lg ring ring-red-600/50">
            <div
              className="flex flex-col items-center space-y-2"
              style={{ height: 250 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-red-800 w-28 h-28"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1 className="text-4xl font-bold">OOPS!</h1>
              <p className="text-xl mt-5">
                You are not verified yet by our admin! You will receive a mail
                once verified!
              </p>
              <div style={{ marginTop: 30 }}>
                <button className="inline-flex items-center px-4 py-2 text-white bg-red-600 border border-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring">
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

export default Notverified;
