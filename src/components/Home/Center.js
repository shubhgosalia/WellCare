import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "context/UserContext";
import BoldFullStarIcon from "components/Icons/Bold/fullStar";
import BoldVerifiedIcon from "components/Icons/Bold/verified";

// importing Files
import Categories from "components/Home/Categories";

const Part1 = ({ profile }) => {
  // const [hour,setHour] = useState();
  // const { isLoggedIn, profile, setLoginStatus } = useContext(UserContext);

  return (
    <div className="flex flex-col space-y-5 w-full pt-5 pb-10 justify-between min-h-screen">
      {/*  */}
      <div className="flex flex-col space-y-6 w-full">
        {/* Title */}
        <div className="flex flex-row space-x-3 text-white text-4xl">
          <span className="my-auto">Good Day,</span>
          <br />
          <span className="font-bold text-primary-blue">{profile.name}</span>
        </div>

        {/* Description */}
        <div className="text-dark-700 font-bold text-2xl">
          <i>
            "For everyone, well-being is a journey. The secret is committing to
            that journey and taking those first steps with hope and belief in
            yourself."
          </i>
        </div>

        {/*  */}
        <div className="text-white text-2xl">
          {profile.type === "Patient" ? (
            <i>
              We, at WellCare are here to help you in your journey! And, we are
              thrilled to see you take the very first step! But, before you take
              the next step of exploring what we have at your disposal here at
              WellCare, do have a thorough look of our terms and conditions by
              clicking on the button below!
            </i>
          ) : (
            <i>
              We, at Wellcare are glad that you have taken an important step of
              being one among the flagbearers of ensuring the well-being of
              people. Being a verified expert on our portal, we hope that you
              make a difference by guiding our users towards a better health!
              Before you start with your journey, do have a thorough look of our
              terms and conditions by clicking on the button below!
            </i>
          )}
        </div>

        {/* Button */}
        <div className="w-1/3 mx-auto button">
          <Link className="text-white px-1" to="/tac">
            See Terms and Conditions
          </Link>
        </div>
      </div>

      {/* Categories */}
      {profile.type === "Patient" ? (
        <Categories />
      ) : (
        // Rating and Medically verified cards
        <>
          <div className="text-3xl text-center text-dark-700 font-semibold">
            Here is something for you to know!
          </div>
          <div className="grid lg:gap-x-8 lg:grid-cols-2">
            <div className="mb-12 lg:mb-0 ">
              <div
                className="rounded-lg shadow-lg block h-full bg-white ml-20"
                style={{ width: 420 }}
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                    <BoldFullStarIcon size="30" color="#000000" />
                  </div>
                </div>
                <div className="p-4">
                  {
                    <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                      {profile.rating} Stars
                    </h3>
                  }

                  <h5 className="text-2xl font-medium mb-4 text-center text-gray-700">
                    Your Rating
                  </h5>
                </div>
              </div>
            </div>

            <div className="mb-12 lg:mb-0 ">
              <div
                className="rounded-lg shadow-lg block h-full bg-white"
                style={{ width: 420 }}
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block -mt-8">
                    <BoldVerifiedIcon size="30" color="#000000" />
                  </div>
                </div>
                <div className="p-4">
                  {
                    <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
                      {/* {profile.rating} Stars */}
                      Medically Verified
                    </h3>
                  }

                  <h5 className="text-2xl font-medium mb-4 text-center text-gray-700">
                    Your Status
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Part1;
