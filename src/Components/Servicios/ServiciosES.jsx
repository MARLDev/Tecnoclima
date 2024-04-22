import "./Servicios.css";

const ServiciosES = () => {
  return (
    <div id="servicios" className="servicios-container">
      <h2>Nuestros servicios</h2>
      <div className="servicios-cards-container">
        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="mantenimiento@3x.png"
            alt="mantenimiento"
          />
          <div className="servicio-text-card">
            <h5>Mantenimiento, instalación y reparación</h5>
            <p>
              Confía en nuestros profesionales para el cuidado de tus
              instalaciones, garantizando un servicio de calidad y duradero.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="AireAcondicionado@3x.png"
            alt="Aire acondicionado"
          />
          <div className="servicio-text-card">
            <h5>Aire acondicionado</h5>
            <p>
              Mantén tus ambientes a la temperatura ideal sin importar en qué
              estación te encuentres.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="Calefaccion@3x.png"
            alt="Calefacción"
          />
          <div className="servicio-text-card">
            <h5>Calefacción</h5>
            <p>
              Trabajamos con sistemas de calefacción eficientes y adaptados a
              tus necesidades.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="SueloRadiante@3x.png"
            alt="Suelo radiante"
          />
          <div className="servicio-text-card">
            <h5>Suelo radiante</h5>
            <p>
              Eleva el confort de tu hogar al máximo con calor uniforme,
              eficiencia energética y la capacidad de refrigeración en verano.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="Domotica@3x.png"
            alt="Domótica"
          />
          <div className="servicio-text-card">
            <h5>Domótica</h5>
            <p>
              Automatiza tu hogar con nuestro servicio de domótica, brindando
              comodidad y control inteligente en cada rincón.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="Aerotermia@3x.png"
            alt="Aerotermia"
          />
          <div className="servicio-text-card">
            <h5>Aerotermia</h5>
            <p>
              Aprovechando la energía renovable del aire logra eficiencia,
              confort y sostenibilidad en tus sistemas de climatización.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="RefrigeraciónCPD@3x.png"
            alt="Refrigeración de CPD"
          />
          <div className="servicio-text-card">
            <h5>Refrigeración de CPD</h5>
            <p>
              Optimiza el funcionamiento de tu Centro de Procesamiento de Datos
              con nuestro servicio de refrigeración, para un ambiente
              informático controlado y con un rendimiento óptimo.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="FríoIndustrial@3x.png"
            alt="Frío industrial"
          />
          <div className="servicio-text-card">
            <h5>Frío industrial</h5>
            <p>
              Maximiza tu eficiencia con nuestro servicio de frío industrial, a
              través de un control térmico preciso, ahorro energético y un
              rendimiento fiable.
            </p>
          </div>
        </div>

        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="PlacasSolares@3x.png"
            alt="Placas solares"
          />
          <div className="servicio-text-card">
            <h5>Placas solares</h5>
            <p>
              Garantiza el ahorro energético, independencia eléctrica y una
              huella ambiental reducida con esta energía renovable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosES;
