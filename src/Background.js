import React from "react";

import "./Background.css";
import Navigator from "./Components/Navigator/Navigation";
import Logo from "./Components/Logo/Logo";

import Particles from "react-particles-js";

const Background = () => {
  return (
    <div className="Background">
      <Particles
        className="Particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1200
              }
            }
          }
        }}
        style={{
          width: "100%"
        }}
      />
      <Navigator />
      <Logo />
    </div>
  );
};
export default Background;
