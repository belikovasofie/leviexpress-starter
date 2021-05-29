import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';
import CityOptions from '../CityOptions';
import DateOptions from '../DateOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');

  const [dates, setDates] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((resp) => resp.json())
      .then((json) => setCities(json.data));
  }, []);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((resp) => resp.json())
      .then((json) => setDates(json.data));
  }, []);

  const handleFromCityChange = (e) => {
    setFromCity(e.target.value);
  };
  const handleToCityChange = (e) => {
    setToCity(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((resp) => resp.json())
      .then((json) => onJourneyChange(json.data));
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={handleFromCityChange} value={fromCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={handleToCityChange} value={toCity}>
              <CityOptions
                cities={cities.filter(({ code }) => code !== fromCity)}
              />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={handleDateChange} value={date}>
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={date === '' || cities === ''}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
