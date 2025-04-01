import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CompleteServices from "./components/CompleteServices";
import Makeup from "./components/Makeup";
import HairService from "./components/HairService";
import AdvancedBeauty from "./components/AdvancedBeauty";
import SemiPermanentMakeup from "./components/SemiPermanentMakeup";
import BridalRental from "./components/BridalRental";

import "./styles/makeup.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
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

        {/* Complete Services Page */}
        <Route path="/services" element={<CompleteServices />} />

        {/* Individual Service Pages */}
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/hair-service" element={<HairService />} />
        <Route path="/advanced-beauty" element={<AdvancedBeauty />} />
        <Route path="/semi-permanent-makeup" element={<SemiPermanentMakeup />} />
        <Route path="/bridal-rental" element={<BridalRental />} />
      </Routes>
    </Router>
  );
};

export default App;
