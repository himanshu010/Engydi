import React from "react";
import SubjectSem4ECE from "./SubjectSem4ECE";

const Subjects4ECE = function({ SubjectProp4ECE }) {
  const Subjects4ECE = SubjectProp4ECE.map((user, i) => {
    return (
      <SubjectSem4ECE
        subject={SubjectProp4ECE[i].subject}
        backgroundColor={SubjectProp4ECE[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects4ECE}</div>;
};

export default Subjects4ECE;
