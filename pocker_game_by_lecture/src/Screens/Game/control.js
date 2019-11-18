import React from "react";
import { connect } from 'react-redux';
import { fetchDeckCard } from "../../Redux/Actions/Game";
const Controls = (props) => {
  return (
    <div className="d-flex ">
      <div className="card flex-row p-4 w-50">
        <button
          className="btn btn-success mr-2"
        >
          Shuffle
        </button>
        <button className="btn btn-info mr-2" onClick={() => {
          props.dispatch(fetchDeckCard(12, props.deckCard.deck_id))
        }}>Draw</button>
        <button className="btn btn-primary mr-2">Reveal</button>
      </div>
      <div className="d-flex">
        {
          props.players.map((player, index) => (
            <div key={index} className="border px-3 text-center">
              <p>{player.hoTen}</p>
              <p> 0 </p>
            </div>
          ))
        }
      </div>
    </div>
  );
};


export default connect(state => ({
  deckCard: state.card.deckCards
})) (Controls);
