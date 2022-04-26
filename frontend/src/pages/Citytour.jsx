import React from "react";
import EquipementCulturel from "@components/EquipementCulturel";
import Map from "../components/Map";
import "./Citytour.css";

function Citytour() {
  return (
    <div className="City-tour">
      <div className="container-city">
        <h1>CITY TOUR</h1>
        <Map />
      </div>
      <EquipementCulturel />
    </div>
  );
}

export default Citytour;
