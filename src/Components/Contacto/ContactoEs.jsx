import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import "./Contacto.css";
import { useForm } from "@formspree/react";
import CustomSelect from "../CustomSelect";
import Mapa from "../Mapa";

const ContactoEs = () => {
  const [state, handleSubmit] = useForm("xqkrdbol");
  const [validationErrors, setValidationErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
    servicio: "",
  });

  useEffect(() => {
    setValidationErrors({});
  }, [isModalOpen]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Validaciones...

    if (Object.keys(errors).length === 0) {
      await handleSubmit(formValues);
      setIsModalOpen(true);
      setFormValues({
        name: "",
        email: "",
        phone: "",
        postalCode: "",
        message: "",
        servicio: "",
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

  const handleServicioSelect = (option) => {
    setFormValues({
      ...formValues,
      ["servicio"]: option.value,
    });
  };

  return (
    <>
      <div className="contacto-content-container">
        <div className="contacto-background">
          <div className="contacto-overlay">
            <img
              className="onda-vector-contacto"
              src="Onda@3x.svg"
              alt="onda naranja"
            />
          </div>
        </div>
        <div className="contacto-hero-container">
          <h1>¿Quieres transformar tu ambiente?</h1>
          <div className="text-hero-subtitle">
            <p>
              Contacta con nosotros para que podamos asesorarte y ofrecerte la
              mejor opción
            </p>
            <p>¡Estaremos encantados de ayudarte!</p>
          </div>
        </div>
      </div>
      <div className="datos-contacto-container">
        <h2>Contacto</h2>
        <div className="datos-contacto-content-box">
          <div className="content-box-contacto box-first">
            <a
              className="datos-contacto-box"
              href="mailto:info@tecnoclima.com.es"
            >
              <img
                className="contacto-icon"
                src="Mail@3x.svg"
                alt="icono e-mail"
              />
              <h4>info@tecnoclima.com.es</h4>
            </a>
            <a
              className="datos-contacto-box"
              href="https://api.whatsapp.com/send?phone=34611712312"
            >
              <img
                className="contacto-icon"
                src="Whatsapp@3x.svg"
                alt="icono whatsapp"
              />
              <h4>611 712 312</h4>
            </a>
            <a className="datos-contacto-box" href="tel:934186418">
              <img
                className="contacto-icon"
                src="Phone-contacto@3x.svg"
                alt="icono teléfono"
              />
              <h4>93 418 64 18</h4>
            </a>
          </div>
          <div className="content-box-contacto">
            <a
              className="datos-contacto-box"
              href="https://www.instagram.com/tecnoclimatizacion/"
            >
              <img
                className="contacto-icon"
                src="Instagram-contacto@3x.svg"
                alt="icono instagram"
              />
              <h4>@tecnoclimatización</h4>
            </a>
            <a className="datos-horario-box">
              <img
                className="contacto-icon"
                src="Reloj@3x.svg"
                alt="icono reloj"
              />
              <div className="horario-content">
                <p>
                  <b>Lunes a jueves:</b> 8:00h a 13:00h - 15:00h a 18:00h
                </p>
                <p>
                  <b>Viernes:</b> 8:00h a 14:00h
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mapa-container">
        <Mapa />
      </div>
      <div className="contacto-formulario-container">
        <h2>¡Escríbenos!</h2>
        <div className="formulario-container-box">
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
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
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
                  <div className="formulario-inputs-validation-box">
                    <input
                      className="formulario-input"
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      placeholder="Código postal"
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
                <div className="formulario-inputs-validation-box">
                  <CustomSelect
                    className="formulario-input-select"
                    name="servicio"
                    options={[
                      { label: "Interesado en...", value: "" },
                      {
                        label: "Mantenimiento, instalación y reparación",
                        value: "Mantenimiento, instalación y reparación",
                      },
                      {
                        label: "Aire acondicionado",
                        value: "Aire acondicionado",
                      },
                      { label: "Calefacción", value: "Calefacción" },
                      {
                        label: "Suelo Radiante",
                        value: "Suelo Radiante",
                      },
                      { label: "Domótica", value: "Domótica" },
                      { label: "Aerotermia", value: "Aerotermia" },
                      {
                        label: "Refrigeración de CPD",
                        value: "Refrigeración de CPD",
                      },
                      {
                        label: "Frío industrial",
                        value: "Frío industrial",
                      },
                      { label: "Placas solares", value: "Placas solares" },
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
                <div className="formulario-inputs-validation-box">
                  <textarea
                    className="formulario-textarea"
                    name="message"
                    placeholder="Cuéntanos más"
                    value={formValues.message}
                    style={{ resize: "none" }}
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
                    ¡Tu mensaje se ha enviado correctamente!
                  </p>
                  <p className="send-text-secondary">
                    Pronto nos pondremos en contacto contigo
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
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <p className="send-text">¡Tu mensaje se ha enviado correctamente!</p>
          <p className="send-text-secondary">
            Pronto nos pondremos en contacto contigo
          </p>
        </Modal>
      )}
    </>
  );
};

export default ContactoEs;
