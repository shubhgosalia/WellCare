import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { forwardRef, useImperativeHandle } from "react";

const Step2 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      if (!userData.email) {
        return false;
      }
      if (!userData.phoneNumber) {
        return false;
      }
      if (!userData.category) {
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
            onChange={handleChange}
            name="category"
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
              value="Gym Trainer"
              selected={userData.category === "Gym Trainer" ? true : false}
            >
              Gym Trainer
            </option>
          </select>
        </div>
      </div>
      {userData.category === "Physiotherapist" && (
        <div className="mt-5 w-full flex-1">
          <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Specialization
          </label>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1 ">
            <select
              aria-label="Default select example required"
              name="specialization"
              onChange={handleChange}
            >
              <option>Select Specialization</option>
              <option
                value="Orthopedic"
                selected={
                  userData.specialization === "Orthopedic" ? true : false
                }
              >
                Orthopedic
              </option>
              <option
                value="Pediatric"
                selected={
                  userData.specialization === "Pediatric" ? true : false
                }
              >
                Pediatric
              </option>
              <option
                value="Sports"
                selected={userData.specialization === "Sports" ? true : false}
              >
                Sports
              </option>
              <option
                value="Women"
                selected={userData.specialization === "Women" ? true : false}
              >
                Women
              </option>
              <option
                value="Vestibular"
                selected={
                  userData.specialization === "Vestibular" ? true : false
                }
              >
                Vestibular
              </option>
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
