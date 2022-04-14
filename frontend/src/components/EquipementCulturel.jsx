import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faBuildingColumns,
  faFilm,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import "./EquipementCulturel.css";
import Equipement from "./Equipement";

function EquipementCulturel() {
  const [equipements, setEquipements] = useState([]);

  useEffect(() => {
    fetch(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_equipements-culturels-nantes-tarifs&q=&rows=194&facet=nom_complet&facet=type_tarif"
    )
      .then((res) => res.json())
      .then((data) => setEquipements(data.records));
  }, []);

  return (
    <div className="Equipement-culturel">
      <h1>Les lieux culturels</h1>
      <FontAwesomeIcon icon={faChessRook} />
      <FontAwesomeIcon icon={faBuildingColumns} />
      <FontAwesomeIcon icon={faFilm} />
      <FontAwesomeIcon icon={faBookOpenReader} />

      <h1 className="liste">
        {equipements.map((equipement) => (
          <Equipement equipement={equipement} />
        ))}
      </h1>
    </div>
  );
}

export default EquipementCulturel;
