import { useStepperContext } from "components/DoctorRegistration/contexts/StepperContext";

export default function Step1() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Full Name
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["f_name"] || ""}
            name="f_name"
            placeholder="Full Name"
            type="text"
            required
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mt-3 mx-2 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Gender
        </label>
        <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value={userData["male"] || ""}
            name="bordered-radio"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
          />
          <label
            for="bordered-radio-1"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div className="flex items-center mt-2 pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            id="bordered-radio-2"
            type="radio"
            value={userData["female"] || ""}
            name="bordered-radio"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 "
          />
          <label
            for="bordered-radio-2"
            className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>

        <div className="mt-3 w-full flex-1">
          <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Age
          </label>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
            <input
              onChange={handleChange}
              value={userData["age"] || ""}
              name="age"
              placeholder="Age"
              type="number"
              required
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
