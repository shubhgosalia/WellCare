import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Services";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Forgot from "./components/Forgot";

import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Step 1", "Step 2", "Step 3", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <div className="mx-auto mt-8 rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
        <h2 class="pt-5 pl-8 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl dark:text-white">
          Expert Registration
        </h2>
        {/* Stepper */}
        <div className="horizontal container mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
          <div className="my-5 pl-10 pr-10 pt-3 pb-0">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
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
      {/* <Forgot /> */}
      {/* <Reset /> */}
      {/* <Navbar />
      <Hero />
      <About />
      <Service />
      <Footer /> */}
    </>
  );
}

export default App;
