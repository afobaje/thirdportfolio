import React from "react";
import Nav from "./nav/Nav";
import "../Header/Header.css";
import david from '../Header/davidCV.pdf'

const Header = () => {
  return (
    <header>
      <Nav />
      <div className="case">
        <h1 className="killer">
          Build a world class application <br /> with a seasoned expert with{" "}
          <br /> knowledge of latest tools
        </h1>
        <p className="cavemen">Check my profile to get details </p>
        <div className="marquee">
          <h2>Top Skills</h2>
        <div className="hscroll">
          <span className="roll">JavaScript</span>
          <span className="roll">ReactJS</span>
          <span className="roll">CSS</span>
          <span className="roll">HTML5</span>
          <span className="roll">Node</span>
        </div>
        </div>
        <div className="but">
          <a href={david} download><button className="first">Download Resume</button></a>
          <a href="Projects" target='_blank'><button className="second">Upcoming Projects</button></a>
          
        </div>
      </div>
     
    </header>
  );
};

export default Header;
