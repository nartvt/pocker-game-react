import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRooms } from "../../Redux/Actions/GameAction";
const Hallway = (props) => {
  useEffect(() => {  
        props.dispatch(fetchRooms());     
  }, []);

  const _renderRooms = () => {
    return props.rooms.map((room, index) => {
      return (
        <tr>
          <td>{room.id}</td>
          <td>{room.players.length}</td>
          <td>
            <input type="button" className="btn btn-success">
              Join
            </input>
          </td>
        </tr>
      );
    });
  };
  const _renderRoomsSimulator = () => {
    let data = [
      {
        id: "11234123",
        players: [
          { id: "1123123bbb", name: "Phan Sơn" },
          { id: "90808098ccc", name: "Nguyễn Tuấn Vũ" },
          { id: "03408495www", name: "Trần Hồng Ân" }
        ]
      },
      {
        id: "2312343243",
        players: [
          { id: "57980787087dbb", name: "Vương Triều Đại" },
          { id: "17293718293bdbbd", name: "Nguyễn Phước Sang" },
          { id: "03408495www", name: "Nguyễn Văn Linh" }
        ]
      }
    ];
    return data.map((room, index) => {
      return (
        <tr key={index}>
          <td>{room.id}</td>
          <td>{room.players.length}</td>
          <td>

            <Link className="btn btn-outline-primary" to={`/match/${room.id}`} >
              Join
            </Link>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="container">
      <h1 className="text-center display-4">Hall Way</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Players</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {_renderRoomsSimulator()}
        </tbody>
      </table>
    </div>
  );
};

export default connect(state => ({
  rooms: state.rooms.rooms
}))(Hallway);
