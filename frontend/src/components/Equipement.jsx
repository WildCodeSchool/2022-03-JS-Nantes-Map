import react from "react";

function Equipement({ equipement }) {
  return (
    <div className="bloc-equipement"> {equipement.fields.nom_complet} </div>
  );
}

export default Equipement;
