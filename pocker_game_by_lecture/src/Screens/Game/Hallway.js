import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRooms } from "../../Redux/Actions/Game";

const Hallway = props => {
  useEffect(() => {
    props.dispatch(fetchRooms());
  }, []);

  const _renderRoom = () => {
    return props.rooms.map((room, index) => (
      <tr>
        <td>{room.id}</td>
        <td>{room.players.length}</td>
        <td>
          <Link to={{
            pathname: `/match/${room.id}`,
           
          }} className="btn btn-success">Join</Link>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h1 className="text-center display-4">Hallway</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Players</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{_renderRoom()}</tbody>
      </table>
    </div>
  );
};

export default connect(state => ({
  rooms: state.room.rooms
}))(Hallway);
