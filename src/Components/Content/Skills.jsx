import React from "react";
import css from "../assets/css-3.svg";
import react from "../assets/react-2.svg";
import node from "../assets/nodejs-icon.svg";
import js from "../assets/logo-javascript.svg";
import "../Content/css/skills.css";
const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="stack">
        <div className="seed">
          <img src={react} width={40} height={40} alt="" />
        </div>
        <div className="seed">
          <img src={js} width={40} height={40} alt="" />
        </div>
        <div className="seed">
          <img src={css} width={40} height={40} alt="" />
        </div>
        <div className="seed">
          <img src={node} width={40} height={40} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
