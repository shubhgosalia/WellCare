import React from "react";

const Search = () => {
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
              <label for="speciality" className="block text-base font-medium ">
                Speciality:
              </label>
              <select name="speciality" id="state" className="rounded p-2">
                <option value="">Please select</option>
                <option value="small">Yoga Training</option>
                <option value="medium">Gym Training</option>
                <option value="large">Nutritionist Consulting</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label for="state" className="block text-base font-medium ">
                Select State:
              </label>
              <select name="state" id="state" className="rounded p-2 w-full">
                <option value="">Please select</option>
                <option value="small">Maharashtra</option>
                <option value="medium">Gujarat</option>
                <option value="large">Goa</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label for="city" className="block text-base font-medium ">
                Search City:
              </label>
              <select name="city" id="state" className="rounded p-2">
                <option value="">Please select</option>
                <option value="small">Mumbai</option>
                <option value="medium">Nagpur</option>
                <option value="large">Nashik</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label for="city" className="block text-base font-medium ">
                Search City:
              </label>
              <select name="city" id="state" className="rounded p-2 w-2/3">
                <option value="">Please select</option>
                <option value="small">Mumbai</option>
                <option value="medium">Nagpur</option>
                <option value="large">Nashik</option>
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
