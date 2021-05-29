import React from 'react';
import './style.css';

const getClassName = (isOccupied, isSelected) => {
  let className = 'seat';
  if (isOccupied) {
    className += ' seat--occupied';
  }
  if (isSelected) {
    className += ' seat--selected';
  }
  return className;
};

export const Seat = ({ number, isOccupied, isSelected, onSelect }) => {
  return (
    <svg
      className={getClassName(isOccupied, isSelected)}
      viewBox="0 0 100 100"
      role="button"
      onClick={() => !isOccupied && onSelect(number)}
    >
      <rect
        className="seat__rect"
        width="80"
        height="80"
        x="14"
        y="10"
        rx="15"
        ry="15"
      />
      <path className="seat__path" d="M 65,10 H 25 C 5,35 5,65 25,90 H 65" />
      <text className="seat__text" x="55" y="65">
        {number}
      </text>
    </svg>
  );
};
