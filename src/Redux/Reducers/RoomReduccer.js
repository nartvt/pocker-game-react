import { FETCH_POKER_ROOMS } from "../../Common/TypeCommon";

let inittialState = {
 rooms:[] 
}

let RoomReducer = (state = inittialState, action) => {
  switch (action.type) {
    case  FETCH_POKER_ROOMS:
      state.rooms = action.payload;
      return { ...state };
    default: return state;
  }
}

export default RoomReducer;