import React, { useEffect, useState } from "react";

const Filter = ({ method }) => {
  //filters
  let [filter, setFilter] = useState({
    ratings: "-1",
    specialization: "Orthopedic",
    fee: "None",
    experience: "None",
    locality: "Andheri",
  });

  useEffect(() => {
    method(filter);
  }, []);

  //updating the filters
  const updateFilters = (e) => {
    setFilter((prevObj) => {
      if (e.target.name === "ratings") {
        return {
          ...prevObj,
          [e.target.name]: e.target.value,
          fee: "None",
          experience: "None",
        };
      } else if (e.target.name === "fee") {
        return {
          ...prevObj,
          [e.target.name]: e.target.value,
          ratings: "None",
          experience: "None",
        };
      } else if (e.target.name === "experience") {
        return {
          ...prevObj,
          [e.target.name]: e.target.value,
          ratings: "None",
          fee: "None",
        };
      } else {
        return { ...prevObj, [e.target.name]: e.target.value };
      }
    });
  };

  const callMethod = () => {
    method(filter);
  };

  return (
    <div className="w-[85%] mt-5 mx-auto bg-primary-blue p-4 text-dark-100 rounded-lg flex justify-between">
      {/* Specialization */}
      <div className="">
        <label htmlFor="specialization" className="block text-lg font-semibold">
          Speciality:
        </label>
        <select
          aria-label="Default select example required"
          name="specialization"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
          value={filter.specialization}
        >
          {/* <option value="None">None</option> */}
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatric">Pediatric</option>
          <option value="Sports">Sports</option>
          <option value="Women">Women</option>
          <option value="Vestibular">Vestibular</option>
        </select>
      </div>

      {/* Fee */}
      <div className="">
        <label htmlFor="fee" className="block text-lg font-semibold">
          Fee:
        </label>
        <select
          aria-label="Default select example required"
          name="fee"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
          value={filter.fee}
        >
          <option value="None">None</option>
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
        </select>
      </div>

      {/* Experience (in yrs) */}
      <div className="">
        <label htmlFor="experience" className="block text-lg font-semibold">
          Exp (in yrs):
        </label>
        <select
          aria-label="Default select example required"
          name="experience"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
          value={filter.experience}
        >
          <option value="None">None</option>
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
          name="ratings"
          id="state"
          className="rounded-lg p-2 w-full"
          onChange={updateFilters}
          value={filter.ratings}
        >
          <option value="-1">High to Low</option>
          <option value="1">Low to High</option>
          <option value="None">None</option>
        </select>
      </div>

      {/* Locality */}
      <div>
        <label htmlFor="locality" className="block text-lg font-semibold">
          Locality:
        </label>
        <select
          name="locality"
          id="state"
          className="rounded-lg p-2"
          onChange={updateFilters}
          value={filter.locality}
        >
          {/* <option value="None">None</option> */}
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
