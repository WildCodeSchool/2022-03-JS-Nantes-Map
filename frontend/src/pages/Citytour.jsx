import React from "react";
import EquipementCulturel from "@components/EquipementCulturel";
import Map from "../components/Map";
import "./Citytour.css";

function Citytour() {
  return (
    <div className="City-tour">
      <div className="container-city">
        <h1>CITY TOUR</h1>
        <div className="description-map">
          <p className="presa-map">{`Localisez les lieux d'intérêts de Nantes et de sa région.`}</p>
        </div>
        <Map />
      </div>
      <div className="container-culturel">
        <EquipementCulturel />
      </div>
    </div>
  );
}

export default Citytour;
