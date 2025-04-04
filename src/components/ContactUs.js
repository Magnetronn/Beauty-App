import React, { useEffect } from "react";
import Contact from "../components/Contact"; // Adjust path if necessary
import Footer from "./Footer";

const ContactUs = () => {
    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactUs;
