import React from "react";
import "./style.css";
const CircledIconContainer = (icon, name) => {
  return (
    <div className=" d-flex align-items-center justify-content-center flex-column">
      <div className="icon-wrapper d-flex align-items-center justify-content-center">
        <img src={icon} alt={`{${name} w-100`} />
      </div>
      <p className="icon-description">{name}</p>
    </div>
  );
};

export default CircledIconContainer;