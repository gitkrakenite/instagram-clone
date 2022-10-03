import React from "react";
import "./optionIcon.css";

function OptionIcon({ image }) {
  return (
    <div className="optionIcon__image">
      <img src={image} alt="" />
    </div>
  );
}

export default OptionIcon;
