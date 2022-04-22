import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { backgroundColor: "#f7cfb5" };
  return { backgroundColor: "#446699" };
};
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="bannière">
        <Link to="/Home">
          <img
            src="src/assets/Bannière Mobile.png"
            className="banniere"
            alt="bannière"
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
