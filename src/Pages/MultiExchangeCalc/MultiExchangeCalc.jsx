import React, { useState } from 'react';
import './MultiExchangeCalc.scss';
import { multiCountries } from '../../api/constants';

const MultiExchangeCalc = () => {
  const [sendCountry, setSendCountry] = useState('USD');
  const [recvCountry, setRecvCountry] = useState('CAD');

  const sendCountryHandler = selectedCountry => {
    if (selectedCountry === recvCountry) {
      setRecvCountry(multiCountries.filter(country => country !== selectedCountry)[0]);
    }
    setSendCountry(selectedCountry);
  };

  return (
    <div className="ex-calc2">
      <form className="ex-calc2-head__form">
        <input type="text" className="ex-calc2-head__input" />
        <select
          name="currencies"
          className="ex-calc2-head__select"
          onChange={e => sendCountryHandler(e.target.value)}
        >
          {multiCountries.map(country => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
      </form>
      <div className="ex-calc2-body__box">
        <ul className="ex-calc2-body__tab">
          {multiCountries
            .filter(country => country !== sendCountry)
            .map(country => {
              return (
                <li
                  className={`ex-calc2-body__tab--menu ${country === recvCountry && 'active'}`}
                  key={country}
                >
                  <button value={country} onClick={() => setRecvCountry(country)}>
                    {country}
                  </button>
                </li>
              );
            })}
        </ul>
        <div className="ex-calc2-body__result">
          <span className="ex-calc2-body__result--main-text"> CAD 2,000.00</span>
          <span className="ex-calc2-body__result--sub-text">
            기준일: <br />
            2022-Jan-01
          </span>
        </div>
      </div>
    </div>
  );
};

export default MultiExchangeCalc;
