import React from "react";
import "./Statusview.css";

function Statusview({ image }) {
  return (
    <div className="Status__feed">
      <img src={image} alt="" />
    </div>
  );
}

export default Statusview;
