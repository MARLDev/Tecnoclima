import React, { useState } from "react";
import "./CustomSelect.css";

const CustomSelect = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={toggleSelect}>
        {selectedOption ? selectedOption.label : "Interesado en..."}
        {/* Renderizado condicional de los iconos */}
        {!isOpen && (
          <img
            className="dropdown-icon"
            src="DropDownOpen@3x.svg"
            alt="Open Drop Down"
          />
        )}
        {isOpen && (
          <img
            className="dropdown-icon"
            src="DropDownClose@3x.svg"
            alt="Close Drop Down"
          />
        )}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
