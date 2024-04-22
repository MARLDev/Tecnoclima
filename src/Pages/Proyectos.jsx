import NuestrosProyectosCat from "../Components/NuestrosProyectos/NuestrosProyectosCat";
import NuestrosProyectosEs from "../Components/NuestrosProyectos/NuestrosProyectosEs";
import { useLanguage } from "../Context/LanguageContext";
import "./Proyectos.css";

const Proyectos = () => {
  const { language } = useLanguage();

  return (
    <div id="projects">
      {language === "castellano" ? (
        <div className="proyectos-page">
          <NuestrosProyectosEs />
        </div>
      ) : (
        <div className="proyectos-page">
          <NuestrosProyectosCat />
        </div>
      )}
    </div>
  );
};

export default Proyectos;
