import React from "react";
import Branch from "./Branch";

const Branches = function({ BranchProp }) {
  const Branches = BranchProp.map((user, i) => {
    return (
      <Branch
        branch={BranchProp[i].branch}
        backgroundColor={BranchProp[i].backgroundColor}
        id={BranchProp[i].id}
        key={BranchProp[i].key}
      />
    );
  });
  return <div>{Branches}</div>;
};

export default Branches;
