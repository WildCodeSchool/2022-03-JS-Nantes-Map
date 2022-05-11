import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <h1 className="titleslogan"> {`PARTEZ À L'AVENTURE DE LA CULTURE`} </h1>
      <h2 className="alignpictos">
        <button
          type="button"
          className="pictoreseaux"
          onClick={() => {
            window.location.href = "/https://www.facebook.com";
          }}
        >
          <FontAwesomeIcon icon={faFacebook} className="pictoFooter" />{" "}
        </button>
        <button
          type="button"
          className="pictoreseaux"
          onClick={() => {
            window.location.href = "/https://twitter.com";
          }}
        >
          <FontAwesomeIcon icon={faTwitter} className="pictoFooter" />{" "}
        </button>
        <button
          type="button"
          className="pictoreseaux"
          onClick={() => {
            window.location.href = "/https://www.instagram.com";
          }}
        >
          <FontAwesomeIcon icon={faInstagram} className="pictoFooter" />{" "}
        </button>
      </h2>
    </footer>
  );
}
