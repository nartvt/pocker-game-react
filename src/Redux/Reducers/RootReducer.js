import {combineReducer} from 'redux';
import UserReducer from './UserReducer';
import RoomReducer from './RoomReducer';

const RootReducer =  combineReducer({
  user: UserReducer,
  rooms: RoomReducer
})

export default RootReducer;