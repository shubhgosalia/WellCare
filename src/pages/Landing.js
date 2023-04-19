import React from "react";
import About from "components/Landing/About";
import Footer from "components/Landing/Footer";
import Hero from "components/Landing/Hero";
import Services from "components/Landing/Service";
import Navbar from "components/Landing/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Landing;
