import { FETCH_POKER_ROOMS, FETCH_POKER_ROOM } from './../../Common/TypeCommon';
import GameService from '../../Screens/Game/GameService';

export const fetchRooms = () => {
  return dispatch => {
    GameService.fetchRooms()
      .then(res => {
      dispatch(actFetchRoom(res.data));
    })
      .catch(err => {
        console.log(err);
      });
  }
}

export const fetchRoom = (matchId) => {
  return dispatch => {
    GameService.fetchRoom(matchId)
      .then(res => {
        console.log(res);
        dispatch(actFetchRoomOne(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export const actFetchRoom = (data) => ({
    type: FETCH_POKER_ROOMS,
    payload: data
})

export const actFetchRoomOne = (data) => ({
  type: FETCH_POKER_ROOM,
  payload: data
})