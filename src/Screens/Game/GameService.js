import restConnector from "../../Services";

class GameService{
  fetchRooms() {
    return restConnector({
      url: 'http://5bd2959ac8f9e400130cb7e9.mockapi.io/api/rooms',
      method:'GET'
    })
  }

  fetchRoom(matchId) {
    return restConnector({
      url: `http://5bd2959ac8f9e400130cb7e9.mockapi.io/api/rooms/${matchId}`,
      method: 'GET'
    })
  }
}

export default new GameService();