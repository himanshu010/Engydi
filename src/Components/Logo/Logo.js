import Tilt from "react-tilt";
import React from "react";
import "./Logo.css";
import "C:/Users/him97/OneDrive/Desktop/Web D/Project/Engydi/node_modules/@fortawesome/fontawesome-free/css/all.css";
import LogoImage from "./logo.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt shadow-5"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img className="LogoImage" src={LogoImage} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
