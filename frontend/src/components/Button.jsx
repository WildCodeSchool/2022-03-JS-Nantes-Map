import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({ icon, setFilteredEquipements, equipements, filters }) {
  function handleFilter() {
    const filteredEquipments = equipements.filter((equipement) => {
      let found = false;
      filters.forEach((filter) => {
        found = found || equipement.fields.nom_complet.includes(filter);
      });
      return found;
    });

    setFilteredEquipements(filteredEquipments);
  }

  return (
    <button
      type="button"
      className="pictolieuxculturels"
      onClick={handleFilter}
    >
      <FontAwesomeIcon icon={icon} className="pictoculture" />{" "}
    </button>
  );
}
export default Button;
