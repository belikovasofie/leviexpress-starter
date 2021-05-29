import React, { useState } from 'react';
import './style.css';
import { Seat } from '../Seat';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ seats, journeyId }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow key={index} row={row} />
        ))}
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
