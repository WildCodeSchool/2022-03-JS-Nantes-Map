import React from "react";
import "./EvenementCard.css";

export default function EvenementCard({ event }) {
  return (
    <figure className="EvenementCard">
      <h3>{event.fields.nom}</h3>
      <img src={event.fields.media_url} alt="evenement.nom" />
      <figcaption>
        <p className="description-event">{event.fields.description}</p>
        <p>Date: {event.fields.date}</p>
        <p>Lieu: {event.fields.lieu}</p>
        <p>
          <a href={event.fields.lien_agenda} target="_blank" rel="noreferrer">
            En savoir plus...
          </a>
        </p>
      </figcaption>
    </figure>
  );
}
