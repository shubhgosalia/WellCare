import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Filter = () => {
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
      if (filter.gender !== "None") newObj["gender"] = filter.gender;
      if (filter.city !== "None") newObj["city"] = filter.city;
      if (filter.specialization !== "None")
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

  //updating the filters
  const updateFilters = (e) => {
    console.log("e : ", e.target.name);
    console.log("e : ", e.target.value);
    setData((prevObj) => {
      return { ...prevObj, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="flex flex-row px-20">
      {/* form */}
      <div className="w-full bg-primary-blue p-4 text-dark-100 rounded-lg flex justify-between">
        {/* Search Doctors */}
        <div className="w-[30%]">
          <label for="doctorSearch" className="block text-lg font-semibold">
            Search Doctor:
          </label>
          <div className="">
            <input
              id="doctorSearch"
              name="text"
              type="text"
              autocomplete="text"
              required
              className="w-full rounded-lg p-2 text-lg"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Speciality */}
        <div className="">
          <label for="specialization" className="block text-lg font-semibold">
            Speciality:
          </label>
          <select
            name="specialization"
            id="state"
            className="rounded-lg p-2"
            onChange={updateFilters}
          >
            <option value="None">None</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatric">Pediatric</option>
            <option value="Sports">Sports</option>
            <option value="Women">Women</option>
            <option value="Vestibular">Vestibular</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label for="state" className="block text-lg font-semibold">
            Select Gender:
          </label>
          <select
            name="gender"
            id="state"
            className="rounded-lg p-2 w-full"
            onChange={updateFilters}
          >
            <option value="None">None</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label for="city" className="block text-lg font-semibold">
            Search City:
          </label>
          <select
            name="city"
            id="state"
            className="rounded-lg p-2"
            onChange={updateFilters}
          >
            <option value="None">None</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
