import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonAgenda({ icon, setFilteredEvenements, evenements, filters }) {
  function handleFilter() {
    const filteredEvenements = evenements.filter((evenement) => {
      let found = false;
      filters.forEach((filter) => {
        found = found || evenement.fields.type.includes(filter);
      });
      return found;
    });

    setFilteredEvenements(filteredEvenements);
  }

  return (
    <button type="button" className="pictoscategories" onClick={handleFilter}>
      <FontAwesomeIcon icon={icon} className="pictoagenda" />{" "}
    </button>
  );
}
export default ButtonAgenda;
