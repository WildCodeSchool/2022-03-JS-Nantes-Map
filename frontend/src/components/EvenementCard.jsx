import React from "react";
import "./EvenementCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";

export default function EvenementCard({ event }) {
  return (
    <div className="EvenementCard">
      <h3 className="title">{event.fields.nom}</h3>
      <div className="bloc-descri">
        <img
          className="photo"
          src={event.fields.media_url}
          alt="evenement.nom"
        />

        <p className="description-event">{event.fields.description}</p>
      </div>
      <div className="AwesomeIcon">
        <div className="bloclieu">
          <FontAwesomeIcon icon={faLocationDot} className="Icon" />
          <p className="lieu">
            {event.fields.lieu}
            <br />
            {event.fields.ville}
            <br />
            {event.fields.lieu_quartier}
          </p>
        </div>
        <div className="blocdate">
          <FontAwesomeIcon icon={faCalendarDays} className="Icon" />
          <p>{event.fields.date}</p>
        </div>
        <div className="KidandFree">
          <div>
            <FontAwesomeIcon icon={faChildren} className="Icon" />
            <p className="enfant">{event.fields.accueil_enfant}</p>
          </div>
          <div>
            <h4>GRATUIT</h4>
            <p className="gratuit">{event.fields.gratuit}</p>
          </div>
        </div>
      </div>


      <button className="buttonecard" type="button">
        <a
          className="textebutton"
          href={event.fields.lien_agenda}
          target="_blank"
          rel="noreferrer"
        >
          En savoir plus...
        </a>
      </button>
    </div>
  );
}
