import React from "react";
import SubjectSem4EEE from "./SubjectSem4EEE";

const Subjects4EEE = function({ SubjectProp4EEE }) {
  const Subjects4EEE = SubjectProp4EEE.map((user, i) => {
    return (
      <SubjectSem4EEE
        subject={SubjectProp4EEE[i].subject}
        backgroundColor={SubjectProp4EEE[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects4EEE}</div>;
};

export default Subjects4EEE;
