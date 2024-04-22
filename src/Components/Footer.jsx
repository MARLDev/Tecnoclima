import { useLanguage } from "../Context/LanguageContext";
import "./Footer.css";

import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Función para manejar el clic en los enlaces del footer
  const handleFooterLinkClick = (id) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(id);
      const elementRect = element.getBoundingClientRect();
      const targetY = elementRect.top + window.scrollY - 34;

      window.scrollTo({ top: targetY, behavior: "smooth" });
    }, 100);
  };
  return (
    <>
      <footer className="footer-desktop">
        <div className="footer-container">
          <Link
            className="icono-home"
            to="/"
            onClick={() => handleFooterLinkClick("home")}
          >
            <img
              className="logo-footer-desktop"
              src="LogoTecnoclima@3x.svg"
              alt="Logo Tecnoclima"
            />
            <img
              className="logo-footer-tablet"
              src="LogoTecnoclima@3x.svg"
              alt="Logo Tecnoclima"
            />
          </Link>
          <div className="footer-info-container">
            <div className="links-footer-container">
              <a
                className="link"
                onClick={() => handleFooterLinkClick("descripcion")}
              >
                {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
              </a>
              <a
                className="link"
                onClick={() => handleFooterLinkClick("servicios")}
              >
                {language === "castellano" ? "Servicios" : "Serveis"}
              </a>
              <Link
                className="link"
                to="/projects"
                onClick={() => handleFooterLinkClick("projects")}
              >
                {language === "castellano" ? "Proyectos" : "Projectes"}
              </Link>
              <Link
                className="link"
                to="/contact"
                onClick={() => handleFooterLinkClick("contact")}
              >
                {language === "castellano" ? "Contacto" : "Contacte"}
              </Link>
              <a
                className="link-insta"
                href="https://www.instagram.com/tecnoclimatizacion/"
              >
                <img
                  className="logo-instagram"
                  src="Instagram@3x.svg"
                  alt="Logo Instagram"
                />
              </a>
            </div>
            <p className="copyrigth">
              © 2023 Tecnoclima. Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer-movile">
        <div className="footer-info-container">
          <div className="links-footer-container">
            <a
              className="link"
              onClick={() => handleFooterLinkClick("descripcion")}
            >
              {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
            </a>
            <a
              className="link"
              onClick={() => handleFooterLinkClick("servicios")}
            >
              {language === "castellano" ? "Servicios" : "Serveis"}
            </a>
            <Link
              className="link"
              to="/projects"
              onClick={() => handleFooterLinkClick("projects")}
            >
              {language === "castellano" ? "Proyectos" : "Projectes"}
            </Link>
            <Link
              className="link"
              to="/contact"
              onClick={() => handleFooterLinkClick("contact")}
            >
              {language === "castellano" ? "Contacto" : "Contacte"}
            </Link>
          </div>

          <a
            className="link-insta"
            href="https://www.instagram.com/tecnoclimatizacion/"
          >
            <img
              className="logo-instagram"
              src="Instagram@3x.svg"
              alt="Logo Instagram"
            />
          </a>
        </div>
        <div className="logo-copyright-container">
          <Link
            className="icono-home"
            to="/"
            onClick={() => handleFooterLinkClick("home")}
          >
            <img
              className="logo-footer-mobile "
              src="LogoTecnoclimaMobile@3x.svg"
              alt="Logo Tecnoclima"
            />
          </Link>
          <p className="copyrigth">
            © 2023 Tecnoclima. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
