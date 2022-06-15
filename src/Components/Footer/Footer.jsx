import React from "react";
import Contact from "../Content/Contact";
import "../Footer/css/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div id="logo">
        <h2 className="log">
          <a href="http://twitter.com/afobaje_">Afobaje</a>
        </h2>
        <p>&copy; 2022 Afobaje</p>
      </div>
      <Contact/>
    </footer>
  );
};

export default Footer;
