import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import LocButton from './components/LocButton';
import ClipLoader from "react-spinners/ClipLoader";
// 051597f932c2f33ea9a4340f7826e7ce
const API_KEY = "051597f932c2f33ea9a4340f7826e7ce";
const cities = ['Seoul', 'Tokyo', 'Hawaii'];
function App() {

  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState("");


  const getCurrentXY = () => {
    // https://www.w3schools.com/html/html5_geolocation.asp
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      getCurrentLocationWeather(lat, long);
    });
  };

  const getCurrentLocationWeather = async (lat, long) => {
    try {
      let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
      const response = await fetch(api_url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }

  }

  const getCityWeather = async () => {
    try {
      let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(api_url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  }

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  // ComponentDidMount
  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentXY();
    } else {
      console.log('update');
      setLoading(true);
      getCityWeather();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="main">
          <ClipLoader
            color="#f88ccf"
            loading={loading}
            size={150}
          />
        </div>
      ) : !apiError ? (
        <div className="main">
          <WeatherInfo weather={weather} />
          <LocButton cities={cities} selectedCity={city} handleCityChange={handleCityChange} />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;
