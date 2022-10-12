import React from "react";
import grid from "../assets/grid.png";

export default function Hero() {
  const heroPara =
    "Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.";
  return (
    <>
      <section className="hero">
        <div className="hero--grid">
          <img src={grid} />
        </div>
        <div className="hero--info">
          <h1 className="hero--title">Online Experiences</h1>
          <p className="hero--subtitle">{heroPara}</p>
        </div>
      </section>
    </>
  );
}
