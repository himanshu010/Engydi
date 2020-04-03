import React from "react";
import "./Semester.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Semester = prop => {
  let url = "/subjectsem/" + prop.id;
  return (
    <Router>
      <Link to={url} target="_top" style={{ color: "white" }}>
        <div className="cardlist pa2">
          <div
            className="background grow shadow-5"
            style={{ backgroundColor: prop.backgroundColor }}
          ></div>
          <div className="card grow shadow-5">
            <div className="innerCard ">
              <div className="heading">Semester</div>
              <div className="number"> {prop.number}</div>
            </div>
          </div>
        </div>
      </Link>
    </Router>
  );
};

export default Semester;
