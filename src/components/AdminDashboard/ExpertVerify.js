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
        withCredentials: true,
      });
      console.log("resp  : ", res.data.data.doctors);
      setLoad(false);
      setExperts(res.data.data.doctors);
    } catch (err) {
      console.log("error : ", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  const verifyDoctor = async (_id) => {
    try {
      setLoad(true);
      let res = await axios.patch(
        `http://localhost:4000/admin/verifyDoctor/${_id}`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Expert Verified!",
          text: "This expert can now be seen on the WellCare Portal!",
        });
        fetchExperts();
      }
      setLoad(false);
    } catch (err) {
      setLoad(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
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
                    Name
                  </th>
                  <th className="font-semibold text-md uppercase px-8 py-4">
                    Category
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4 text-center">
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
                {load ? (
                  <div className="text-center text-2xl p-5">Loading...</div>
                ) : experts.length !== 0 ? (
                  experts.map((item) => {
                    return (
                      <Expert
                        key={item._id}
                        info={item}
                        verifyDoctor={verifyDoctor}
                      />
                    );
                  })
                ) : (
                  <div className="text-center p-5 text-2xl">
                    All Experts are verified...
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertVerify;
