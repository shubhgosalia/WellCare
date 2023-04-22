import React from "react";
import Navbar from "components/Utils/Navbar";
import TacHeading from "components/TAC/TacHeading";

const Tac = () => {
  return (
    <div className="w-full flex flex-row bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="w-[16%] h-screen">
        <Navbar />
      </div>
      <div className="w-[84%] flex flex-col space-y-10">
        <div className="top-0 w-[100%] mx-auto mt-5">
          {/* Title */}
          <TacHeading />
        </div>
        {/* Terms and Condition Pointers */}
        {/* For User */}
        <div className="font-bold text-3xl text-primary-blue px-10">
          User
          <div className="text-xl font-medium">
            <ul className="list-disc px-20 text-white">
              <li>
                You must be 18 years of age or older to register, use the
                Services, or visit or use the Website in any manner. By
                registering, visiting and using the Website or accepting this
                Agreement, you represent and warrant to WellCare that you are 18
                years of age or older, and that you have the right, authority
                and capacity to use the Website and the Services available
                through the Website, and agree to and abide by this Agreement.
              </li>
              <li>
                WellCare may by its Services, collect information relating to
                the devices through which you access the Website, and anonymous
                data of your usage. The collected information will be used only
                for improving the quality of WellCare's services and to build
                new services.
              </li>
              <li>
                The Website allows WellCare to have access to registered Users’
                personal email or phone number, for communication purpose so as
                to provide you a better way of booking appointments and for
                obtaining feedback in relation to the Practitioners and their
                practice.
              </li>
              <li>
                WellCare shall not be responsible in any manner for the
                authenticity of the personal information or sensitive personal
                data or information supplied by the User to WellCare or to any
                other person acting on behalf of Practo.
              </li>
              <li>
                If a User provides any information that is untrue, inaccurate,
                not current or incomplete (or becomes untrue, inaccurate, not
                current or incomplete), or WellCare has reasonable grounds to
                suspect that such information is untrue, inaccurate, not current
                or incomplete, WellCare has the right to discontinue the
                Services to the User at its sole discretion.
              </li>
              <li>
                WellCare will ensure Users are provided confirmed appointment on
                the Book facility. However, Practo has no liability if such an
                appointment is later cancelled by the Practitioner, or the same
                Practitioner is not available for appointment.
              </li>
              <li>
                Without prejudice to the generality of the above, Practo is not
                involved in providing any healthcare or medical advice or
                diagnosis and hence is not responsible for any interactions
                between User and the Practitioner. User understands and agrees
                that Practo will not be liable for :<br></br>
                <span className="text-primary-blue">(i)</span> User interactions
                and associated issues User has with the Practitioner;
                <br></br>
                <span className="text-primary-blue">(ii)</span> The ability or
                intent of the Practitioner(s) or the lack of it, in fulfilling
                their obligations towards Users;
                <br></br>
                <span className="text-primary-blue">(iii)</span> Any wrong
                medication or quality of treatment being given by the
                Practitioner(s), or any medical negligence on part of the
                Practitioner(s);
                <br></br>
                <span className="text-primary-blue">(iv)</span> Inappropriate
                treatment, or similar difficulties or any type of inconvenience
                suffered by the User due to a failure on the part of the
                Practitioner to provide agreed Services;
                <br></br>
                <span className="text-primary-blue">(v)</span> Any misconduct or
                inappropriate behaviour by the Practitioner or the
                Practitioner’s staff;
                <br></br>
                <span className="text-primary-blue">(vi)</span> Cancellation or
                no show by the Practitioner or rescheduling of booked
                appointment or any variation in the fees charged.
              </li>
              <li>
                Users will not be entitled for any refunds in cases where, the
                Practitioner is unable to meet the User at the exact time of the
                scheduled appointment time and the User is required to wait,
                irrespective of the fact whether the User is required to wait or
                choose to not obtain the medical services from the said
                Practitioner.
              </li>
            </ul>
          </div>
        </div>
        {/* For Experts */}
        <div className="text-3xl text-primary-blue px-10">
          Expert
          <div className="text-xl font-medium">
            <ul className="list-disc px-20 text-white">
              <li>
                Every Expert on the WellCare Platform must be qualified in the
                area of expertise that he/she represents as being his
                qualification.
              </li>
              <li>
                WellCare, directly and indirectly, collects information
                regarding the Experts' profiles, contact details, and practice.
                WellCare reserves the right to take down any Expert's profile as
                well as the right to display the profile of the Experts, with or
                without notice to the concerned Expert. This information is
                collected for the purpose of facilitating interaction with the
                End-Users and other Users. If any information displayed on the
                Website in connection with you and your profile is found to be
                incorrect, you are required to inform WellCare immediately to
                enable WellCare to make the necessary amendments.
              </li>
              <li>
                You as an Expert hereby represent and warrant that you will use
                the Services in accordance with applicable law. Any
                contravention of applicable law as a result of your use of these
                Services is your sole responsibility, and WellCare accepts no
                liability for the same.
              </li>
              <li className="mb-10">
                The Expert is and shall be duly registered, licensed and
                qualified to practice medicine/ provide health care, wellness
                services, as per applicable laws/regulations/guidelines set out
                by competent authorities and the Practitioner shall not be part
                of any arrangement which will prohibit him/her from practicing
                medicine within the territory of India. The Practitioner shall
                at all times ensure that all the applicable laws that govern the
                Practitioner shall be followed and utmost care shall be taken in
                terms of the consultation/ services being rendered.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tac;
