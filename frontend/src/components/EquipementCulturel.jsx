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
  const [filteredEquipements, setFilteredEquipements] = useState([]);

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
        setFilteredEquipements(tableWithoutDuplicates);
      });
  }, []);
  
  function filterLecture() {
    const filterBiblio = equipements.filter(
      (place) =>
        place.fields.nom_complet.includes("Bibliothèque") ||
        place.fields.nom_complet.includes("Médiathèque") ||
        place.fields.nom_complet.includes("Centre")
    );
    return filterBiblio;
  }

  function filterMuseum() {
    const filterMusee = equipements.filter(
      (place) =>
        place.fields.nom_complet.includes("Musée") ||
        place.fields.nom_complet.includes("Muséum d'Histoire") ||
        place.fields.nom_complet.includes("Chronographe")
    );
    return filterMusee;
  }

  function filterCinema() {
    const filterCine = equipements.filter((place) =>
      place.fields.nom_complet.includes("Cinéma")
    );
    return filterCine;
  }

  function filterMonuments() {
    const filterPatrimoine = equipements.filter(
      (place) =>
        place.fields.nom_complet.includes("Château") ||
        place.fields.nom_complet.includes("Planétarium")
    );
    return filterPatrimoine;
  }

  return (
    <div className="Equipement-culturel">
      <h1>LES LIEUX CULTURELS</h1>
      <div className="flexbuttons">
        <button
          type="button"
          className="pictolieuxculturels"
          onClick={() => setFilteredEquipements(filterMonuments(equipements))}
        >
          <FontAwesomeIcon icon={faChessRook} className="pictoculture" />{" "}
        </button>
        <button
          type="button"
          className="pictolieuxculturels"
          onClick={() => setFilteredEquipements(filterMuseum(equipements))}
        >
          <FontAwesomeIcon icon={faBuildingColumns} className="pictoculture" />{" "}
        </button>
        <button
          type="button"
          className="pictolieuxculturels"
          onClick={() => setFilteredEquipements(filterCinema(equipements))}
        >
          <FontAwesomeIcon icon={faFilm} className="pictoculture" />{" "}
        </button>
        <button
          type="button"
          className="pictolieuxculturels"
          onClick={() => setFilteredEquipements(filterLecture(equipements))}
        >
          <FontAwesomeIcon icon={faBookOpenReader} className="pictoculture" />{" "}
        </button>
      </div>
      <h1 className="liste">
        {filteredEquipements.map((equipement) => (
          <Equipement equipement={equipement} key={equipement.fields.idobj} />
        ))}
      </h1>
    </div>
  );
}

export default EquipementCulturel;
