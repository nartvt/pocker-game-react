import { FETCH_ROOMS, FETCH_ROOM_DETAIL, FETCH_DECK_CARD, DRAW_CARD } from "./ActionType";
import GameService from "../../Services/GameService";

//async actions
export const fetchRooms = () => {
  return dispatch => {
    GameService.fetchRooms()
      .then(res => {
        dispatch(actFetchRoom(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const fetchRoomDetail = (matchId,userLogin) => {
  return dispatch => {
    GameService.fetchRoomDetail(matchId)
      .then(res => {
        const data = { ...res.data };
        data.players.push(userLogin);
        data.players = data.players.map(player => ({
          id: player.id || player.taiKhoan,
          hoTen: player.hoTen,
          cards: [],
          tongDiem: 25000
        }))
        dispatch(actFetchRoomDetail(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const drawCard = () => {
  return (dispatch) => {
    GameService.fetchCards().then(res => {
      dispatch(acrDrawCard(res.data));
    })
      .catch(e => console.log(e.response))
  }
}
export const fetchDeckCard = () => {
  return (dispatch) => {
    GameService.fetchDeckCard().then(res => {
      dispatch(actFetchDeckCard(res.data));
    })
    .catch(e=>console.log(e.response))
  }
}
//action creators
export const actFetchRoom = data => ({
  type: FETCH_ROOMS,
  payload: data
});
export const actFetchRoomDetail = data => ({
  type: FETCH_ROOM_DETAIL,
  payload: data
});
export const actFetchDeckCard = (data) => ({
  type: FETCH_DECK_CARD,
  payload: data
})

export const acrDrawCard = (data) => ({
  type: DRAW_CARD,
  payload: data
})