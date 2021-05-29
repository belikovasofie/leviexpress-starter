import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({ row, onSeatSelected, selectedSeatNumber }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={selectedSeatNumber === seat.number}
          onSelect={onSeatSelected}
        />
      ))}
    </div>
  );
};
