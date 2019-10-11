import React from "react";
import Semester from "./Semester";

const Semesters = function({ SemesterProp }) {
  const Semesters = SemesterProp.map((user, i) => {
    return (
      <Semester
        number={SemesterProp[i].number}
        backgroundColor={SemesterProp[i].backgroundColor}
        id={SemesterProp[i].id}
      />
    );
  });
  return <div>{Semesters}</div>;
};

export default Semesters;
