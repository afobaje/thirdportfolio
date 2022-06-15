import React from "react";
import "../nav/Nav.css";
import david from '../davidCV.pdf'
import { useState } from "react";

const Nav = () => {
  let [display,setDisplay]=useState(false)
  let handle=()=>{
    setDisplay(!display)
  };

  return (
    <nav className="obi" style={{height:display?'auto':'5vh'}} >
      <div className="logo">
        <h1><a href="/">Afobaje</a></h1>
      </div>

      <ul className="links" style={{visibility:display&&'visible' }} >
        <li>
          <a className='bluray' href="#about">About Me</a>{" "}
        </li>
        <li>
          <a className='bluray' href="#proj">Projects</a>{" "}
        </li>
        <li>
          <a className='bluray' href="#contact">Contact Me</a>{" "}
        </li>
        <li >
          <a  href={david} className="res" download>
            Download Resume
          </a>
        </li>
      </ul>
      <div className="icon" onClick={handle} >
        <div className="line onee"></div>
        <div className="line two"></div>
        <div className="line three"></div>
      </div>

    </nav>
  );
};

export default Nav;
