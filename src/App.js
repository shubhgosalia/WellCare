import "./App.css";
import Login from "components/Authentication/Login";
import Home from "components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "components/Authentication/Signup";
import Landing from "components/Landing/Landing";

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
          <Route exact path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
