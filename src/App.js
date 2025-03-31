import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompleteServices from "./components/CompleteServices"; // Import the new Complete Services page

import "./styles/makeup.css"; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
          </>
        } />

        {/* Complete Services Page Route */}
        <Route path="/services" element={<CompleteServices />} />
      </Routes>
    </Router>
  );
};

export default App;
