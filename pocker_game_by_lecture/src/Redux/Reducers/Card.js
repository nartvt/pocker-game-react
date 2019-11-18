import { FETCH_DECK_CARD } from "../Actions/ActionType";

let initialSttate = {
  deckCards: null
}

let CardReducer = (state = initialSttate, action) => {
  switch (action.type) {
    case FETCH_DECK_CARD:
      state.deckCards = action.payload;
      return { ...state };
    default: return state;
  }
}
export default CardReducer;