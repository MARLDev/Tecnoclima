import "./Valores.css";

const ValoresCat = () => {
  return (
    <div className="valores">
      <div className="valor-box">
        <img
          className="valor-icon"
          src="Calendar@3x.svg"
          alt="icono calendario"
        />
        <h6>Gestió àgil i eficaç</h6>
        <p>Atenem les teves necessitats el més aviat possible.</p>
      </div>
      <div className="valor-box">
        <img className="valor-icon" src="Helmet@3x.svg" alt="icono casco" />
        <h6>Professionals qualificats</h6>
        <p>
          El nostre equip està actualitzat i format amb les últimes tecnologies.
        </p>
      </div>
      <div className="valor-box">
        <img
          className="valor-icon"
          src="Handshake@3x.svg"
          alt="icono apretón de manos"
        />
        <h6>Assessoria personalitzada</h6>
        <p>Estudi detallat de cada cas per oferir-te la millor solució.</p>
      </div>
    </div>
  );
};

export default ValoresCat;
