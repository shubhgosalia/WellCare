import React, { useEffect, useState } from "react";
import Heading from "components/TopRated/Heading";
import Navbar from "components/Utils/Navbar";
import TopPhysio from "components/TopRated/TopPhysio";
import TopNutri from "components/TopRated/TopNutri";
import TopGym from "components/TopRated/TopGym";
import axios from "axios";
import Swal from "sweetalert2";

const TopRated = () => {
  const [docs, setDocs] = useState({
    physio: [],
    nutri: [],
    gym: [],
  });
  const [load, setLoad] = useState(false);

  const fetchTopRatedDoctors = async () => {
    try {
      setLoad(true);
      let res = await axios.get(
        "http://localhost:4000/patient/getTopRatedDocs",
        {
          withCredentials: true,
        }
      );
      console.log("resp  : ", res.data.data);
      setLoad(false);
      setDocs(res.data.data);
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
    fetchTopRatedDoctors();
  }, []);

  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] min-h-screen">
        <Navbar />
      </div>

      <div className="w-[84%]">
        {/* Main Container */}
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          <div className="top-0 w-[84%] mx-auto">
            {/* Title */}
            <Heading />
          </div>

          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-10 border-l-0 border-r-0"
            style={{ marginTop: 40, fontSize: 22 }}
          >
            Top Rated Physiotherapists
          </div>

          {/* Top Rated Physios */}
          <div className="w-[85%] mx-auto h-full flex items-center justify-start gap-6 relative">
            {load ? (
              <p className="text-center">Loading...</p>
            ) : docs["physio"].length !== 0 ? (
              docs["physio"].map((item, i) => {
                return (
                  <div key={i}>
                    <TopPhysio info={item} />
                  </div>
                );
              })
            ) : (
              <p>No physiotherapists available right now!</p>
            )}
          </div>
          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-16 border-l-0 border-r-0"
            style={{ marginTop: 75, fontSize: 22 }}
          >
            Top Rated Nutritionists
          </div>

          {/* Top rated Nutritionists */}
          <div
            className="w-[85%] mx-auto h-full flex items-center justify-start overflow-x-auto gap-6 relative"
            style={{ marginTop: -22 }}
          >
            {load ? (
              <p className="text-center">Loading...</p>
            ) : docs["nutri"].length !== 0 ? (
              docs["nutri"].map((item, i) => {
                return (
                  <div key={i}>
                    <TopNutri info={item} />
                  </div>
                );
              })
            ) : (
              <p>No nutritionists available right now!</p>
            )}
          </div>

          <div
            className="w-[25%] mx-auto border border-solid border-blueGray-100 py-3 pl-16 border-l-0 border-r-0"
            style={{ marginTop: 75, fontSize: 22 }}
          >
            Top Rated Gym Trainers
          </div>

          {/* Top rated Gym Trainers */}
          <div
            className="w-[85%] mx-auto h-full flex items-center justify-start overflow-x-auto gap-6 relative"
            style={{ marginTop: -22 }}
          >
            {load ? (
              <p className="text-center">Loading...</p>
            ) : docs["gym"].length !== 0 ? (
              docs["gym"].map((item, i) => {
                return (
                  <div key={i}>
                    <TopGym info={item} />
                  </div>
                );
              })
            ) : (
              <p>No gym trainers available right now!</p>
            )}
          </div>

          {/* <div className="mx-auto flex">
            <Pagination />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
