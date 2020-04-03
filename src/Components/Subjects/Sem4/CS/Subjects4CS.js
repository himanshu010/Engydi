import React from "react";
import SubjectSem4CS from "./SubjectSem4CS";

const Subjects4CS = function({ SubjectProp4CS }) {
  const Subjects4CS = SubjectProp4CS.map((user, i) => {
    return (
      <SubjectSem4CS
        subject={SubjectProp4CS[i].subject}
        backgroundColor={SubjectProp4CS[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects4CS}</div>;
};

export default Subjects4CS;
