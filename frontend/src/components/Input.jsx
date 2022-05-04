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

  function handleLocation(e) {
    const selectValue = e.target.value;
    if (selectValue === "Nantes") {
      const cityEvents = evenements.filter(
        (event) => event.fields.ville === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Bellevue - Chantenay - Sainte-Anne") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Centre-ville") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Île de Nantes") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Malakoff - Saint-Donatien") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Hauts-Pavés - Saint-Félix") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Nantes Erdre") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Dervallières - Zola") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Nantes Sud") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Doulon - Bottière") {
      const cityEvents = evenements.filter(
        (event) => event.fields.lieu_quartier === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Saint-Herblain") {
      const cityEvents = evenements.filter(
        (event) => event.fields.ville === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Rezé") {
      const cityEvents = evenements.filter(
        (event) => event.fields.ville === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Saint-Sébastien-sur-Loire") {
      const cityEvents = evenements.filter(
        (event) => event.fields.ville === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Orvault") {
      const cityEvents = evenements.filter(
        (event) => event.fields.ville === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
    if (selectValue === "Autres") {
      const cityEvents = evenements.filter(
        (event) =>
          event.fields.ville !== "Nantes" &&
          event.fields.ville !== "Saint-Herblain" &&
          event.fields.ville !== "Rezé" &&
          event.fields.ville !== "Orvault" &&
          event.fields.ville !== "Saint-Sébastien-sur-Loire"
      );
      setFilteredEvenements(cityEvents);
    }
  }

  return (
    <div className="inputstyle">
      <select onChange={handleLocation}>
        <optgroup label="Nantes" value="Nantes">
          <option value="Nantes">Tous Quartiers</option>
          <option value="Bellevue - Chantenay - Sainte-Anne">
            Bellevue - Chantenay - Sainte-Anne
          </option>
          <option value="Centre-ville">Centre-ville</option>
          <option value="Île de Nantes">Île de Nantes</option>
          <option value="Malakoff - Saint-Donatien">
            Malakoff - Saint-Donatien
          </option>
          <option value="Hauts-Pavés - Saint-Félix">
            Hauts-Pavés - Saint Félix
          </option>
          <option value="Nantes Erdre">Nantes Erdre</option>
          <option value="Dervallières - Zola">Dervallières - Zola</option>
          <option value="Nantes Sud">Nantes Sud</option>
          <option value="Doulon - Bottière">Doulon - Bottière</option>
        </optgroup>
        <optgroup label="Périphérie">
          <option value="Saint-Herblain">Saint-Herblain</option>
          <option value="Rezé">Rezé</option>
          <option value="Saint-Sébastien-sur-Loire">
            Saint-Sébastien-sur-Loire
          </option>
          <option value="Orvault">Orvault</option>
          <option value="Autres">Autres</option>
        </optgroup>
      </select>
      <label htmlFor="free" className="checkbox">
        <div className="">
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
        <div className="">
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
