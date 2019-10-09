import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRoomDetail, fetchDeckCard } from "../../Redux/Actions/Game";
import MainComponent from "./main";
import Controls from "./control";
import "./index.css";
const RoomScreen = props => {
  useEffect(() => {
    props.dispatch(fetchDeckCard())
  }, []);
  useEffect(() => {
    const matchId = props.match.params.matchId;
    // console.log(matchId);
    props.credentials && 
    props.dispatch(fetchRoomDetail(matchId,props.credentials));
  }, [props.credentials]);

  

  return (
    <div>
      <div className="container mt-4">
        <div className="d-flex justify-content-end w-100 mb-4">
          {props.players &&(
          <Controls players={props.players}/>
          )}
        </div>
        {props.players && (
          <MainComponent players={props.players} />
        )        }
      </div>
    </div>
  );
};

export default connect(state => ({
  credentials: state.user.credentials,
  players: state.room.roomDetail ? state.room.roomDetail.players: []
}))(RoomScreen);
