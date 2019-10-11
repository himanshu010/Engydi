import React from "react";
import SubjectSem4IT from "./SubjectSem4IT";

const Subjects4IT = function({ SubjectProp4IT }) {
  const Subjects4IT = SubjectProp4IT.map((user, i) => {
    return (
      <SubjectSem4IT
        subject={SubjectProp4IT[i].subject}
        backgroundColor={SubjectProp4IT[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects4IT}</div>;
};

export default Subjects4IT;
