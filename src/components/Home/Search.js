import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Search = () => {
  //doctor data
  let [data, setData] = useState([]);
  //filters
  let [filter, setFilter] = useState({
    gender: "",
    specialization: "",
    city: "",
  });

  //getting the data from the server
  const getData = async () => {
    try {
      let newObj;
      if (filter.gender !== "") newObj["gender"] = filter.gender;
      if (filter.city !== "") newObj["city"] = filter.city;
      if (filter.specialization !== "")
        newObj["specialization"] = filter.specialization;

      let res = await axios.get("127.0.0.1:4000/doctor", {
        params: { newObj },
      });
      console.log("res : ", res);
    } catch (err) {
      console.log("error aa gya search mein : ", err);
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Something went wrong! ):'
      // });
    }
  };

  // Calling the getData function
  useEffect(() => {
    getData();
  }, []);

  //updating thr filters
  const updateFilters = (e) => {
    console.log("e : ", e.target.name);
    console.log("e : ", e.target.value);
    setData((prevObj) => {
      return { ...prevObj, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      {/* Main Container */}
      <div className="bg-dark-100 text-white py-6 flex flex-col space-y-6">
        {/* Title */}
        <div className="">
          <div className="flex flex-col text-center space-y-3">
            <div className="font-medium text-5xl text-dark-900 ">
              Search Doctor, Make an appointment
            </div>

            <div className="text-dark-700 text-lg">
              Discover the best doctors, clinic & hospital the city nearest to
              you
            </div>
          </div>
        </div>

        {/* form and results */}
        <div className="flex flex-row px-20">
          {/* form */}
          <div className="w-1/3 bg-blue-600 p-4 text-dark-100 rounded flex flex-col space-y-5">
            {/* Search Doctors */}
            <div>
              <label
                for="doctorSearch"
                className="block text-base font-medium "
              >
                Search Doctor:
              </label>
              <div className="mt-1">
                <input
                  id="doctorSearch"
                  name="text"
                  type="text"
                  autocomplete="text"
                  required
                  className="w-full rounded p-2 text-lg"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Speciality */}
            <div>
              <label
                for="specialization"
                className="block text-base font-medium "
              >
                Speciality:
              </label>
              <select
                name="specialization"
                id="state"
                className="rounded p-2"
                onChange={updateFilters}
              >
                <option value="">Please select</option>
                <option value="small">Yoga Training</option>
                <option value="medium">Gym Training</option>
                <option value="large">Nutritionist Consulting</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label for="state" className="block text-base font-medium ">
                Select Gender:
              </label>
              <select
                name="gender"
                id="state"
                className="rounded p-2 w-full"
                onChange={updateFilters}
              >
                <option value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label for="city" className="block text-base font-medium ">
                Search City:
              </label>
              <select
                name="city"
                id="state"
                className="rounded p-2"
                onChange={updateFilters}
              >
                <option value="">Please select</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
              </select>
            </div>
          </div>

          {/* results */}
          <div className="w-2/3"></div>
        </div>
      </div>
    </>
  );
};

export default Search;
