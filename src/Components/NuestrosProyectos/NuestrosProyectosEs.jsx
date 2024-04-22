import React, { useState } from "react";
import "./NuestrosProyectos.css";
import CarruselProyecto from "../Carrusell/CarruselProyecto";

const proyectos = [
  {
    nombre: "Carga de refrigerante de equipos de clima",
    imagen: "CargaRefrigerante@3x.png",
  },
  {
    nombre: "Instalación, mantenimiento y reparación de aire acondicionado",
    imagen: "ReparacionAireAcondicionado@3x.png",
  },
  {
    nombre: "Instalación de aerotermia Daikin, fríocalor",
    imagen: "AerotermiaDaikin@3x.png",
  },
  {
    nombre: "Instalación de aerotermia Tradesa agua",
    imagen: "AerotermiaTradesa@3x.png",
  },
  {
    nombre: "Puesta en marcha de aire acondicionado Multisplit",
    imagen: "AireAcondicionadoMultisplit@3x.png",
  },
  {
    nombre:
      "Reparación de todos tipos de climas tanto doméstico como industrial",
    imagen: "Climas@3x.png",
  },
  {
    nombre:
      "Revisión de Hiref, ajuste de parámetros y mantenimiento preventivo",
    imagen: "RevisiónHiref@3x.png",
  },
  {
    nombre: "Instalación de Aerotermia en vivienda",
    imagen: "AerotermiaEnVivienda@3x.png",
  },
  {
    nombre:
      "Instalación interior y exterior de aire acondicionado doméstico tipo split",
    imagen: "AireAcondicionadoSplit@3x.png",
  },
];

const NuestrosProyectosEs = () => {
  const [mostrarCarrusel, setMostrarCarrusel] = useState(false);
  const [indiceProyecto, setIndiceProyecto] = useState(0);

  const handleProyectoClick = (index) => {
    setIndiceProyecto(index);
    setMostrarCarrusel(true);
    document.body.classList.add("carrusel-open");
  };

  const handleCloseCarrusel = () => {
    setMostrarCarrusel(false);
    document.body.classList.remove("carrusel-open");
  };

  const handleCambioIndice = (nuevoIndice) => {
    setIndiceProyecto(nuevoIndice);
  };

  // Verificar si el ancho de la pantalla es mayor que 744px (tamaño de tabletas)
  const esDispositivoMovil = window.innerWidth <= 744;

  // Renderizar el carrusel solo si no es un dispositivo móvil
  return (
    <>
      {!esDispositivoMovil && mostrarCarrusel && (
        <CarruselProyecto
          proyectos={proyectos}
          indice={indiceProyecto}
          onClose={handleCloseCarrusel}
          onChangeIndice={handleCambioIndice}
        />
      )}
      <div className="proyectos-content-container">
        <div className="proyectos-background">
          <div className="proyectos-overlay">
            <img
              className="onda-vector-proyectos"
              src="Onda@3x.svg"
              alt="onda naranja"
            />
          </div>
        </div>
        <div className="proyectos-hero-container">
          <h1>Nuestros proyectos</h1>
          <p>
            Descubre algunos de nuestros proyectos realizados a clientes que
            confiaron en nosotros
          </p>
        </div>
      </div>
      <ul className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <li
            key={index}
            className="proyectos-card-container"
            onClick={() => handleProyectoClick(index)}
          >
            <img
              className="proyectos-card-imagen"
              src={proyecto.imagen}
              alt={proyecto.nombre}
            />
            <p>{proyecto.nombre}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NuestrosProyectosEs;
