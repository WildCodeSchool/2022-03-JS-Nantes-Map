import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import Button from "@components/Button";
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

  return (
    <div className="Equipement-culturel">
      <h1>LES LIEUX CULTURELS</h1>
      <div className="flexbuttons">
        <Button
          setFilteredEquipements={setFilteredEquipements}
          equipements={equipements}
          filters={["Château", "Planétarium"]}
          icon={faChessRook}
        />

        <Button
          setFilteredEquipements={setFilteredEquipements}
          equipements={equipements}
          filters={["Musée", "Muséum d'Histoire", "Chronographe"]}
          icon={faBuildingColumns}
        />

        <Button
          setFilteredEquipements={setFilteredEquipements}
          equipements={equipements}
          filters={["Cinéma"]}
          icon={faFilm}
        />

        <Button
          setFilteredEquipements={setFilteredEquipements}
          equipements={equipements}
          filters={["Blibliothèque", "Médiathèque", "Centre"]}
          icon={faBookOpenReader}
        />
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
