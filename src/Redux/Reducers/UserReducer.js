import { FETCH_CREDENTIALS } from "../../Common/TypeCommon";

let initialState = {
  credentials: null,
  profiles: [],
  users: []
}

const UserReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_CREDENTIALS:
      state.credentials = action.payload;
      return {...state};
    default: return state;
  }
}

export default UserReducer;
