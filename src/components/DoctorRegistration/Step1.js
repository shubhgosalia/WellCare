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
      <div className="mt-3 mx-2 w-full flex-1">
        <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Gender
        </label>
        <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            id="bordered-radio-1"
            type="radio"
            value={userData["male"] || ""}
            name="bordered-radio"
            required
            class="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300"
          />
          <label
            for="bordered-radio-1"
            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
        </div>
        <div class="flex items-center mt-3 pl-4 rounded border border-gray-200 dark:border-gray-700">
          <input
            checked
            id="bordered-radio-2"
            type="radio"
            value={userData["female"] || ""}
            name="bordered-radio"
            required
            class="w-4 h-4 text-primary-blue bg-gray-100 "
          />
          <label
            for="bordered-radio-2"
            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
        <div className="mt-5 w-full flex-1">
          <label className="h-6 text-xs font-bold uppercase leading-8 text-gray-500">
            Category
          </label>
          <div className="my-2 flex rounded border border-gray-200 bg-white p-1 ">
            <select aria-label="Default select example required">
              <option selected>Choose</option>
              <option value="1">Physiotherapist</option>
              <option value="2">Nutritionist</option>
              <option value="3">Yoga Trainer</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
