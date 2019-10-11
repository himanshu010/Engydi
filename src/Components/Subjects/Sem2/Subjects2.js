import React from "react";
import SubjectSem2 from "./SubjectSem2";

const Subjects2 = function({ SubjectProp2 }) {
  const Subjects2 = SubjectProp2.map((user, i) => {
    return (
      <SubjectSem2
        subject={SubjectProp2[i].subject}
        backgroundColor={SubjectProp2[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects2}</div>;
};

export default Subjects2;
