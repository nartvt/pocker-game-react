import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import RoomReducer  from './RoomReduccer'
const RootReducer = combineReducers(
  {
    user: UserReducer,// user: user
    rooms: RoomReducer
  }
)

export default RootReducer;