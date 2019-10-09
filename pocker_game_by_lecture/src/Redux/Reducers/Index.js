import { combineReducers } from "redux";
import user from './User'
import room from './Room'
import card  from './Card'
const RootReducer = combineReducers({
    user,
    room,
    card
})
export default RootReducer;