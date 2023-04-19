import React, { useState } from "react";
import { Link } from "react-router-dom";

// importing Files
import Categories from "components/Home/Categories";

const Part1 = ({ profile }) => {
  // const [hour,setHour] = useState();

  return (
    <div className="flex flex-col space-y-5 w-full pt-5 pb-10 justify-between min-h-screen">
      {/*  */}
      <div className="flex flex-col space-y-6 w-full">
        {/* Title */}
        <div className="flex flex-row space-x-3 text-white text-4xl">
          <span className="my-auto">Good Morning,</span>
          <br />
          <span className="font-bold text-primary-blue">{profile.name}</span>
        </div>

        {/* Description */}
        <div className="text-dark-700 font-bold text-2xl">
<i>"For everyone, well-being is a journey. The secret is committing to that journey and taking those first steps with hope and belief in yourself."</i>
        </div>
        <div className="text-white text-2xl">
          <i>We, at WellCare are here to help you in your journey! And, we are thrilled to see you take the very first step! But, before you take the next step of exploring what we have at your disposal here at WellCare, do have a thorough look of our terms and conditions by clicking on the button below!</i> 
</div>
        {/* Button */}
        <div className="w-1/3 mx-auto button">
          {" "}
          <Link className="text-white px-1" to="/tac">
            See Terms and Conditions
          </Link>
        </div>
      </div>

      {/* Categories */}
      <Categories />
    </div>
  );
};

export default Part1;
