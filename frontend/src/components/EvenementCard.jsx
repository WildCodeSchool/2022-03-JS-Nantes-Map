import React from "react";
import "./EvenementCard.css";

export default function EvenementCard({ event }) {
  return (
    <div className="EvenementCard">
      <h3>{event.fields.nom}</h3>
      <img className="photo" src={event.fields.media_url} alt="evenement.nom" />

      <p className="description-event">{event.fields.description}</p>

      <img className="icone" src="src/assets/date.png" alt="icone date" />

      <p>{event.fields.date}</p>

      <img className="icone" src="src/assets/lieu.png" alt="icone lieu" />

      <p>{event.fields.lieu}</p>

      <button className="buttonecard" type="button">
        <a className="textebutton" href={event.fields.lien_agenda} target="_blank" rel="noreferrer">
          En savoir plus...
        </a>
      </button>
    </div>
  );
}
