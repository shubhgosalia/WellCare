import React, { useState, useEffect, useContext } from "react";
import Navbar from "components/Utils/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { UserContext } from "context/UserContext";

const ContactUs = () => {
  const [data, setData] = useState({
    subject: "",
    desc: "",
  });
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  //if the user is already logged in don't allow it to register
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  const changeVal = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (data.subject.trim() === "" || data.desc.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incomplete fields...",
        });
      }
      setLoad(true);
      let resp = await axios.post(
        "http://localhost:4000/common/query",
        {
          subject: data.subject,
          desc: data.desc,
        },
        {
          withCredentials: true,
        }
      );
      setLoad(false);
      Swal.fire({
        icon: "success",
        title: resp.data.message,
      });
      navigate("/home");
    } catch (err) {
      console.log("errrorr : ", err);
      setLoad(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong :(",
      });
    }
  };

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
                    Are the doctors/experts on this portal verified?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Yes, our admin team makes sure to verify each of the
                    doctor/experts before they are registered onto the portal.
                    The documents provided by the doctor/expert are thoroughly
                    checked and verified.
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    How does WellCare offer one-to-one monitoring?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Features such as end to end encrypted chat, video
                    consultation, routine progress reports facilitate one-to-one
                    monitoring between patient/user and doctor/expert here at
                    Wellcare.
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    How many doctors/Experts are a part of the WellCare network?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Around 4000+ doctors/experts are a part of the Practo
                    network which includes physiotherapists, nutritionists and
                    gym trainers.
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    What measures does WellCare have in place for the protection
                    of user data security and privacy?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Safety of your data is our top priority. We have multi-level
                    security checks, multiple data backups, and stringent
                    policies in place to ensure your data remains safe and
                    secure.
                  </p>
                </details>

                <details className="w-full border rounded-lg mt-5" open="">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                    Why do you display doctor/expert photos? Isn’t this
                    advertising?
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    No. We display doctor photos across all doctor profiles for
                    patient protection. Their sole purpose is to help patients
                    make sure that they are being attended to by the same
                    doctor/expert they booked.
                  </p>
                </details>
              </div>

              <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
                <div className="font-bold mb-6 text-center text-2xl">
                  Didn't find your answer in the FAQ?
                  <br></br>
                  Contact our team
                </div>

                <form className="text-dark-100" onSubmit={onSubmit}>
                  <div className="form group mb-6">
                    <select
                      aria-label="Default select example required"
                      name="subject"
                      value={data.subject}
                      onChange={changeVal}
                      className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out text-gray-400 m-0  focus:bg-white focus:border-blue-600 focus:outline-none"
                    >
                      <option value="" defaultValue={true}>
                        Select
                      </option>
                      <option value="Technical Glitch">Technical Glitch</option>
                      <option value="Give Suggestion">Give Suggestion</option>
                      <option value="Query/Complaint">Query/Complaint</option>
                      <option value="other">Other</option>
                    </select>
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
                      rounded-lg
                      transition
                      ease-in-out
                      m-0
                      focus:bg-white focus:border-blue-600 focus:outline-none max-h-44
            "
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Description"
                      name="desc"
                      value={data.desc}
                      onChange={changeVal}
                    ></textarea>
                  </div>
                  <button type="submit" className="button w-full">
                    {load ? "Loading..." : "Send"}
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
