import { restConnector } from "./Index";

class GameService {
  fetchRooms() {
    return restConnector({
      url: "http://5bd2959ac8f9e400130cb7e9.mockapi.io/api/rooms",
      method: "GET"
    });
  }
  fetchRoomDetail(matchId) {
    return restConnector({
      url: `http://5bd2959ac8f9e400130cb7e9.mockapi.io/api/rooms/${matchId}`,
      method: "GET"
    });
  }

  fetchDeckCard() {
    return restConnector({
      url: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
      method: "GET"
    });
  }
  fetchCards(count,deckId) {
    return restConnector({
      url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`,
      method: "GET"
    });
  }
}
export default new GameService();
