/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import EvenementCard from "@components/EvenementCard";
import "./Home.css";

export default function Home() {
  const [randomEvent, setRandomEvent] = useState(null);
  const [freeEvent, setFreeEvent] = useState(null);

  function fetchData() {
    fetch(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&rows=5645"
    )
      .then((res) => res.json())
      .then((data) => {
        const incomingEvents = data.records.filter((event) =>
          isNotFinished(event.fields.date)
        );
        generateRandomEvent(incomingEvents);
        generateFreeEvent(incomingEvents);
      });
  }

  function isNotFinished(date) {
    const eventDate = new Date(date).setHours(0, 0, 0, 0);
    const todayDate = new Date().setHours(0, 0, 0, 0);
    if (eventDate >= todayDate) {
      return true;
    }
    return false;
  }

  function generateRandomEvent(events) {
    const rand = Math.floor(Math.random() * events.length);
    const randEvent = events[rand];
    setRandomEvent(randEvent);
  }

  function generateFreeEvent(events) {
    const freeEvents = events.filter((event) => event.fields.gratuit === "oui");
    const rand = Math.floor(Math.random() * freeEvents.length);
    const randomFreeEvent = freeEvents[rand];
    setFreeEvent(randomFreeEvent);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (randomEvent && freeEvent) {
    return (
      <div className="body-homepage">
        <div className="description">
          <p className="presa-page">
            MAP : Monuments, Arts et Patrimoine. 
            <br />{`C'est le site qui référence
            l'offre culturel à Nantes pour tous. Vous aurez accès à l'agenda des
            événements culturels, à une carte des endroits mémorables de la
            ville, ainsi que la liste des équipements culturels.`}
          </p>
        </div>
        <div className="align-cards">
          <div className="event-soon">
            <h1>CA SE PASSE BIENTOT...</h1>
            <EvenementCard event={randomEvent} />
          </div>

          <div className="event-free">
            <h1>{`CA SE PASSE BIENTOT... ET C'EST GRATUIT!`}</h1>
            <EvenementCard event={freeEvent} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <img
      src="https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif"
      alt="loading"
      className="loading-img"
    />
  );
}
