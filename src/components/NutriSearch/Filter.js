import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Filter = ({method}) => {
  //doctor data
  let [data, setData] = useState([]);
  //filters
  let [filter, setFilter] = useState({
    ratings: "-1",
    fee: "-1",
    experience: "-1",
    locality: "Andheri",
  });

  useEffect(()=>{
    method(filter);
 },[]);

 //updating the filters
 const updateFilters = (e) => {
   setFilter((prevObj) => {
     return { ...prevObj, [e.target.name]: e.target.value };
   });
 };

 const callMethod = ()=> {
   method(filter);
 }


  return (
    <div className="w-[85%] mt-5 mx-auto bg-primary-blue p-4 text-dark-100 rounded-lg flex justify-between">
      {/* Search Nutritionists */}
      {/* <div className="w-[25%]">
        <label for="doctorSearch" className="block text-lg font-semibold">
          Search Nutritionists:
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
      </div> */}

      {/* Fee */}
      <div className="">
        <label for="fee" className="block text-lg font-semibold">
          Fee:
        </label>
        <select
          aria-label="Default select example required"
          name="fee"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Experience (in yrs) */}
      <div className="">
        <label for="experience" className="block text-lg font-semibold">
          Exp (in yrs):
        </label>
        <select
          aria-label="Default select example required"
          name="experience"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Rating */}
      <div>
        <label htmlFor="state" className="block text-lg font-semibold">
          Rating:
        </label>
        <select
          name="rating"
          id="state"
          className="rounded-lg p-2 w-full"
          onChange={updateFilters}
        >
          {/* <option value="None">None</option> */}
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
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
          <option value="Andheri">Andheri</option>
          <option value="Bandra">Bandra</option>
          <option value="Borivali">Borivali</option>
          <option value="Dahisar">Dahisar</option>
          <option value="Goregaon">Goregaon</option>
          <option value="Jogeshwari">Jogeshwari</option>
          <option value="Kandivali">Kandivali</option>
          <option value="Malad">Malad</option>
          <option value="Mirabhayandar">Mira Bhayandar</option>
          <option value="Santacruz">Santacruz</option>
          <option value="Vileparle">Vile Parle</option>
          <option value="Bhandup">Bhandup</option>
          <option value="Ghatkopar">Ghatkopar</option>
          <option value="Kurla">Kurla</option>
          <option value="Mulund">Mulund</option>
          <option value="Powai">Powai</option>
          <option value="Thane">Thane</option>
          <option value="Chembur">Chembur</option>
          <option value="Matunga">Matunga</option>
          <option value="Dadar">Dadar</option>
          <option value="Kalbadevi">Kalbadevi</option>
          <option value="Marinelines">Marine Lines</option>
          <option value="Parel">Parel</option>
          <option value="Mahalaxmi">Mahalaxmi</option>
          <option value="Sion">Sion</option>
          <option value="Worli">Worli</option>
          <option value="Colaba">Colaba</option>
          <option value="Navimumbai">Navi Mumbai</option>
        </select>
      </div>
      <button
        type="button"
        className="button bg-dark-100 hover:bg-dark-200 py-2 text-lg h-14 my-auto"
        onClick={callMethod}
      >
        Apply Filter
      </button>

    </div>
  );
};

export default Filter;
