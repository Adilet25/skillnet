import React from "react";
import "./MainCard.css";

const MainCard = ({
  logo,
  title,
  description,
  buttonText,
  color,
  rounded,
  hasBorder = true,
  width = "20rem",
}) => {
  return (
    <div
      className="card"
      style={{
        borderColor: hasBorder ? color : "transparent",
        width: width,
      }}>
      <div className="card-logo">
        <img src={logo} alt="CardLogo" className={rounded ? "rounded" : ""} />
        <div className="card-logo_info">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <button className="card-button" style={{ backgroundColor: color }}>
        {buttonText}
      </button>
    </div>
  );
};

export default MainCard;
