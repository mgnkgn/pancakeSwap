import React from "react";
import Draggable, { DraggableCore } from "react-draggable";

const DraggableTest = () => {
  return (
    <Draggable handle=".handle">
      <div style={{ border: "2px solid red", padding: "1rem", width: "30%" }}>
        <div
          style={{ backgroundColor: "green", width: "30%" }}
          className="handle"
        >
          Drag from here
        </div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable>
  );
};

export default DraggableTest;
