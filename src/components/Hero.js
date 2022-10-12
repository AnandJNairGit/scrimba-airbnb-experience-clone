import React from "react";
import grid from "../assets/grid.png";

export default function Hero() {
    return (<>
   <section className="hero">
    <div className="hero--grid">
        <img src={grid} />
    </div>
    <div className="hero--info"></div>

   </section>
    </>);
}