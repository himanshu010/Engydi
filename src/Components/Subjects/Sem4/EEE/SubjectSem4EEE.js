import React from "react";
import "./SubjectSem4EEE.css";

const SubjectSem4EEE = prop => {
  return (
    <div className="cardlist">
      <div
        className="card-background grow shadow-5"
        style={{ backgroundColor: prop.backgroundColor }}
      ></div>
      <div className="outerCard grow shadow-5" id="outerCard">
        <div className="innerCard pa2">
          <div className="subject"> {prop.subject}</div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSem4EEE;
