import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";
import React, { forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef((props, ref) => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useImperativeHandle(ref, () => ({
    checkFields() {
      console.log("fields : ", userData);
      if (!userData.locality) {
        return false;
      }
      if (userData.have_clinic === "true" && !userData.address) {
        return false;
      }
      if (userData.have_clinic === "false" && !userData.address) {
        return false;
      }
      if (userData.have_clinic === "true" && !userData.c_name) {
        return false;
      }
      if (userData.have_clinic === "false" && !userData.c_name) {
        return false;
      }

      return true;
    },
  }));

  return (
    <div className="flex flex-col ">
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Do you have a Clinic/Gym?
        </label>
        <div className="flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="yesCheck"
            type="radio"
            value={"true"}
            name="have_clinic"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={handleChange}
            checked={userData.have_clinic === "true" ? true : false}
          />
          <label
            htmlFor="yesCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mt-3 pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <input
            id="noCheck"
            type="radio"
            value={"false"}
            name="have_clinic"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 "
            onChange={handleChange}
            checked={userData.have_clinic === "false" ? true : false}
          />
          <label
            htmlFor="noCheck"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-500"
          >
            No
          </label>
        </div>
      </div>
      {userData.have_clinic === "true" && (
        <div className="mt-3 w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Clinic/Gym Name
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["c_name"] || ""}
              name="c_name"
              placeholder="Clinic/Gym name"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>

          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Clinic/Gym Address (GMap Link)
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder="Clinic/Gym address"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      )}
      {userData.have_clinic === "false" && (
        <div className="mt-3 w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Hospital/Centre Name
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["c_name"] || ""}
              name="c_name"
              placeholder="Hospital/Centre name"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>

          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Hospital/Centre Address (GMap Link)
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              onChange={handleChange}
              value={userData["address"] || ""}
              name="address"
              placeholder="Hospital/Centre address"
              type="text"
              required
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>
      )}

      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Locality (In Mumbai)
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            aria-label="Default select example required"
            onChange={handleChange}
            name="locality"
          >
            <option>Select Locality</option>

            <option
              value="Andheri"
              selected={userData.locality === "Andheri" ? true : false}
            >
              Andheri
            </option>

            <option
              value="Bandra"
              selected={userData.locality === "Bandra" ? true : false}
            >
              Bandra
            </option>

            <option
              value="Borivali"
              selected={userData.locality === "Borivali" ? true : false}
            >
              Borivali
            </option>

            <option
              value="Dahisar"
              selected={userData.locality === "Dahisar" ? true : false}
            >
              Dahisar
            </option>

            <option
              value="Goregaon"
              selected={userData.locality === "Goregaon" ? true : false}
            >
              Goregaon
            </option>

            <option
              value="Jogeshwari"
              selected={userData.locality === "Jogeshwari" ? true : false}
            >
              Jogeshwari
            </option>

            <option
              value="Kandivali"
              selected={userData.locality === "Kandivali" ? true : false}
            >
              Kandivali
            </option>

            <option
              value="Malad"
              selected={userData.locality === "Malad" ? true : false}
            >
              Malad
            </option>

            <option
              value="Mira-Bhayandar"
              selected={userData.locality === "Mira-Bhayandar" ? true : false}
            >
              Mira-Bhayandar
            </option>

            <option
              value="Santacruz"
              selected={userData.locality === "Santacruz" ? true : false}
            >
              Santacruz
            </option>

            <option
              value="Vile Parle"
              selected={userData.locality === "Vile Parle" ? true : false}
            >
              Vile Parle
            </option>

            <option
              value="Bhandup"
              selected={userData.locality === "Bhandup" ? true : false}
            >
              Bhandup
            </option>

            <option
              value="Ghatkopar"
              selected={userData.locality === "Ghatkopar" ? true : false}
            >
              Ghatkopar
            </option>

            <option
              value="Kurla"
              selected={userData.locality === "Kurla" ? true : false}
            >
              Kurla
            </option>

            <option
              value="Mulund"
              selected={userData.locality === "Mulund" ? true : false}
            >
              Mulund
            </option>

            <option
              value="Powai"
              selected={userData.locality === "Powai" ? true : false}
            >
              Powai
            </option>

            <option
              value="Thane"
              selected={userData.locality === "Thane" ? true : false}
            >
              Thane
            </option>

            <option
              value="Chembur"
              selected={userData.locality === "Chembur" ? true : false}
            >
              Chembur
            </option>

            <option
              value="Matunga"
              selected={userData.locality === "Matunga" ? true : false}
            >
              Matunga
            </option>

            <option
              value="Dadar"
              selected={userData.locality === "Dadar" ? true : false}
            >
              Dadar
            </option>

            <option
              value="Kalbadevi"
              selected={userData.locality === "Kalbadevi" ? true : false}
            >
              Kalbadevi
            </option>

            <option
              value="Marine Lines"
              selected={userData.locality === "Marine Lines" ? true : false}
            >
              Marine Lines
            </option>

            <option
              value="Parel"
              selected={userData.locality === "Parel" ? true : false}
            >
              Parel
            </option>

            <option
              value="Mahalaxmi"
              selected={userData.locality === "Mahalaxmi" ? true : false}
            >
              Mahalaxmi
            </option>

            <option
              value="Sion"
              selected={userData.locality === "Sion" ? true : false}
            >
              Sion
            </option>

            <option
              value="Worli"
              selected={userData.locality === "Worli" ? true : false}
            >
              Worli
            </option>

            <option
              value="Colaba"
              selected={userData.locality === "Colaba" ? true : false}
            >
              Colaba
            </option>

            <option
              value="Navi Mumbai"
              selected={userData.locality === "Navi Mumbai" ? true : false}
            >
              Navi Mumbai
            </option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default Step3;
