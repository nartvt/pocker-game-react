import React from "react";
import "./card.css";
//
const card = (props) => {
  return (
    <div>
      <img
        className="card"
        src={
          "https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
        }
      />
    </div>
  );
};

export default card;
