import React from "react";

const GreenBtn = ({ width, height }) => {
  return (
    <button
      style={{ width: `${width}px`, height: `${height}px` }}
      className="green-btn-card"
    >
      GreenBtn
    </button>
  );
};

export default GreenBtn;
