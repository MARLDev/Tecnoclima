import { useState } from "react";
import { useLanguage } from "../Context/LanguageContext";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuLinkClick = (id) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const targetY = elementRect.top + window.scrollY - 34;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header>
      <div className="header-container">
        <div
          className={`logo-climatecnico-container ${
            isMobileMenuOpen ? "blue" : "transparent"
          }`}
        >
          <NavLink className="icono-home" to="/">
            <img
              className="logo-climatecnico"
              src="LogoTecnoclima@3x.svg"
              alt="logo-Climatecnico"
            />
          </NavLink>
        </div>

        <div className="liks-header nav-desktop">
          <a
            href="/#descripcion"
            className="link"
            onClick={() => handleMenuLinkClick("descripcion")}
          >
            {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
          </a>
          <a
            href="/#servicios"
            className="link"
            onClick={() => handleMenuLinkClick("servicios")}
          >
            {language === "castellano" ? "Servicios" : "Serveis"}
          </a>
          <NavLink
            to="/projects"
            className="link"
            onClick={() => handleMenuLinkClick("projects")}
          >
            {language === "castellano" ? "Proyectos" : "Projectes"}
          </NavLink>
          <NavLink
            to="/contact"
            className="link"
            onClick={() => handleMenuLinkClick("contact")}
          >
            {language === "castellano" ? "Contacto" : "Contacte"}
          </NavLink>
        </div>

        <div className="idiomas-container nav-desktop">
          <span
            onClick={() => {
              toggleLanguage("castellano");
              closeMobileMenu();
            }}
            className={`idioma ${
              language === "castellano" ? "active-idioma" : ""
            }`}
          >
            ES
          </span>
          <span
            onClick={() => {
              toggleLanguage("catalan");
              closeMobileMenu();
            }}
            className={`idioma ${
              language === "catalan" ? "active-idioma" : ""
            }`}
          >
            CAT
          </span>
        </div>

        <div className="nav-mobile">
          <img
            id="hamburguer-open"
            className={`hamburger-menu ${isMobileMenuOpen ? "open" : "close"}`}
            onClick={toggleMobileMenu}
            src={
              !isMobileMenuOpen ? "/HamburgerMenu@3x.svg" : "/CloseMenu@3x.svg"
            }
            alt="icono menu"
          />

          <div className={`dropdown ${isMobileMenuOpen ? "show" : ""}`}>
            <div className="hamburger-menu-option-box">
              <NavLink
                to="/#descripcion"
                className="link-button"
                onClick={() => {
                  closeMobileMenu();
                  handleMenuLinkClick("descripcion");
                }}
              >
                {language === "castellano" ? "¿Quiénes somos?" : "Qui som?"}
              </NavLink>
            </div>
            <div className="hamburger-menu-option-box">
              <NavLink
                to="/#servicios"
                className="link-button"
                onClick={() => {
                  closeMobileMenu();
                  handleMenuLinkClick("servicios");
                }}
              >
                {language === "castellano" ? "Servicios" : "Serveis"}
              </NavLink>
            </div>
            <div className="hamburger-menu-option-box">
              <NavLink
                to="/projects"
                className="link-button"
                onClick={() => {
                  closeMobileMenu();
                  handleMenuLinkClick("projects");
                }}
              >
                {language === "castellano" ? "Proyectos" : "Projectes"}
              </NavLink>
            </div>
            <div className="hamburger-menu-option-box">
              <NavLink
                to="/contact"
                className="link-button"
                onClick={() => {
                  closeMobileMenu();
                  handleMenuLinkClick("contact");
                }}
              >
                {language === "castellano" ? "Contacto" : "Contacte"}
              </NavLink>
            </div>
            <div className="hamburger-menu-option-box">
              <div className="option-box-idiomas">
                <span
                  onClick={() => {
                    toggleLanguage("castellano");
                    closeMobileMenu();
                  }}
                  className={`language-button link-button ${
                    language === "castellano" ? "active-idioma" : ""
                  }`}
                >
                  ES
                </span>
                <span
                  onClick={() => {
                    toggleLanguage("catalan");
                    closeMobileMenu();
                  }}
                  className={`language-button link-button ${
                    language === "catalan" ? "active-idioma" : ""
                  }`}
                >
                  CAT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
