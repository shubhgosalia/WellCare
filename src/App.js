import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Authentication
import Landing from "../src/pages/Landing";
import Login from "../src/pages/Login";
import Signup from "components/Signup/RightSignup";

// Password
import ResetPassword from "components/PasswordSetup/ResetPassword";
import ForgotPassword from "components/PasswordSetup/ForgotPassword";
import UpdatePassword from "../src/pages/UpdatePassword";

// Dashboard Pages
import Home from "components/Home/Home";
import ContactUs from "../src/pages/ReachUs";
import MyAccount from "../src/pages/MyAccount";
import Profile from "../src/pages/ExpertProfile";

import DoctorRegistration from "components/DoctorRegistration/DoctorRegistration";
// import DoctorSearch from "components/DoctorSearch/Home";
import SlotBooking from "components/SlotBooking/SlotBooking";
import Checkout from "components/PaymentCheckout/Checkout";
import Gateway from "components/PaymentGateway/Gateway";
import Success from "components/PaymentSuccess/Success";
import ChatHome from "components/Chat/ChatHome";

// import ContactsProvider from "context/ContactsContext";
import PhysioSearch from "components/PhysioSearch/Home";
import NutriSearch from "components/NutriSearch/Home";
import GymSearch from "components/GymSearch/Home";
import TopRated from "components/TopRated/TopRated";

import UserProvider from "context/UserContext";
import Admin from "components/AdminDashboard/Admin";
import ExpertVerify from "components/AdminDashboard/ExpertVerify";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            {/* Landing Page */}
            <Route exact path="/" element={<Landing />} />

            {/* Home */}
            <Route exact path="/home" element={<Home />} />

            {/* Login */}
            <Route exact path="/login" element={<Login />} />

            {/* Sign up */}
            <Route exact path="/signup" element={<Signup />} />

            {/* update password */}
            <Route exact path="/updatePassword" element={<UpdatePassword />} />

            {/* Top Rated Page */}
            <Route exact path="/topRated" element={<TopRated />} />

            {/* Doctor Profile Page */}
            <Route exact path="/doctorProfile" element={<Profile />} />

            {/* SlotBooking Page */}
            <Route exact path="/slotBook" element={<SlotBooking />} />

            {/* Appointment Summary Page */}
            <Route exact path="/checkoutPayment" element={<Checkout />} />

            {/* Payment Gateway  Page */}
            <Route exact path="/paymentGateway" element={<Gateway />} />

            {/* Payment Success Page */}
            <Route exact path="/paymentSuccess" element={<Success />} />

            {/*Doctor registration page*/}
            <Route
              exact
              path="/doctorRegistration"
              element={<DoctorRegistration />}
            />

            {/* forgot password page */}
            <Route exact path="/forgotPassword" element={<ForgotPassword />} />

            {/* my account page */}
            <Route exact path="/myAccount" element={<MyAccount />} />

            {/* reset password page */}
            <Route
              exact
              path="/resetPassword/:token"
              element={<ResetPassword />}
            />

            {/* chat  */}
            <Route exact path="/chat" element={<ChatHome />} />

            {/* Category Specific Search */}
            {/* Physio Search */}
            <Route
              exact
              path="/searchPhysiotherapists"
              element={<PhysioSearch />}
            />

            {/* Nutritonist Search */}
            <Route
              exact
              path="/searchNutritionists"
              element={<NutriSearch />}
            />

            {/* Gym Trainer Search */}
            <Route exact path="/searchGymtrainers" element={<GymSearch />} />

            {/* Contact Us and faq page */}
            <Route exact path="/contactUs" element={<ContactUs />} />

            {/* Admin Dashboard  */}
            <Route exact path="/adminDashboard" element={<Admin />} />

            {/* Admin Expert Verification */}
            <Route exact path="/expertVerify" element={<ExpertVerify />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
