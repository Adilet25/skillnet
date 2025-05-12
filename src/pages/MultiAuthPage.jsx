import React from "react";
import MultiStepAuth from "../components/MultiStepAuth/MultiStepAuth";

const MultiAuthPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40vmax",
      }}>
      <MultiStepAuth />
    </div>
  );
};

export default MultiAuthPage;
