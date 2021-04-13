import PropTypes from "prop-types";
import React from "react";
import "./assets/css/Header.css";
import logo from "./assets/icons/list-check.svg";

export default function Header({ children }) {
  return (
    <nav>
      <div className="nav-wrapper" style={{ background: "teal" }}>
        <div className="logo-container">
          <img className="logo" src={logo} alt="DonVadimon" />
        </div>
        <div className="nav-text">Add new List</div>
        {children}
      </div>
    </nav>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
