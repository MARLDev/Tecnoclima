import { useEffect, useState } from "react";
import "./Hero.css";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "../Modal/Modal";

const HeroES = () => {
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
          <p className="error-text">Completa este campo</p>
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
          <p className="error-text">Formato no válido</p>
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
            <h1>tu confort, en las mejores manos</h1>
            <p>Expertos en sistemas de climatización</p>
          </div>
          <div className="hero-formulario">
            <div className="hero-formulario-info">
              <h5>¿Quieres saber más?</h5>
              <p>
                Déjanos tu móvil y nos pondremos en contacto en la mayor
                brevedad
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
                      placeholder="Nombre"
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
                      placeholder="Teléfono"
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
                      ¡Tu mensaje se ha enviado correctamente!
                    </p>
                    <p className="send-text-secondary">
                      Pronto nos pondremos en contacto contigo
                    </p>
                  </Modal>
                )}

                <button
                  className="contact-btn"
                  type="submit"
                  disabled={state.submitting || isModalOpen}
                >
                  <p>Llamádme</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroES;
