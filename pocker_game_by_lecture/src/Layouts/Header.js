import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Poker
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "red"
              }}
              className="nav-link"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "red"
              }}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "red"
              }}
              className="nav-link"
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeStyle={{
                color: "red"
              }}
              className="nav-link"
              to="/hallway"
            >
              Hallway
            </NavLink>
          </li>
        </ul>
        {props.credentials && (
          <div>
            <p className="m-0">Hi, {props.credentials.hoTen} </p>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.user.credentials
  };
};
export default connect(mapStateToProps)(Header);
