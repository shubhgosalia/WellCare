import React from "react";
import Navbar from "components/Utils/Navbar";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>

      <div className="w-[84%] flex flex-col space-y-10">
        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32  text-white">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently asked questions
                </h2>

                <details className="w-full border rounded-lg" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Ex orci laoreet egestas sapien magna egestas scelerisque?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                    nullam taciti at adipiscing est.{" "}
                  </p>
                </details>
              </div>

              <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
                <div class="font-bold mb-6 text-center text-2xl">
                  Didn't find your answer in the FAQ?
                  <br></br>
                  Contact our team
                </div>

                <form>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
               focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="form group mb-6">
                    <select
                      aria-label="Default select example required"
                      name="topic"
                      className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      text-gray-400
                      m-0
                       focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option>Topic</option>

                      <option value="tg">Technical Glitch</option>

                      <option value="Gs">Give Suggestion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-6">
                    <input
                      type="text"
                      class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
               focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="form-group mb-6">
                    <textarea
                      className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
               focus:bg-white focus:border-blue-600 focus:outline-none
            "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group form-check mb-6">
                    <input
                      id="exampleCheck87"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:bg-gray-700 "
                    />

                    <label
                      className="form-check-label ml-2 inline-block text-white"
                      for="exampleCheck87"
                    >
                      You confirm that you have read and agreed to our T.A.C
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
