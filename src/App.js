import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// Authentication
import Landing from "../src/pages/Landing";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

// Password
import ResetPassword from "pages/ResetPassword";
import ForgotPassword from "pages/ForgotPassword";
import UpdatePassword from "../src/pages/UpdatePassword";

// Dashboard Pages
import Home from "components/Home/Home";
import ContactUs from "../src/pages/ReachUs";
import MyAccount from "../src/pages/MyAccount";
import Profile from "../src/pages/ExpertProfile";
import AdminLogin from "../src/pages/AdminLogin";

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
import UserQuery from "components/AdminDashboard/GetQuery";
import Tac from "components/TAC/Tac";

import VideoCall from "pages/VideoCall";
import Rating from "pages/Rating";
import ProtectedRoute from "components/ProtectRoute/ProtectRoute";
// import Notverified from "components/DocNotverified/Notverified";
import VerifySuccess from "components/VerifySuccess/VerifySuccess";

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
            <Route exact path="/doctorProfile/:id" element={<Profile />} />

            {/* SlotBooking Page */}
            <Route exact path="/slotBook" element={<SlotBooking />} />

            {/* Appointment Summary Page */}
            <Route exact path="/checkoutPayment" element={<Checkout />} />

            {/* Payment Gateway  Page */}
            <Route exact path="/paymentGateway" element={<Gateway />} />

            {/* Payment Success Page */}
            <Route exact path="/paymentSuccess" element={<Success />} />

            {/* Pending Payment */}
            <Route exact path="/pendingPayment" element={<Success />} />

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

            {/* Admin Login  */}
            <Route exact path="/adminLogin" element={<AdminLogin />} />

            {/* Admin Dashboard  */}
            <Route exact path="/adminDashboard" element={<Admin />} />

            {/* Admin Expert Verification */}
            <Route exact path="/expertVerify" element={<ExpertVerify />} />

            {/* Admin User Query */}
            <Route exact path="/userQuery" element={<UserQuery />} />

            {/* Terms and Condition Page */}
            <Route exact path="/tac" element={<Tac />} />

            {/* video call  */}
            <Route exact path="/video/:roomId" element={<VideoCall />} />

            {/* rating  */}
            <Route exact path="/ratetheroom/:roomId" element={<Rating />} />

            {/* Doc not verified message page */}
            {/* <Route exact path="/docNotverified" element={<Notverified />} /> */}

            {/* Email verification success page on registration */}
            <Route exact path="/VerifySuccess" element={<VerifySuccess />} />
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
