import { useStepperContext } from "../../contexts/StepperContext";

export default function Step3() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="mt-3 w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Fee per appointment/session
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["fee"] || ""}
            name="fee"
            placeholder="₹ 00.00"
            type="number"
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
            value={userData["exp"] || ""}
            name="exp"
            placeholder="0"
            type="number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Upload Profile Pic
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["prof_pic"] || ""}
            name="prof_pic"
            // placeholder="Your Password"
            type="file"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mt-3 mx-2 w-full flex-1">
        <label className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Create Password
        </label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["create_password"] || ""}
            name="create_password"
            placeholder="••••••••"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
