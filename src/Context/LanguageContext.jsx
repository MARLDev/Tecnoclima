import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem("selectedLanguage");
  const [language, setLanguage] = useState(storedLanguage || "castellano");

  const toggleLanguage = () => {
    const newLanguage = language === "castellano" ? "catalan" : "castellano";
    setLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage); // Guarda el idioma seleccionado en localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
