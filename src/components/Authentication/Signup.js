import React from "react";

const Signup = () => {
  return (
    <>
      {/* main container */}
      <div className="bg-dark-100  w-full  h-screen">
        <div className="flex p-5 space-x-5 h-full text-white">
          {/* leftsidebar */}
          <div className="flex flex-col w-1/3 bg-blue-600  rounded-lg px-14 py-8 justify-between ">
            {/* heading */}
            <div className="flex-col space-y-0 text-center">
              <div className="font-black text-4xl">WellCare</div>
              <div className="text-xs">Must for HealthCare</div>
            </div>

            {/* Center Tagline */}
            <div className="flex flex-col space-y-5">
              <div className="font-bold text-5xl leading-10">
                Start your journey with us.
              </div>
              <div className="text-base leading-7 font-thin">
                Discover the world's best community of freelancers and business
                owners
              </div>
            </div>

            {/* Container 3 */}
            <div className="flex flex-col rounded-lg bg-blue-700 p-5">
              {/* Message */}
              <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eveniet nihil ipsum, minus saepe et in consequuntur ab unde illo
                error est molestiae
              </div>

              {/*  */}
              <div></div>
            </div>
          </div>

          {/* right sidebar */}
          <div className="w-2/3 h-full text-black p-5">
            {/* logo */}
            <div className="flex-col space-y-0 text-center ">
              <div className="font-black text-4xl text-blue-700">WellCare</div>
              <div className="text-xs text-white">Must for HealthCare</div>
            </div>

            {/* form */}
            <div className=" py-8 px-6 shadow rounded-lg sm:px-10">
              <form className="mb-0 space-y-6" action="#" method="POST">
                {/*  */}

                {/* email */}
                <div>
                  <label
                    for="email"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="w-full rounded p-2 text-lg"
                    />
                  </div>
                </div>

                {/* password */}
                <div>
                  <label
                    for="password"
                    className="block text-sm font-medium text-gray-200"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      className="w-full rounded p-2 text-lg"
                    />
                  </div>
                </div>

                {/* t&c */}
                <div className="flex items-center">
                  <input
                    id="terms-and-privacy"
                    name="terms-and-privacy"
                    type="checkbox"
                    className=""
                  />
                  <label
                    for="terms-and-privacy"
                    className="ml-2 block text-sm text-gray-200"
                  >
                    I agree to the
                    <a
                      href="/"
                      className="text-indigo-600 hover:text-indigo-500 px-1"
                    >
                      Terms
                    </a>
                    and
                    <a
                      href="/"
                      className="text-indigo-600 hover:text-indigo-500 px-1"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                {/* Sign in Button */}
                <div>
                  <button
                    type="submit"
                    className="w-1/3 flex justify-center py-3 rounded-md text-md font-medium text-white bg-blue-700 hover:bg-blue-800"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
