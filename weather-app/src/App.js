import React, {useState} from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');

  const apiKey = ''
  
  const getWeather = (e) => {
    if (e.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
          .then(result => {
            setWeather(result);
            setCity('');
          })
    }
  };

  return (
      <div className="app">
        <div className='container'>
          <input 
            type='text'
            placeholder='Search...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={getWeather}
          />

          {
            typeof weather.main != 'undefined' ?
            (
              <div className='weather-container'>
                <div className='location'>
                  <i class="fa-solid fa-map-location-dot"></i> {weather.name}, {weather.sys.country}
                </div>
                <div className='temp'>
                  <i class="fa-solid fa-temperature-half"></i> {Math.round(weather.main.temp)}°C
                </div>
                <div className='weather'>
                  <i class="fa-solid fa-cloud"></i> {weather.weather[0].main}
                </div>
                <div className='wind'>
                  <i class="fa-solid fa-wind"></i> {weather.wind.speed} m/s
                </div>
              </div>
            ) : (
              <div className='weather-container'>
                <h1>Welcome to Weather App</h1>
              </div>
            )
          }
        </div>
      </div>
  );
}

export default App;
