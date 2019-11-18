import React from "react";
import Player from "./player";

const MainComponent = (props) => {
  return (
    <div style={{ position: "relative", height: "600px" }}>
      {
        props.players.map((player, index) => (
          // <Player className={`player=-${index + 1}`} player={playere} key={index} />
          <Player key={index} className={`player-${(index + 1)}`} player={player}  />
        ))
      }
      {/* <Player className="player-1" />
      <Player className="player-2"/>
      <Player className="player-3"/>
      <Player className="player-4"/> */}
      <img
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        }}
        src="https://i.pinimg.com/originals/10/80/a4/1080a4bd1a33cec92019fab5efb3995d.png"
      />
    </div>
  );
};

export default MainComponent;
