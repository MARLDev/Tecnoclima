import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <div className="modal-header-container">
      <img
        className="modal-icon"
        src="error-circle@3x.svg"
        alt="icono exclamación"
      />
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
