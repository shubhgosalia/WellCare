import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { forwardRef, useImperativeHandle } from "react";

const Step4 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      if (!userData.licenseNumber) {
        return false;
      }
      if (!userData.years_Of_Experience || (Number(userData.age) < Number(userData.years_Of_Experience))) {
        return false;
      }
      if (!userData.fees) {
        return false;
      }
      return true;
    }
  }));
  return (
    <div className="flex flex-col ">
      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          License No.
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["licenseNumber"] || ""}
            name="licenseNumber"
            placeholder="License No."
            type="text"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Experience (in yrs)
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["years_Of_Experience"] || ""}
            name="years_Of_Experience"
            placeholder="0"
            type="number"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {(Number(userData.age) < Number(userData.years_Of_Experience)) && <p className="text-red-500 text-xs">Experience cannot be greater than age!</p>}
      </div>

      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Fee per appointment/session
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["fees"] || ""}
            name="fees"
            placeholder="₹ 00.00"
            type="number"
            required
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
});

export default Step4;
