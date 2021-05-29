import React from 'react';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map(({ name, code }) => (
        <option value={code} key={code}>
          {name}
        </option>
      ))}
    </>
  );
};

export default CityOptions;
