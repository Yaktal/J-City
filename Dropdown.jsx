// src/components/Dropdown.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Navtitle from './Navtitle';
import Page from './Pages/Page';

const Dropdown = ({ names, options, isOpen, onToggle }) => {
  

  const handleMouseClick = () => {
    onToggle()
  };

  const handleOptionClick = () => {
    isOpen(false);
  };

  return (
    <div className="dropdown"   >
      <button onClick={handleMouseClick}className="dropdown-toggle">{names}<img src='ArrowVector.png' alt=""/></button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <div className="dropdown-item">
              <Link to='/page' key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
              </Link>
            </div>
              
          ))}
        </ul>
      )}
      
      
    </div>
  );
};

export default Dropdown;
