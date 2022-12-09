import "./App.css";
import Login from "components/Authentication/Login";
import Home from "components/Home1/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "components/Authentication/Signup";
import Landing from "components/Landing/Landing";
import DoctorRegistration from "components/DoctorRegistration/DoctorRegistration";
// import PasswordSetup from "components/PasswordSetup/ForgotPassword";
import ResetPassword from "components/PasswordSetup/ResetPassword";
import ForgotPassword from "./components/PasswordSetup/ForgotPassword";

function App() {
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
          {/*Doctor registration page*/}
          <Route
            exact
            path="/doctorRegistration"
            element={<DoctorRegistration />}
          />
          {/* forgot password page */}
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          {/* reset password page */}
          <Route exact path="/resetPassword" element={<ResetPassword />} />

          {/* Redirect to home page if some unknown route is used */}
          {/* <Navigate to="/" /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
