import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessRook,
  faBuildingColumns,
  faFilm,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import Equipement from "./Equipement";
import "./EquipementCulturel.css";

function EquipementCulturel() {
  const [equipements, setEquipements] = useState([]);

  useEffect(() => {
    fetch(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_equipements-culturels-nantes-tarifs&q=&rows=194&facet=nom_complet&facet=type_tarif"
    )
      .then((res) => res.json())
      .then((data) => {
        const tableWithDuplicates = data.records;
        const tableOfIdobj = [];
        const tableWithoutDuplicates = [];
        tableWithDuplicates.forEach((element) => {
          if (!tableOfIdobj.includes(element.fields.idobj)) {
            tableWithoutDuplicates.push(element);
            tableOfIdobj.push(element.fields.idobj);
          }
        });
        setEquipements(tableWithoutDuplicates);
      });
  }, []);

  return (
    <div className="Equipement-culturel">
      <h1>LES LIEUX CULTURELS</h1>
      <div className="flexbuttons">
        <button type="button" className="pictolieuxculturels">
          <FontAwesomeIcon icon={faChessRook} className="pictoculture" />{" "}
        </button>
        <button type="button" className="pictolieuxculturels">
          <FontAwesomeIcon icon={faBuildingColumns} className="pictoculture" />{" "}
        </button>
        <button type="button" className="pictolieuxculturels">
          <FontAwesomeIcon icon={faFilm} className="pictoculture" />{" "}
        </button>
        <button type="button" className="pictolieuxculturels">
          <FontAwesomeIcon icon={faBookOpenReader} className="pictoculture" />{" "}
        </button>
      </div>
      <h1 className="liste">
        {equipements.map((equipement) => (
          <Equipement equipement={equipement} />
        ))}
      </h1>
    </div>
  );
}

export default EquipementCulturel;
