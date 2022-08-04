import React from "react";
import './Navbar.css';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.theme}`}>
      <div className="container-fluid">
        <NavLink
          to="/"
          className="navbar-brand"
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler Navbar"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to={props.homelink}
                style={
                  props.theme === "dark"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                {props.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={props.aboutlink}
                style={
                  props.theme === "dark"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                {props.about}
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch px-5 container">
              <input
                className="form-check-input px-1"
                type="checkbox"
                role="switch"
                onChange={props.themeToggle}
                checked={props.theme === "light" ? true : false}
              />

              <label
                style={
                  props.theme === "dark"
                    ? { color: "white" }
                    : { color: "black" }
                }
              >
                Enable Dark Mode{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  homelink: PropTypes.string,
};
