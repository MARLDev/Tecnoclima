import { useState } from "react";
import CarruselProyecto from "../Carrusell/CarruselProyecto";
import "./NuestrosProyectos.css";
const proyectos = [
  {
    nombre: "Càrrega de refrigerant per a equips de climatització",
    imagen: "CargaRefrigerante@3x.png",
  },
  {
    nombre: "Instal·lació, manteniment i reparació de l'aire condicionat",
    imagen: "ReparacionAireAcondicionado@3x.png",
  },
  {
    nombre: "Instal·lació d'aerotèrmia Daikin, fred-calor",
    imagen: "AerotermiaDaikin@3x.png",
  },
  {
    nombre: "Instal·lació d'aerotèrmia Tradesa amb aigua",
    imagen: "AerotermiaTradesa@3x.png",
  },
  {
    nombre: "Posada en marxa d'aire condicionat Multisplit",
    imagen: "AireAcondicionadoMultisplit@3x.png",
  },
  {
    nombre:
      "Reparació de tot tipus de climatització, tant domèstica com industrial",
    imagen: "Climas@3x.png",
  },
  {
    nombre:
      "Revisió de Hiref, ajustament de paràmetres i manteniment preventiu",
    imagen: "RevisiónHiref@3x.png",
  },
  {
    nombre: "Instal·lació d'aerotèrmia en habitatge",
    imagen: "AerotermiaEnVivienda@3x.png",
  },
  {
    nombre:
      "Instal·lació interior i exterior d'aire condicionat domèstic de tipus split",
    imagen: "AireAcondicionadoSplit@3x.png",
  },
];

const NuestrosProyectosCat = () => {
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
          <h1>ELS NOSTRES PROJECTES</h1>
          <p>
            Descobreix alguns dels nostres projectes realitzats per a clients
            que van confiar en nosaltres
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

export default NuestrosProyectosCat;
