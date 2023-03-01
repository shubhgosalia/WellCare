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
    locality: "",
  });

  //getting the data from the server
  const getData = async () => {
    try {
      let newObj;
      if (filter.gender !== "None") newObj["gender"] = filter.gender;
      if (filter.locality !== "None") newObj["locality"] = filter.locality;
      if (filter.specialization !== "None")
        newObj["specialization"] = filter.specialization;

      let res = await axios.get("127.0.0.1:4000/doctor", {
        params: { newObj },
      });
      console.log("res : ", res);
    } catch (err) {
      console.log("error aa gya search mein : ", err);
    }
  };

  // Calling the getData function
  useEffect(() => {
    getData();
  }, []);

  const [showhide, setShowhide] = useState("");

  //updating the filters
  const updateFilters = (e) => {
    console.log("e : ", e.target.name);
    console.log("e : ", e.target.value);
    const getshow = e.target.value;
    setShowhide(getshow);
    setData((prevObj) => {
      return { ...prevObj, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="w-[85%] mt-5 mx-auto bg-primary-blue p-4 text-dark-100 rounded-lg flex justify-between">
      {/* Search Doctors/Experts */}
      <div className="w-[30%]">
        <label for="doctorSearch" className="block text-lg font-semibold">
          Search Physiotherapists:
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

      {/* Specialization */}
      <div className="">
        <label for="specialization" className="block text-lg font-semibold">
          Speciality:
        </label>
        <select
          aria-label="Default select example required"
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
      {/* Locality */}
      <div>
        <label for="locality" className="block text-lg font-semibold">
          Search Locality:
        </label>
        <select
          name="locality"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          <option value="None">None</option>
          <option value="andheri">Andheri</option>
          <option value="bandra">Bandra</option>
          <option value="borivali">Borivali</option>
          <option value="dahisar">Dahisar</option>
          <option value="goregaon">Goregaon</option>
          <option value="jogeshwari">Jogeshwari</option>
          <option value="kandivali">Kandivali</option>
          <option value="malad">Malad</option>
          <option value="mirabhayandar">Mira Bhayandar</option>
          <option value="santacruz">Santacruz</option>
          <option value="vileparle">Vile Parle</option>
          <option value="bhandup">Bhandup</option>
          <option value="ghatkopar">Ghatkopar</option>
          <option value="kurla">Kurla</option>
          <option value="mulund">Mulund</option>
          <option value="powai">Powai</option>
          <option value="thane">Thane</option>
          <option value="chembur">Chembur</option>
          <option value="matunga">Matunga</option>
          <option value="dadar">Dadar</option>
          <option value="kalbadevi">Kalbadevi</option>
          <option value="marinelines">Marine Lines</option>
          <option value="parel">Parel</option>
          <option value="mahalaxmi">Mahalaxmi</option>
          <option value="sion">Sion</option>
          <option value="worli">Worli</option>
          <option value="colaba">Colaba</option>
          <option value="navimumbai">Navi Mumbai</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
