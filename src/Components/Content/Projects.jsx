import React from "react";
import first from "../assets/629535d5008792598b41bf76.png";
import second from "../assets/62953512d1c9ec38de3b665c.png";
import third from "../assets/Photoviewr- Search for any photos.png";
import fourth from "../assets/React App.png";
import fifth from "../assets/xchangefx-netlify-app-1024x768desktop-9a5e32.jpg";
import "../Content/css/Projects.css";

const Projects = () => {
 
 

  return (
    <div className="proj" id="proj">
      <h2>My development Projects</h2>
      <p className="jaz">Below are some of my projects:</p>
      <div className="praw">
        <div className="mincard">
          <div className="reimg">
            <img src={first} alt="" />
          </div>
          <div className="retext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore fugit laboriosam tempora qui ab voluptatem repellendus,
            temporibus ducimus ad dolorem cupiditate minima reprehenderit quos.
            Reprehenderit repellat debitis sint pariatur!
          </div>
        </div>
        <div className="mincard">
          <div className="reimg">
            <img src={second} alt="" />
          </div>
          <div className="retext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore fugit laboriosam tempora qui ab voluptatem repellendus,
            temporibus ducimus ad dolorem cupiditate minima reprehenderit quos.
            Reprehenderit repellat debitis sint pariatur!
          </div>
        </div>
        <div className="mincard">
          <div className="reimg">
            <img src={third} alt="" />
          </div>
          <div className="retext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore fugit laboriosam tempora qui ab voluptatem repellendus,
            temporibus ducimus ad dolorem cupiditate minima reprehenderit quos.
            Reprehenderit repellat debitis sint pariatur!
          </div>
        </div>
        <div className="mincard">
          <div className="reimg">
            <img src={fourth} alt="" />
          </div>
          <div className="retext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore fugit laboriosam tempora qui ab voluptatem repellendus,
            temporibus ducimus ad dolorem cupiditate minima reprehenderit quos.
            Reprehenderit repellat debitis sint pariatur!
          </div>
        </div>
        <div className="mincard">
          <div className="reimg">
            <img src={fifth} alt="" />
          </div>
          <div className="retext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            labore fugit laboriosam tempora qui ab voluptatem repellendus,
            temporibus ducimus ad dolorem cupiditate minima reprehenderit quos.
            Reprehenderit repellat debitis sint pariatur!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
