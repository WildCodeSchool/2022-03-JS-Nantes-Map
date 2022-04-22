import React, { useState, useEffect } from "react";
import "./Agenda.css";
import EvenementCard from "@components/EvenementCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMasksTheater,
  faFootball,
  faSignsPost,
  faMusic,
  faBasketShopping,
  faBookOpen,
  faGamepad,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function Agenda() {
  const [evenements, setEvenements] = useState([]);
  function isComing(date) {
    const dateToday = new Date().setHours(0, 0, 0, 0);
    const dateEvent = new Date(date).setHours(0, 0, 0, 0);
    if (dateEvent >= dateToday) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    fetch(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=5645"
    )
      .then((res) => res.json())
      .then((data) => {
        const incomingEvents = data.records.filter((event) =>
          isComing(event.fields.date)
        );
        setEvenements(incomingEvents);
      });
  }, []);

  return (
    <div className="Agenda">
      <h1>AGENDA</h1>
      <h2 className="alignpictoscategories">
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faMasksTheater} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faFootball} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faSignsPost} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faMusic} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faBasketShopping} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faBookOpen} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faGamepad} className="pictoagenda" />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon icon={faPalette} className="pictoagenda" />{" "}
        </button>
      </h2>

      <h3 className="listeagenda">
        {evenements.map((evenement) => (
          <EvenementCard event={evenement} />
        ))}
      </h3>
    </div>
  );
}

export default Agenda;
