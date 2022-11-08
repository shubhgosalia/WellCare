import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />}></Route>
          {/* About */}
          <Route exact path="/about" element={<About />}></Route>
          {/* Login */}
          <Route exact path="/login" element={<Login />}></Route>
          {/* Signup */}
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
