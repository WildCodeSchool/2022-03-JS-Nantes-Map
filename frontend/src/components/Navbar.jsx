import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="banniere">
        <img
          src="src/assets/Bannière Mobile.png"
          className="banniere"
          alt="banniere"
        />
      </div>
      <div className="liens">
        <div className="agenda">
          <Link to="/Agenda">AGENDA</Link>
        </div>
        <div className="citytour">
          <Link to="/Citytour">CITY TOUR</Link>
        </div>
      </div>
    </div>
  );
}
