import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      <button className="color-picker__button" onClick={handleButtonClick}>
        {selectedColor ? selectedColor : 'Pick a color'}
      </button>
      {showColors && (
        <ul className="color-picker__list">
          {colors.map((color) => (
            <li
              key={color}
              className="color-picker__item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorPicker;
