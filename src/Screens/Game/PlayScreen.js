import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRoom } from "../../Redux/Actions/GameAction";
const PlayScreen = (props) => {
  useEffect(() => {
    const matchId = props.match.params.matchid;
   
    props.dispatch(fetchRoom(matchId));
   
  }, []);

  return (
    <div>
      <h1>Play Game</h1>
    </div>
  );
};

export default connect() (PlayScreen);
