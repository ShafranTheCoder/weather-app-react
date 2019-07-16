import React from 'react'

const Weather = props => (
  <div className="weather-info">
    {props.city &&
      <div>
        <p className="weather__key">Местоположение: <span className="weather__value">{props.city}, {props.country}</span></p>
        <p className="weather__key">Температура: <span className="weather__value">{props.temp}</span></p>
        <p className="weather__key">Восход солнца: <span className="weather__value">{props.sunrise}</span></p>
        <p className="weather__key">Заход солнца: <span className="weather__value">{props.sunset}</span></p>
        <p className="weather__key">Давление: <span className="weather__value">{props.pressure}</span></p>
      </div>
    }
    <p className="weather__error">{props.error}</p>
  </div>
)
export default Weather;