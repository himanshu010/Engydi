import React from "react";
import SubjectSem4MAE from "./SubjectSem4MAE";

const Subjects4MAE = function({ SubjectProp4MAE }) {
  const Subjects4MAE = SubjectProp4MAE.map((user, i) => {
    return (
      <SubjectSem4MAE
        subject={SubjectProp4MAE[i].subject}
        backgroundColor={SubjectProp4MAE[i].backgroundColor}
      />
    );
  });
  return <div>{Subjects4MAE}</div>;
};

export default Subjects4MAE;
