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
  const [filterEvenements, setFilterEvenements] = useState([]);
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
        const incomingEvents = data.records
          .filter((event) => isComing(event.fields.date))
          .sort((event1, event2) => {
            return new Date(event1.fields.date) - new Date(event2.fields.date);
          });
        setEvenements(incomingEvents);
        setFilterEvenements(incomingEvents);
      });
  }, []);

  function eventSpectacle() {
    const filterSpectacle = evenements.filter(
      (event) =>
        event.fields.type.includes("Théâtre") ||
        event.fields.type.includes("Film") ||
        event.fields.type.includes("Cirque") ||
        event.fields.type.includes("Magie")
    );
    return filterSpectacle;
  }

  function eventSport() {
    const filterSport = evenements.filter(
      (event) => event.fields.rubrique === "Sport"
    );
    return filterSport;
  }

  function eventVisit() {
    const filterVisit = evenements.filter(
      (event) =>
        event.fields.type.includes("Salon") ||
        event.fields.type.includes("Atelier") ||
        event.fields.type.includes("Visite")
    );
    return filterVisit;
  }

  function eventMusic() {
    const filterMusic = evenements.filter(
      (event) =>
        event.fields.type.includes("Musique") ||
        event.fields.type.includes("Chanson") ||
        event.fields.type.includes("Danse") ||
        event.fields.type.includes("Fanfare") ||
        event.fields.type.includes("Poésie")
    );
    return filterMusic;
  }

  function eventBasketShopping() {
    const filterBasketShopping = evenements.filter(
      (event) =>
        event.fields.type.includes("Brocante") ||
        event.fields.type.includes("Marché")
    );
    return filterBasketShopping;
  }

  function eventBook() {
    const filterBook = evenements.filter(
      (event) =>
        event.fields.type.includes("Conte") ||
        event.fields.type.includes("Rencontre") ||
        event.fields.type.includes("Conférence") ||
        event.fields.type.includes("Activité")
    );
    return filterBook;
  }

  function eventGame() {
    const filterGame = evenements.filter(
      (event) =>
        event.fields.type.includes("Jeu") || event.fields.type.includes("Fête")
    );
    return filterGame;
  }

  function eventArt() {
    const filterArt = evenements.filter((event) =>
      event.fields.type.includes("Expositions")
    );
    return filterArt;
  }

  return (
    <div className="Agenda">
      <h1>AGENDA</h1>
      <h2 className="alignpictoscategories">
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faMasksTheater}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventSpectacle(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faFootball}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventSport(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faSignsPost}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventVisit(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faMusic}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventMusic(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventBasketShopping(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventBook(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faGamepad}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventGame(evenements))}
          />{" "}
        </button>
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faPalette}
            className="pictoagenda"
            onClick={() => setFilterEvenements(eventArt(evenements))}
          />{" "}
        </button>
      </h2>

      <h3 className="listeagenda">
        {filterEvenements.map((evenement) => (
          <EvenementCard event={evenement} />
        ))}
      </h3>
    </div>
  );
}

export default Agenda;
