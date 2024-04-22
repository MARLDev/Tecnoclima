import { useEffect, useState } from "react";
import "./Hero.css";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "../Modal/Modal";

const HeroCat = () => {
  const [state, handleSubmit] = useForm("mnqebvyj");
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    setValidationErrors({});
  }, [isModalOpen]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameInput = e.target.querySelector('[name="name"]');
    const phoneInput = e.target.querySelector('[name="phone"]');

    const errors = {};

    if (!nameInput.value.trim()) {
      errors.name = (
        <div className="error-box">
          <img
            className="error-icon"
            src="Error@3x.svg"
            alt="icono exclamación"
          />
          <p className="error-text">Completa aquest camp</p>
        </div>
      );
    }

    if (!phoneInput.value.match(/^[0-9\s-]{9,}$/)) {
      errors.phone = (
        <div className="error-box">
          <img
            className="error-icon"
            src="Error@3x.svg"
            alt="icono exclamación"
          />
          <p className="error-text">Format no vàlid</p>
        </div>
      );
    }

    if (Object.keys(errors).length === 0) {
      await handleSubmit(e);

      // Abre el modal
      setIsModalOpen(true);

      // Reinicia los valores de los campos del formulario
      setFormValues({
        name: "",
        phone: "",
      });
    } else {
      setValidationErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-background">
          <div className="hero-overlay">
            <img className="onda-vector" src="Onda@3x.svg" alt="onda naranja" />
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-info-container">
            <h1>EL TEU CONFORT, EN LES MILLORS MANS</h1>
            <p>Experts en sistemes de climatització</p>
          </div>
          <div className="hero-formulario">
            <div className="hero-formulario-info">
              <h5>Vols saber-ne més?</h5>
              <p>
                Deixa'ns el teu mòbil i ens posarem en contacte el més aviat
                possible
              </p>
            </div>
            <div className="form-box-box">
              <form
                className="contact-form-content"
                onSubmit={handleFormSubmit}
                noValidate
              >
                <div className="form-inputs-content">
                  <div className="form-inputs-box">
                    <input
                      className="contact-form-input"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Nom"
                      required
                      value={formValues.name}
                      onChange={handleInputChange}
                    />
                    {validationErrors.name && (
                      <div className="validator-message-box">
                        <p className="validator-message">
                          {validationErrors.name}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="form-inputs-box">
                    <input
                      className="contact-form-input"
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Telèfon"
                      required
                      pattern="^[0-9\s-]{9,}$"
                      maxLength="9" // Limitar a 9 caracteres
                      value={formValues.phone}
                      onChange={handleInputChange}
                    />
                    {validationErrors.phone && (
                      <div className="validator-message-box">
                        <p className="validator-message">
                          {validationErrors.phone}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {isModalOpen && (
                  <Modal setIsModalOpen={setIsModalOpen}>
                    <p className="send-text">
                      El teu missatge s'ha enviat correctament!
                    </p>
                    <p className="send-text-secondary">
                      Aviat ens posarem en contacte amb tu
                    </p>
                  </Modal>
                )}

                <button
                  className="contact-btn"
                  type="submit"
                  disabled={state.submitting || isModalOpen}
                >
                  <p>Truqueu-me</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCat;

/*<img className="onda-vector" src="Onda@3x.svg" alt="onda naranja" />*/
