import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Service from "./components/Services";
// import Footer from "./components/Footer";
import Login from "components/Login";
import Home from "components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "components/Signup";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Service from "./components/Services";
// import Footer from "./components/Footer";
// import Reset from "./components/Reset";
// import Forgot from "./components/Forgot";

// import { useState } from "react";
// import Stepper from "./components/Stepper";
// import StepperControl from "./components/StepperControl";
// import { UseContextProvider } from "./contexts/StepperContext";

// import Step1 from "./components/steps/Step1";
// import Step2 from "./components/steps/Step2";
// import Step3 from "./components/steps/Step3";
// import Final from "./components/steps/Final";

function App() {
  // const [currentStep, setCurrentStep] = useState(1);

  // const steps = ["Step 1", "Step 2", "Step 3", "Complete"];

  // const displayStep = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <Step1 />;
  //     case 2:
  //       return <Step2 />;
  //     case 3:
  //       return <Step3 />;
  //     case 4:
  //       return <Final />;
  //     default:
  //   }
  // };

  // const handleClick = (direction) => {
  //   let newStep = currentStep;

  //   direction === "next" ? newStep++ : newStep--;
  //   // check if steps are within bounds
  //   newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  // };

  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />} />
          {/* Login */}
          <Route exact path="/login" element={<Login />} />
          {/* Sign up */}
          <Route exact path="/signup" element={<Signup />} />
          {/* Landing Page */}
          <Route exact path="/landing" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
