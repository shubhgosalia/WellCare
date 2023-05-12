import React, { useState } from "react";
import Heading from "components/NutriSearch/Heading";
import Filter from "components/NutriSearch/Filter";
import DoctorResult from "components/NutriSearch/Result";
import Pagination from "components/PhysioSearch/Pagination";
import Swal from "sweetalert2";
import axios from "axios";

const NutriSearch = () => {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    doctors: [],
    more: false,
  });
  // const [page,setPage] = useState(1);

  const filterDocs = async (data) => {
    console.log("data : ", data);
    try {
      setLoad(true);
      let res = await axios.get("http://localhost:4000/doctor", {
        params: {
          ratings: data.ratings,
          fee: data.fee,
          experience: data.experience,
          locality: data.locality,
          page: 1,
          category: "Nutritionist",
        },
        withCredentials: true,
      });
      console.log("resp in filters is ", res.data.data);
      setData(res.data.data);
      setLoad(false);
    } catch (err) {
      console.log("errorr : ", err);
      setLoad(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.error,
      });
    }
  };

  return (
    <>
      {/* Main Container */}
      <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 text-white py-6 flex flex-col space-y-6 h-full">
        <div className="top-0 w-[100%] mx-auto">
          {/* Title */}
          <Heading />

          {/* form and results */}
          <Filter method={filterDocs} />
        </div>

        {/* Results */}
        <div
          className="w-[85%] h-full mx-auto items-center justify-start overflow-x-auto"
          style={{ marginTop: -5 }}
        >
          {load ? (
            <div className="mx-auto my-10 text-3xl font-bold">Loading....</div>
          ) : data.doctors.length === 0 ? (
            <div className="mx-auto my-10 text-3xl font-bold">
              Sorry, no results found!
            </div>
          ) : (
            <div className="grid grid-cols-3 grid-flow-col gap-4 my-10">
              {data.doctors.map((element, i) => (
                <DoctorResult element={element} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NutriSearch;
