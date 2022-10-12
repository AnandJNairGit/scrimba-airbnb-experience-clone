import React from "react";
import data from "../data";
import star from "../assets/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span>
      </p>
    </div>
  );
}

export default function CardList() {
  const cardlist = data.map((info) => {
    return (
      <Card
        img={info.coverImg}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        location={info.location}
        title={info.title}
        price={info.price}
      />
    );
  });
  return (
    <>
      <div className="cards-list">{cardlist}</div>
    </>
  );
}
