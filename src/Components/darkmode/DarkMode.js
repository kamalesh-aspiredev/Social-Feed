import React from "react";
import "./darkmode.css";

// fontawe
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  const darkHandle = () => {
    document.querySelector("body").classList.toggle("darkmode");
  };
  return (
    <div className="dark-mode-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={darkHandle} />
    </div>
  );
}
