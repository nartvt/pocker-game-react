import React from "react";
import Card from "./card";
const player = (props) => {
  return (
    <div className={props.className}>
      <p className="lead">{props.player.hoTen}</p>
      <main className="d-flex">
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default player;
