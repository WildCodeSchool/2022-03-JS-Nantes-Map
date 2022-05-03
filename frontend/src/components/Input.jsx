import "./Input.css";

export default function Input({ setFilteredEvenements, evenements }) {
  function handleFree(e) {
    const checkbox = e.target.checked;
    const freeEvents = evenements.filter(
      (event) => event.fields.gratuit === "oui"
    );
    if (checkbox) {
      setFilteredEvenements(freeEvents);
    } else {
      setFilteredEvenements(evenements);
    }
  }

  function handleChildren(e) {
    const checkbox = e.target.checked;
    const childrenEvents = evenements.filter(
      (event) => event.fields.accueil_enfant === "oui"
    );
    if (checkbox) {
      setFilteredEvenements(childrenEvents);
    } else {
      setFilteredEvenements(evenements);
    }
  }

  function handleCity(e) {
    const selectValue = e.target.value;
    const cityEvents = evenements.filter(
      (event) => event.fields.ville === selectValue
    );
    if (selectValue === "Choisissez une ville") {
      setFilteredEvenements(evenements);
    } else {
      setFilteredEvenements(cityEvents);
    }
  }

  function handleDistrict(e) {
    const selectValue = e.target.value;
    const districtEvents = evenements.filter(
      (event) => event.fields.lieu_quartier === selectValue
    );
    if (selectValue === "Choisissez un quartier de Nantes") {
      setFilteredEvenements(evenements);
    } else {
      setFilteredEvenements(districtEvents);
    }
  }

  return (
    <div className="inputstyle">
      <div className="button-ville">
        <select name="city" id="city" onChange={handleCity}>
          <option value="Choisissez une ville">Choisissez une ville</option>
          <option value="Nantes">Nantes</option>
          <option value="Saint-Herblain">Saint-Herblain</option>
          <option value="Rezé">Rezé</option>
          <option value="Saint-Sébastien-sur-Loire">
            Saint-Sébastien-sur-Loire
          </option>
          <option value="Orvault">Orvault</option>
          <option value="Autres">Autres</option>
        </select>
      </div>

      <div className="button-quartier">
        <select name="quartier" id="quartier" onChange={handleDistrict}>
          <option value="Choisissez un quartier de Nantes">
            Choisissez un quartier de Nantes
          </option>
          <option value="Bellevue">Bellevue</option>
          <option value="Centre-ville">Centre-ville</option>
          <option value="Ile de Nantes">Ile de Nantes</option>
          <option value="Malakoff - Saint Donatien">
            Malakoff - Saint Donatien
          </option>
          <option value="Hauts Pavés - Saint Félix">
            Hauts Pavés - Saint Félix
          </option>
          <option value="Nantes Erdre">Nantes Erdre</option>
          <option value="Dervallières - Zola">Dervallières - Zola</option>
          <option value="Nantes Sud">Nantes Sud</option>
          <option value="Doulon - Bottière">Doulon - Bottière</option>
        </select>
      </div>

      <label htmlFor="free" className="checkbox">
        <div className="toto">
          Gratuit{"  "}
          <input
            type="checkbox"
            className="free-checkbox"
            name="checkbox"
            id=""
            onChange={handleFree}
          />
        </div>
      </label>
      <label htmlFor="children" className="checkbox">
        <div className="toto">
          Enfant {"  "}
          <input
            type="checkbox"
            className="free-checkbox"
            name="checkbox"
            id=""
            onChange={handleChildren}
          />
        </div>
      </label>
    </div>
  );
}
