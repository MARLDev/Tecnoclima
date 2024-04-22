// Sticky.jsx
import React from "react";
import "./Sticky.css";
import { useLanguage } from "../Context/LanguageContext";

const Sticky = () => {
  const { language } = useLanguage();

  return (
    <div className="sticky-container">
      <div className="sticky-content">
        <p className="solicita">
          {" "}
          {language === "castellano"
            ? "Solicita tu presupuesto"
            : "Sol·licita el teu pressupost"}
        </p>

        <div className="mail-telf-content">
          <a className="mail-content" href="mailto:info@tecnoclima.com.es">
            <img
              className="mail-icon"
              src="ic_baseline-mail@3x.svg"
              alt="mail-icon"
            />
            <p className="mail">info@tecnoclima.com.es</p>
          </a>
          <a className="telefono-content" href="tel:611712312">
            <img className="telefono-icon" src="Phone@3x.svg" alt="telf-icon" />
            <p className="telefono">611 712 312</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
