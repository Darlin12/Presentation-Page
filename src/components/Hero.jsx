import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        Darlin Casado
      </h1>
      <p><ReactTyped
          strings={['Web Programmer.', 'And...', 'QA Automation Engineer']}
          typeSpeed={60}
          backSpeed={30}
          loop
        /></p>
    </div>
  );
}

export default Hero;
