import React from "react";
import Navbar from "components/Utils/Navbar";
import Heading from "components/PaymentGateway/Heading";
import BoldLicenceIcon from "components/Icons/Bold/licence";
import BoldLockIcon from "components/Icons/Bold/lock";

const Gateway = () => {
  // const navigate = useNavigate();

  // let [data, setData] = useState({
  //   name: "",
  //   cardNumber: "",
  //   email: "",
  //   securityCode: "",
  //   expiryDate: "",
  //   checked: false,
  // });

  // const [load, setLoad] = useState(false);

  // const submit = async (event) => {
  //   try {
  //     if (!data.checked) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Please check the checkbox..",
  //       });
  //       return;
  //     }
  // event.preventDefault();
  // let postData = {
  //   name: data.name,
  //   cardNumber: data.cardNumber,
  //   email: data.email,
  //   securityCode: data.securityCode,
  //   expiryDate: data.expiryDate,
  // };
  // setLoad(true);
  // let res = await axios.post(
  //   "http://127.0.0.1:4000/patient/payment",
  //   postData
  // );
  // console.log("RESULT : ", res);
  // setLoad(false);
  // setData({
  //   name: "",
  //   cardNumber: "",
  //   email: "",
  //   securityCode: "",
  //   expiryDate: "",
  // });
  // if (res.data.success === true) {
  //   Swal.fire({
  //     icon: "success",
  //     title: res.data.message,
  //   });
  // }
  //   } catch (err) {
  //     setLoad(false);
  //     console.log("err : ", err);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: err.response.data.error
  //         ? err.response.data.error
  //         : "Something went wrong!",
  //     });
  //   }
  // };

  // const updateInfo = (event) => {
  //   const { name, value } = event.target;
  //   //setting the data
  //   setData((prevData) => {
  //     return { ...prevData, [name]: value };
  //   });
  // };

  return (
    <div className="w-full flex flex-row font-body-primary">
      {/* 1. Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>
      <div className="w-[84%]">
        <div className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 min-h-screen text-white py-6 flex flex-col space-y-6">
          <Heading />
          <div
            className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
            style={{ maxWidth: 600, marginTop: 50 }}
          >
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <BoldLicenceIcon size="30" color="#ffffff" />
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-center font-bold text-xl uppercase">
                Amount to Pay : ₹500.00
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label
                  for="type1"
                  className="flex items-center cursor-pointer"
                ></label>
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                />
              </div>
            </div>
            <div className="mb-3 mt-5">
              <label for="card_name" className="font-bold text-sm mb-2 ml-1">
                Name on card
              </label>
              <div>
                <input
                  id="card_name"
                  name="name"
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Name on Card"
                  type="text"
                  // onChange={updateInfo}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="card_no" className="font-bold text-sm mb-2 ml-1">
                Card number
              </label>
              <div>
                <input
                  id="card_no"
                  name="cardNumber"
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="number"
                  // onChange={updateInfo}
                />
              </div>
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label for="exp_date" className="font-bold text-sm mb-2 ml-1">
                  Expiration date
                </label>
                <div>
                  <input
                    id="exp_date"
                    name="expiryDate"
                    type="month"
                    placeholder="MM/YY"
                    // onChange={updateInfo}
                    className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">
                  Security code
                </label>
                <div>
                  <input
                    className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="***"
                    name="securityCode"
                    type="password"
                    // onChange={updateInfo}
                  />
                </div>
              </div>
            </div>

            <div className="mb-10">
              <label for="email" className="font-bold text-sm mb-2 ml-1">
                Email Address
              </label>
              <div>
                <input
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your email"
                  type="email"
                  // onChange={updateInfo}
                />
              </div>
            </div>
            <div>
              <button
                className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                // disabled={load ? true : false}
                // onClick={submit}
              >
                <a href="/paymentSuccess">
                <BoldLockIcon/> PAY NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
