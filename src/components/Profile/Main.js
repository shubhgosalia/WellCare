import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
// bold icons
import BoldVerifiedIcon from "components/Icons/Bold/verified";
import BoldMailIcon from "components/Icons/Bold/mail";
import BoldLocationIcon from "components/Icons/Bold/location";
import BoldExpierenceIcon from "components/Icons/Bold/expierence";
import BoldMoneyIcon from "components/Icons/Bold/money";
import BoldLicenceIcon from "components/Icons/Bold/licence";
import LightUserNameIcon from "components/Icons/Light/userName";

const Main = (props) => {
  const navigate = useNavigate();
  
  const [date, SetDate] = useState("TODAY");
  // YearsOf experience email address
  const handleBookAppointment = () => {
    navigate("/slotBook",{
      state: {
        date: `${date}`,
      },
    });
  };
  return (
    <div className="flex text-white p-8">
      <div className="w-[80%] mx-auto flex flex-col space-y-6">
        {/* expierence */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldExpierenceIcon size="30" color="#ffffff" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">
            {props.data.years_Of_Experience} years of Experience
          </div>
        </div>

        {/* medical registration verified */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldVerifiedIcon size="30" color="#39FF14" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">Medical registration verified</div>
        </div>

        {/* Clinic/center address */}
        <div className="flex space-x-3">
          <div>
            <BoldLocationIcon size="30" color="#FF0000" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">
            Wellness Clinic , {props.data.locality}
          </div>
        </div>

        {/* fees */}
        <div className="flex space-x-3 cursor-pointer">
          <div className="my-auto">
            <BoldMoneyIcon size="30" color="#39FF14" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">₹{props.data.fees}/session</div>
        </div>

        {/* License no. */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <BoldLicenceIcon size="30" color="#ffffff" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">
            License ID : {props.data.licenseNumber}
          </div>
        </div>

        {/* Phone no. */}
        <div className="flex space-x-3 cursor-pointer">
          <div>
            <LightUserNameIcon size="30" color="#ffffff" />
          </div>

          {/*  */}
          <div className="text-lg font-bold">
            Phone no. : +91 {props.data.phoneNumber}
          </div>
        </div>

        <input
          type="date"
          style={{ height: 40, width: 200, padding: 10 }}
          min={new Date().toISOString().split("T")[0]}
          defaultValue={new Date().toISOString().substring(0, 10)}
          onChange={(e) => SetDate(e.target.value)}
          required
        />
        {/* button */}
        <div className="button" onClick={handleBookAppointment}>
          Book Appointment
        </div>
      </div>
    </div>
  );
};

export default Main;
