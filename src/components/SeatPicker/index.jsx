import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { SeatRow } from '../SeatRow';
import './style.css';

export const SeatPicker = ({ seats, journeyId }) => {
  const { push } = useHistory();
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleBuy = () => {
    fetch('https://leviexpress-backend.herokuapp.com/api/reserve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seat: selectedSeatNumber,
        journeyId,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        const reservationId = json.data.reservationId;
        push(`/reservation/${reservationId}`);
      });
  };

  const handleSeatSelect = (number) => {
    setSelectedSeatNumber(number);
  };

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow
            key={index}
            row={row}
            onSeatSelected={handleSeatSelect}
            selectedSeatNumber={selectedSeatNumber}
          />
        ))}
      </div>
      <button
        disabled={selectedSeatNumber === null}
        onClick={handleBuy}
        className="btn"
        type="button"
      >
        Rezervovat
      </button>
    </div>
  );
};
