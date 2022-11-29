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
          <Route exact path="/landing" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
