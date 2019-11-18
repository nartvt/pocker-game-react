import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import RoomReducer from './RoomReducer';

const RootReducer =  combineReducers({
  user: UserReducer,
  rooms: RoomReducer
})

export default RootReducer;