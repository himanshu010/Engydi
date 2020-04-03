import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

import "./App.css";

import Semesters from "./Components/Semesters/Semesters";
import { SemesterProp } from "./Components/Semesters/SemesterProp";

import Subjects1 from "./Components/Subjects/Sem1/Subjects1";
import { SubjectProp1 } from "./Components/Subjects/Sem1/SubjectProp1";
import Subjects2 from "./Components/Subjects/Sem2/Subjects2";
import { SubjectProp2 } from "./Components/Subjects/Sem2/SubjectProp2";
import Subjects4CS from "./Components/Subjects/Sem4/CS/Subjects4CS";
import { SubjectProp4CS } from "./Components/Subjects/Sem4/CS/SubjectProp4CS";
import Subjects4ECE from "./Components/Subjects/Sem4/ECE/Subjects4ECE";
import { SubjectProp4ECE } from "./Components/Subjects/Sem4/ECE/SubjectProp4ECE";
import Subjects4EEE from "./Components/Subjects/Sem4/EEE/Subjects4EEE";
import { SubjectProp4EEE } from "./Components/Subjects/Sem4/EEE/SubjectProp4EEE";
import Subjects4IT from "./Components/Subjects/Sem4/IT/Subjects4IT";
import { SubjectProp4IT } from "./Components/Subjects/Sem4/IT/SubjectProp4IT";
import Subjects4MAE from "./Components/Subjects/Sem4/MAE/Subjects4MAE";
import { SubjectProp4MAE } from "./Components/Subjects/Sem4/MAE/SubjectProp4MAE";

import Branches from "./Components/Subjects/Sem3/Branches";
import { BranchProp } from "./Components/Subjects/Sem3/BranchProps";

import Background from "./Background";

class App extends Component {
  render() {
    return (
      <Router>
        <Background />
        <div className="App">
          <Route
            path="/"
            exact={true}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Semester</div>
                  <Semesters SemesterProp={SemesterProp} />
                </div>
              );
            }}
          />
          <Route
            path="/subjectSem/1"
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects1 SubjectProp1={SubjectProp1} />
                </div>
              );
            }}
          />
          <Route
            path="/subjectSem/2"
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects2 SubjectProp2={SubjectProp2} />
                </div>
              );
            }}
          />
          <Route
            path={["/subjectSem/3", "/subjectSem/4"]}
            exact={true}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Branch</div>
                  <Branches BranchProp={BranchProp} />
                </div>
              );
            }}
          />

          <Route
            path={["/subjectSem/4/cs"]}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects4CS SubjectProp4CS={SubjectProp4CS} />
                </div>
              );
            }}
          />
          <Route
            path={["/subjectSem/4/ece"]}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects4ECE SubjectProp4ECE={SubjectProp4ECE} />
                </div>
              );
            }}
          />
          <Route
            path={["/subjectSem/4/eee"]}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects4EEE SubjectProp4EEE={SubjectProp4EEE} />
                </div>
              );
            }}
          />
          <Route
            path={["/subjectSem/4/it"]}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects4IT SubjectProp4IT={SubjectProp4IT} />
                </div>
              );
            }}
          />
          <Route
            path={["/subjectSem/4/mae"]}
            render={() => {
              return (
                <div>
                  <div className="f1 white">Choose Your Subject</div>
                  <Subjects4MAE SubjectProp4MAE={SubjectProp4MAE} />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
