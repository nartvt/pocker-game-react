import { FETCH_ROOMS, FETCH_ROOM_DETAIL, DRAW_CARD } from "../Actions/ActionType";

let initialState = {
  rooms: [],
  roomDetail: null
};

let RoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      state.rooms = action.payload;
      return { ...state };
    case FETCH_ROOM_DETAIL:
      state.roomDetail = action.payload;
      return { ...state };
    case DRAW_CARD:
      const numPlayers = state.roomDetail.players.length;
      const players = state.roomDetail.players;
      action.payload.cards.forEach((card,index) => {
        let playerIndex = index % numPlayers;
        players[playerIndex].cards.push(card);
      })
      return { ...state };
    default:
      return state;
  }
};
export default RoomReducer;
