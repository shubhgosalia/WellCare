import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const Step2 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    console.log("val : ", e.target);
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [showhide, setShowhide] = useState("");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
    handleChange(e);
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      if (!userData.email) {
        return false;
      }
      if (!userData.phoneNumber) {
        return false;
      }
      return true;
    },
  }));

  return (
    <div className="flex flex-col ">
      <div className="mt-5 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Category
        </label>
        <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1 ">
          <select
            aria-label="Default select example required"
            onChange={(e) => handleshow(e)}
          >
            <option
              value="Physiotherapist"
              selected={userData.category === "Physiotherapist" ? true : false}
            >
              Physiotherapist
            </option>
            <option
              value="Nutritionist"
              selected={userData.category === "Nutritionist" ? true : false}
            >
              Nutritionist
            </option>
            <option
              value="Yoga Trainer"
              selected={userData.category === "Yoga Trainer" ? true : false}
            >
              Yoga Trainer
            </option>
          </select>
        </div>
      </div>
      {showhide === "Physiotherapist" && (
        <div className="mt-5 w-full flex-1">
          <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Specialization
          </label>
          <div className="my-2 flex rounded-lg border border-gray-200 bg-white p-1 ">
            <select aria-label="Default select example required">
              <option selected>Which Physiotherapist?</option>
              <option value="1">Orthopedic</option>
              <option value="2">Pediatric</option>
              <option value="3">Sports</option>
              <option value="4">Women</option>
              <option value="5">Vestibular</option>
            </select>
          </div>
        </div>
      )}

      <div className="mt-3 w-full flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Email
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="email"
            type="email"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="mt-3 w-full flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Phone No.
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["phoneNumber"] || ""}
            name="phoneNumber"
            placeholder="Phone No."
            type="text"
            pattern="[0-9]*"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
});

export default Step2;
