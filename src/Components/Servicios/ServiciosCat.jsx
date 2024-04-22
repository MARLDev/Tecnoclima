import "./Servicios.css";

const ServiciosCat = () => {
  return (
    <div id="servicios" className="servicios-container">
      <h2>Els nostres serveis</h2>
      <div className="servicios-cards-container">
        <div className="card-servicio">
          <img
            className="servicio-imagen-card"
            src="mantenimiento@3x.png"
            alt="mantenimiento"
          />
          <div className="servicio-text-card">
            <h5>Manteniment, instal·lació i reparació</h5>
            <p>
              Confia en els nostres professionals per al manteniment de les
              teves instal·lacions, garantint un servei de qualitat i durador.
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
            <h5>Aire acondicionat</h5>
            <p>
              Conserva els teus ambients a la temperatura ideal sense importar
              en quina estació et trobis.
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
            <h5>Calefacció</h5>
            <p>
              Treballem amb sistemes de calefacció eficients i adaptats a les
              teves necessitats.
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
            <h5>Sòl radiant</h5>
            <p>
              Augmenta el confort de casa teva al màxim amb calor uniforme,
              eficiència energètica i la capacitat de refrigeració a l'estiu.
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
            <h5>Domòtica</h5>
            <p>
              Automatitza la teva llar amb el nostre servei de domòtica,
              proporcionant comoditat i control intel·ligent a cada racó.
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
            <h5>Aerotèrmia</h5>
            <p>
              Aprofitant l'energia renovable de l'aire, aconsegueix eficiència,
              confort i sostenibilitat en els teus sistemes de climatització.
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
            <h5>Refrigeració de CPD</h5>
            <p>
              Optimitza el funcionament del teu Centre de Processament de Dades
              amb el nostre servei de refrigeració, per a un ambient informàtic
              controlat i amb un rendiment òptim.
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
            <h5>Fred industrial</h5>
            <p>
              Maximitza la teva eficiència amb el nostre servei de fred
              industrial, mitjançant un control tèrmic precís, estalvi energètic
              i un rendiment fiable.
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
            <h5>Plaques solars</h5>
            <p>
              Garanteix l'estalvi energètic, la independència elèctrica i una
              empremta ambiental reduïda amb aquesta energia renovable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosCat;
