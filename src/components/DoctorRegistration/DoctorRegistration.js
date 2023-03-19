import React, { useRef } from "react";
import { useState } from "react";
import Stepper from "components/DoctorRegistration/Stepper";
import StepperControl from "components/DoctorRegistration/StepperControl";
import { UseContextProvider } from "components/DoctorRegistration/contexts/StepperContext";
import Step1 from "components/DoctorRegistration/Step1";
import Step2 from "components/DoctorRegistration/Step2";
import Step3 from "components/DoctorRegistration/Step3";
import Step4 from "components/DoctorRegistration/Step4";
import Step5 from "components/DoctorRegistration/Step5";
import Final from "components/DoctorRegistration/Final";
import NavbarHome from "components/Utils/LoginNavbar";
import Swal from "sweetalert2";
import NavigateBack from "components/Utils/NavigateBack";

const DoctorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Complete"];
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const Navigate = NavigateBack();

  const refArray = [ref1, ref2, ref3, ref4, ref5];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 ref={refArray[0]} />;
      case 2:
        return <Step2 ref={refArray[1]} />;
      case 3:
        return <Step3 ref={refArray[2]} />;
      case 4:
        return <Step4 ref={refArray[3]} />;
      case 5:
        return <Step5 ref={refArray[4]} />;
      default:
        return;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    //checking if all the fields are filled or not
    if (direction === "next") {
      let resp = refArray[currentStep - 1].current.checkFields();
      //if true then move onto the next step else stop
      if (resp)
        newStep++;
      else
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incomplete/Invalid field(s)...",
        });
    }
    else {
      newStep--;
    }
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <NavbarHome />
      <div className="w-full h-[100%] flex flex-col justify-center items-center">
      <div className="mx-auto mt-6 rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        {/* Stepper */}
          <h2 className="pt-5 pl-8 text-xl font-bold leading-tight tracking-tight text-primary-blue md:text-2xl dark:text-white">
          Expert Registration
        </h2>
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-5 pl-10 pr-10 pt-3 pb-0 ">
              <UseContextProvider>{
                currentStep <= 5 ?
                  displayStep(currentStep)
                  :
                  <Final />
              }</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
        <button
          className="mx-auto w-full sm:max-w-md text-white bg-dark-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-dark-300 my-3"
          onClick={() => Navigate("/signup")}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default DoctorRegistration;
