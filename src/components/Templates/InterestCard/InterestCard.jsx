import React from "react";

const InterestCard = ({ name }) => {
  return (
    <div
      style={{
        backgroundColor: "#EAEAEA",
        color: "black",
        width: "min-content",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        borderRadius: "90px",
        cursor: "default",
      }}>
      {name}
    </div>
  );
};

export default InterestCard;
