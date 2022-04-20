import React from "react";
import "./EvenementCard.css";

export default function EvenementCard() {
  return (
    <figure className="EvenementCard">
      <img src="evenement.image" alt="evenement.nom" />
      <figcaption>
        <h3>evenement.nom</h3>
        <p>evenement.description</p>
        <p>evenement.date</p>
        <p>evenement.lieu</p>
        <p>evenement.url</p>
      </figcaption>
    </figure>
  );
}
