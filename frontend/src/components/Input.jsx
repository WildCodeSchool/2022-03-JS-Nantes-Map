import "./Input.css";
import React, { useState, useEffect } from "react";

export default function Input({ setFilteredEvenements, evenements }) {
  const [selectedBoxes, setSelectedBoxes] = useState({
    gratuit: "non",
    accueil_enfant: "non",
  });

  function handleCheck(type, state) {
    selectedBoxes[type] = state ? "oui" : "non";
    setSelectedBoxes({
      gratuit: selectedBoxes.gratuit,
      accueil_enfant: selectedBoxes.accueil_enfant,
    });
  }

  useEffect(() => {
    const freeEvents = evenements.filter(
      (event) =>
        event.fields.gratuit === selectedBoxes.gratuit &&
        event.fields.accueil_enfant === selectedBoxes.accueil_enfant
    );
    setFilteredEvenements(freeEvents);
  }, [selectedBoxes]);

  function handleLocation(e) {
    const selectValue = e.target.value;
    const selectOpt = e.target.selectedOptions[0].parentElement.dataset.value;
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
    } else if (selectOpt === "Agenda") {
      setFilteredEvenements(evenements);
    } else {
      const cityEvents = evenements.filter(
        (event) => event.fields[selectOpt] === selectValue
      );
      setFilteredEvenements(cityEvents);
    }
  }

  return (
    <div className="inputstyle">
      <select onChange={handleLocation}>
        <optgroup data-value="Agenda" label="Agenda" value="Agenda">
          <option label="Tous les événements" value="Tous les événements" />
        </optgroup>
        <optgroup
          data-value="ville"
          label="Nantes (tout)"
          value="Nantes (tout)"
        >
          <option value="Nantes">Tous les quartiers</option>
        </optgroup>
        <optgroup
          data-value="lieu_quartier"
          label="Quartiers de Nantes"
          value="Nantes"
        >
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
        <optgroup data-value="ville" label="Périphérie">
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
            onChange={(e) => handleCheck("gratuit", e.target.checked)}
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
            onChange={(e) => handleCheck("accueil_enfant", e.target.checked)}
          />
        </div>
      </label>
    </div>
  );
}
