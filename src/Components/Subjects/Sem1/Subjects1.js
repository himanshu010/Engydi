import React from "react";
import SubjectSem1 from "./SubjectSem1";

const Subjects1 = function({ SubjectProp1 }) {
  const Subjects1 = SubjectProp1.map((user, i) => {
    return (
      <SubjectSem1
        subject={SubjectProp1[i].subject}
        backgroundColor={SubjectProp1[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects1}</div>;
};

export default Subjects1;
