import React, { useState, useEffect } from "react";
import AdminNav from "components/AdminDashboard/AdminNav";
import QueryHeading from "components/AdminDashboard/QueryHeading";
import axios from "axios";
import Query from "./Query";
import Swal from "sweetalert2";
const GetQuery = () => {
  const [queries, setQueries] = useState([]);
  const [load, setLoad] = useState(false);
  const fetchQueries = async () => {
    try {
      setLoad(true);
      const res = await axios.get("http://localhost:4000/common/getQuery", {
        withCredentials: true,
      });
      console.log("resp  : ", res.data.data);
      setLoad(false);
      setQueries(res.data.data);
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
    fetchQueries();
  }, []);

  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <AdminNav />
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

                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Subject
                  </th>
                  <th className="font-semibold text-md uppercase px-6 py-4">
                    Message
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {load ? (
                  <p className="text-center text-2xl p-5">Loading...</p>
                ) : queries.length !== 0 ? (
                  queries.map((item) => {
                    return <Query key={item._id} info={item} />;
                  })
                ) : (
                  <div className="p-5 text-2xl">No Queries ....</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuery;
