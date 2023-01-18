import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [showhide, setShowhide] = useState("");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      if (!userData.city) {
        return false;
      }
      return true;
    },
  }));

  return (
    <div className="flex flex-col ">
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Do you have a clinic?
        </label>
        <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="yesCheck"
            type="radio"
            value="true"
            name="have_clinic"
            onClick={handleshow}
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={handleChange}
            checked={userData.have_clinic === "true" ? true : false}
          />
          <label
            for="yesCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mt-3 pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="noCheck"
            type="radio"
            value="false"
            name="have_clinic"
            onClick={handleshow}
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 "
            onChange={handleChange}
            checked={userData.have_clinic === "false" ? true : false}
          />
          <label
            for="noCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            No
          </label>
        </div>
      </div>

      {showhide === "yes" && (
        <div className="mt-3 w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Address
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["clinic_address"] || ""}
              name="clinic_address"
              placeholder="Clinic address"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      )}

      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          City
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["city"] || ""}
            name="city"
            placeholder="City"
            type="text"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
});

export default Step3;
