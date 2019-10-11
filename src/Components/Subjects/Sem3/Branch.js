import React from "react";
import "./Branch.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Branch = prop => {
  let current_url = window.location.pathname;
  if (current_url === "/subjectsem/3") {
    var url = "/subjectsem/3/" + prop.id;
  } else if (current_url === "/subjectsem/4") {
    url = "/subjectsem/4/" + prop.id;
  }
  return (
    <Router>
      <Link to={url} target="_parent" style={{ color: "white" }}>
        <div className="cardlist">
          <div
            className="card-background grow shadow-5"
            style={{ backgroundColor: prop.backgroundColor }}
          ></div>
          <div className="outerCard grow shadow-5">
            <div className="innerCard pa2">
              <div className="branch"> {prop.branch}</div>
            </div>
          </div>
        </div>
      </Link>
    </Router>
  );
};

export default Branch;
