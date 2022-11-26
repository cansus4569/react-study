// rafce
import React from 'react'

const WeatherInfo = ({weather}) => {
  const temperatureC =
    weather && weather.main ? weather.main.temp.toFixed(2) : "";
  const temperatureF =
    weather && weather.main
      ? ((weather.main.temp * 9) / 5 + 32).toFixed(2)
      : "";
  return (
    <div className="info">
      <div>{weather && weather?.name}</div>
      <h2>{temperatureC}도 / {temperatureF}화씨</h2>
      <h3>{weather && weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherInfo
