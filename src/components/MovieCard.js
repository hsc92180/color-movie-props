import React from "react";
import "./moviecard.css";
export default function MovieCard(props) {
  return (
    <>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${props.bgimg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      >
        <div className="movie-detail">
          <div className="top">
            <div>
              <img src={props.img} alt="" height="140px" width="100px" />
            </div>
            <div>
              <div style={{ lineHeight: "8px" }}>
                <h1 style={{ color: "white", fontWeight: "500" }}>
                  {props.name}
                </h1>
                <h4 style={{ color: "lightblue", fontWeight: "400" }}>
                  {props.date}
                </h4>
              </div>
              <div style={{ display: "flex", gap: "8px", height: "30px" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    boxShadow: "rgba(255, 255, 255, 0.35) 0px 5px 15px",
                  }}
                >
                  {props.time}
                </button>
                <h4 style={{ marginTop: "2px", fontWeight: "500" }}>
                  {props.types}
                </h4>
              </div>
            </div>
          </div>
          <div className="description">
            <p style={{ fontSize: "20px" }}>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
