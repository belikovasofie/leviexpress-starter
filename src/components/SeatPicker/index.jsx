import React, { useState } from 'react';
import './style.css';
import { Seat } from '../Seat';
export const SeatPicker = () => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <Seat number="33" />
        <Seat number="17" />
        <Seat number="5" />
      </div>
      <button className="btn" type="button">
        Rezervovat
      </button>
    </div>
  );
};
