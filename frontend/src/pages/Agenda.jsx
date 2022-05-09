import React, { useState, useEffect } from "react";
import "./Agenda.css";
import EvenementCard from "@components/EvenementCard";
import Input from "@components/Input";
import ButtonAgenda from "@components/ButtonAgenda";
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
import ScrollButton from "@components/ScrollButton";

function Agenda() {
  const [evenements, setEvenements] = useState([]);
  const [filteredEvenements, setFilteredEvenements] = useState([]);
  const [maxRange, setMaxRange] = useState(10);

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
        setFilteredEvenements(incomingEvents);
      });
  }, []);

  function loadMore() {
    setMaxRange((prevRange) => prevRange + 8);
  }

  function eventSport() {
    const filterSport = evenements.filter(
      (event) => event.fields.rubrique === "Sport"
    );
    return filterSport;
  }

  return (
    <div className="Agenda">
      <h1>AGENDA</h1>
      <h2 className="alignpictoscategories">
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Théâtre", "Film", "Cirque", "Magie"]}
          icon={faMasksTheater}
        />
        <button type="button" className="pictoscategories">
          <FontAwesomeIcon
            icon={faFootball}
            className="pictoagenda"
            onClick={() => setFilteredEvenements(eventSport(evenements))}
          />{" "}
        </button>
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Salon", "Atelier", "Visite"]}
          icon={faSignsPost}
        />
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Musique", "Chanson", "Danse", "Fanfare", "Poésie"]}
          icon={faMusic}
        />
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Brocante", "Marché"]}
          icon={faBasketShopping}
        />
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Conte", "Rencontre", "Conférence", "Activité"]}
          icon={faBookOpen}
        />
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Jeu", "Fête"]}
          icon={faGamepad}
        />
        <ButtonAgenda
          setFilteredEvenements={setFilteredEvenements}
          evenements={evenements}
          filters={["Expositions"]}
          icon={faPalette}
        />
      </h2>

      <Input
        evenements={evenements}
        setFilteredEvenements={setFilteredEvenements}
      />
      <div className="listeagenda">
        {filteredEvenements.slice(0, maxRange).map((evenement) => (
          <EvenementCard key={evenement.recordid} event={evenement} />
        ))}
        <ScrollButton />
      </div>
      <button type="button" className="load-button" onClick={loadMore}>
        {`Voir plus d'événements`}
      </button>
    </div>
  );
}

export default Agenda;
