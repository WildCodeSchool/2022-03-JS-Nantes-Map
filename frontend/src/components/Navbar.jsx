import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { backgroundColor: "#f7cfb5", color: "black" };
  return { backgroundColor: "#446699", color: "white" };
};
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="bannière">
        <Link to="/">
          <img
            src="src/assets/Bannière Mobile.png"
            className="bannieremobile"
            alt="bannièremobile"
          />
          <img
            src="src/assets/Bannire_desktop.png"
            className="bannieredesktop"
            alt="bannièredesktop"
          />
        </Link>
      </div>
      <div className="liens">
        <NavLink className="link" style={getActiveLinkStyle} to="/Agenda">
          AGENDA
        </NavLink>

        <NavLink className="link" style={getActiveLinkStyle} to="/Citytour">
          CITY TOUR
        </NavLink>
      </div>
    </div>
  );
}
