import React from "react";
import "../Content/css/Firstcard.css";
import Dimeji from "../assets/pexels-oladimeji-ajegbile-2696299.jpg";

const Firstcard = () => {
  return (
    <div className="wrapper">
      <div className="firstcard">
        <div className="sv">
          <h1>
            Work better. <br /> Save cost. <br /> Hire the best Talent
          </h1>

          <p>
            Avoid headaches and complains. Hire a visualizer with updated tech
            stack
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <h3>Up to date Skills</h3>
            
              I am always updating my skillset and also practising
              simultaneously to make sure I stay updated and precise while
              working. I believe that the little things matter hence my
              continous taste for knowledge
            
          </div>
          <div className="card">
            <h3>Up to date tools</h3>
            
              I am always improving my skills as well as my thought process. I
              frequently go back to documentations to brush up my knowledge and
              also interact with people to see the know-how of different things
            
          </div>
          <div className="card">
            <h3>The search bar</h3>
            My mentor once gave me two advices on my learning process. "The
            search bar is your friend" and "always console.log. " Found these
            two advices extremely useful and I stick to them till date. I try to
            stimulate my mind by breaking down a problem but I also try to see
            other people's perspective knowing fully well that my solution works
            but also seeing things from a third eye
          </div>
          <div className="card">
            <h3>Eager to try something new</h3>I am always eager to try out that
            new shiny thing. I try to check for motivations behind creation of
            different projects. I believe that programmers are also creatives
            too and just like Leonardo Davinci, there's always a motivation.
          </div>
        </div>

        <div className="poc">
          <div className="order">
            <h2>
              You see that guy up there working on the laptop? That is how I
              will be smiling when I get to work in your company. Life changing
              experience
            </h2>
            <p>I can help create any feature</p>
          </div>

          <div className="im">
            <img src={Dimeji} alt="man working"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstcard;
