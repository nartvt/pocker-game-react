import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';

const Header = props => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="#">Poker</NavLink>
      <button className="navbar-toggler" type="button" >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item">
              <NavLink className="nav-link" to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin" >Sign In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/signup" >Sign Up</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="#" >Play Game</NavLink>
            </li> */}
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: 'red'
              }}
              className="nav-link" to="/"
              exact
            >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin" >Sign In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/signup" >Sign Up</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/hallway" >Play Game</NavLink>
          </li>
        </ul>
        {props.credentials && (
          <div>
            <p className='nav-item m-0'>Hi, {props.credentials.hoTen}</p>
          </div>
        )}
      </div>
    </nav>

  );
};
const _mapStateToProps = (state) => ({
  credentials: state.user.credentials
})

export default connect(_mapStateToProps)(Header);