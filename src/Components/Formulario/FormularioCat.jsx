import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import Modal from "../Modal/Modal";
import "./Formulario.css";
import CustomSelect from "../CustomSelect";

const FormularioCat = () => {
  const [state, handleSubmit] = useForm("xqkrdbol");
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
    servicio: "", // Nuevo campo para el dropdown
  });

  useEffect(() => {
    setValidationErrors({});
  }, [isModalOpen]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!formValues.name) {
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

    if (!formValues.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      errors.email = (
        <div className="error-box">
          <img
            className="error-icon"
            src="Error@3x.svg"
            alt="icono exclamación"
          />
          <p className="error-text">El format ha de ser nom@exemple.com</p>
        </div>
      );
    }

    if (!formValues.phone.match(/^[0-9]{9}$/)) {
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

    // Validación específica para el código postal
    if (!formValues.postalCode.match(/^[0-9]{5}$/)) {
      errors.postalCode = (
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

    if (!formValues.servicio) {
      errors.servicio = (
        <div className="error-box">
          <img
            className="error-icon"
            src="Error@3x.svg"
            alt="icono exclamación"
          />
          <p className="error-text">Selecciona una opció</p>
        </div>
      );
    }

    if (!formValues.message) {
      errors.message = (
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

    if (Object.keys(errors).length === 0) {
      await handleSubmit(formValues);

      // Abre el modal
      setIsModalOpen(true);

      // Reinicia los valores de los campos del formulario
      setFormValues({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        message: "",
        servicio: "", // Reiniciar el valor del dropdown
      });
    } else {
      setValidationErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Verificar si el valor seleccionado no es el placeholder
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleServicioSelect = (option) => {
    setFormValues({
      ...formValues,
      ["servicio"]: option.value,
    });
  };

  return (
    <div className="formulario-content-container">
      <div className="formulario-background">
        <div className="formulario-overlay">
          <img
            className="onda-vector-rotate"
            src="Onda@3x.svg"
            alt="onda naranja"
          />
        </div>
      </div>
      <div className="formulario-text-container">
        <div className="text-container">
          <h2>Vols transformar el teu ambient?</h2>
          <h4>Contacta’ns!</h4>
        </div>

        <div className="formulario-container">
          <div className="form-box-box">
            <form
              className="contact-form-content"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="formulario-inputs-content">
                <div className="formulario-inputs-box">
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
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
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Correu electrònic"
                      required
                      value={formValues.email}
                      onChange={handleInputChange}
                    />
                    {validationErrors.email && (
                      <div className="validator-message-box">
                        <p className="validator-message">
                          {validationErrors.email}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="formulario-inputs-box">
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
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
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      placeholder="Codi postal"
                      required
                      pattern="^[0-9]{5}$"
                      value={formValues.postalCode}
                      onChange={handleInputChange}
                    />
                    {validationErrors.postalCode && (
                      <div className="validator-message-box">
                        <p className="validator-message">
                          {validationErrors.postalCode}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="formulario-inputs-box">
                  <div className="formulario-inputs-validation-box">
                    {/* Utiliza el componente CustomSelect en lugar del select nativo */}
                    <CustomSelect
                      name="servicio"
                      options={[
                        {
                          label: "Manteniment, instal·lació i reparació",
                          value: "Mantenimiento, instalación y reparación",
                        },
                        {
                          label: "Aire acondicionat",
                          value: "Aire acondicionado",
                        },
                        { label: "Calefacció", value: "Calefacción" },

                        {
                          label: "Sòl Radiant",
                          value: "Suelo Radiante",
                        },
                        {
                          label: "Domòtica",
                          value: "Domótica",
                        },
                        {
                          label: "Aerotèrmia",
                          value: "Aerotermia",
                        },
                        {
                          label: "Refrigeració de CPD",
                          value: "Refrigeración de CPD",
                        },
                        {
                          label: "Fred industrial",
                          value: "Frío industrial",
                        },
                        {
                          label: "Plaques solares",
                          value: "Placas solares",
                        },
                      ]}
                      onSelect={handleServicioSelect}
                    />
                    {validationErrors.servicio && (
                      <div className="validator-message-box">
                        <p className="validator-message">
                          {validationErrors.servicio}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="formulario-inputs-validation-box">
                  <textarea
                    className="formulario-textarea"
                    name="message"
                    placeholder="Explica'ns més"
                    value={formValues.message}
                    style={{ resize: "none" }} // Evitar redimensionamiento
                    onChange={handleInputChange}
                  />
                  {validationErrors.message && (
                    <div className="validator-message-box">
                      <p className="validator-message">
                        {validationErrors.message}
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
                className="contact-button"
                type="submit"
                disabled={state.submitting || isModalOpen}
              >
                <p>Enviar</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCat;
