import React from "react";
import "./colorcard.css";

export default function ColorCard(props) {
  return (
    <>
      <div className="color-box">
        <div
          className="color-display"
          style={{ backgroundColor: props.color, height: "200px" }}
        ></div>
        <div className="name-box">
          <h4 className="color-code">{props.code}</h4>
          <span className="color-name" style={{ color: props.color }}>
            {props.color}
          </span>
        </div>
      </div>
    </>
  );
}
