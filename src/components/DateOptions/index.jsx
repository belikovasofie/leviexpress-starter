import React from 'react';
const DateOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map(({ dateBasic, dateExtended }) => (
        <option value={dateBasic} key={dateBasic}>
          {dateExtended}
        </option>
      ))}
    </>
  );
};
export default DateOptions;
