import React from "react";

const ForgotPassword = () => {
  return (
    <section class="bg-dark-100 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-3 text-xl font-bold leading-tight tracking-tight text-primary-blue md:text-2xl dark:text-white">
            Password Reset
          </h2>
          <p class="mb-2">
            Please enter your e-mail address and we will send you a link to
            reset your password!
          </p>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            {
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="e-mail"
                  required=""
                />
              </div>
            }
            <button
              type="submit"
              class="w-full text-white bg-600 hover:bg-700 focus:ring-4 focus:outline-none focus:ring-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-600 dark:hover:bg-700 dark:focus:ring-800"
            >
              Click here for reset link
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
