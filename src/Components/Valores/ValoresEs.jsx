import "./Valores.css";

const ValoresEs = () => {
  return (
    <div className="valores">
      <div className="valor-box">
        <img
          className="valor-icon"
          src="Calendar@3x.svg"
          alt="icono calendario"
        />
        <h6>Gestión ágil y eficaz</h6>
        <p>Atendemos tus necesidades con la mayor brevedad posible.</p>
      </div>
      <div className="valor-box">
        <img className="valor-icon" src="Helmet@3x.svg" alt="icono casco" />
        <h6>Profesionales cualificados</h6>
        <p>
          Nuestro equipo está actualizado y formado con las últimas tecnologías.
        </p>
      </div>
      <div className="valor-box">
        <img
          className="valor-icon"
          src="Handshake@3x.svg"
          alt="icono apretón de manos"
        />
        <h6>Asesoría personalizada</h6>
        <p>Estudio detallado de cada caso para ofrecerte la mejor solución.</p>
      </div>
    </div>
  );
};

export default ValoresEs;
