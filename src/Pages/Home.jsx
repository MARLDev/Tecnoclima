import React, { useEffect } from "react";
import HeroCat from "../Components/Hero/HeroCat";
import DescripcionCat from "../Components/Descripcion/DescripcionCat";
import DescripcionES from "../Components/Descripcion/DescripcionES";
import ValoresCat from "../Components/Valores/ValoresCat";
import ValoresEs from "../Components/Valores/ValoresEs";
import ServiciosCat from "../Components/Servicios/ServiciosCat";
import ServiciosES from "../Components/Servicios/ServiciosES";
import FormularioCat from "../Components/Formulario/FormularioCat";
import FormularioEs from "../Components/Formulario/FormularioEs";
import { useLanguage } from "../Context/LanguageContext";
import "./Home.css";
import HeroES from "../Components/Hero/HeroES";

const Home = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Detectar si hay un hash en la URL y desplazarse a la sección correspondiente
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      {language === "castellano" ? (
        <div id="home" className="home">
          <HeroES />
          <DescripcionES />
          <ValoresEs />
          <ServiciosES />
          <FormularioEs />
        </div>
      ) : (
        <>
          <div id="home" className="home">
            <HeroCat />
            <DescripcionCat />
            <ValoresCat />
            <ServiciosCat />
            <FormularioCat />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
