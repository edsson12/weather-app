import React from "react";
import "./Clima.scss";
import 'weather-icons/css/weather-icons.css';

const Clima = ({ resultado, busqueda }) => {
  const { name, main, weather } = resultado;
  if (!name) return null;
  const kelvin = 273.15;

  
  return (
    <div className="o-container-res">
    <div className="o-resultados">
      <h1 className="title">
        {name}, {busqueda.pais}
      </h1>
      <div className="o-container">
        <div className="o-der">
          <div className="columna">
            <h1>
              {parseFloat(main.temp - kelvin, 10).toFixed(1)}°C
            </h1>
            <h3>{weather[0].description}</h3>
          </div>

          <div className="fila">
            <h2>Max +{parseFloat(main.temp_max - kelvin, 10).toFixed(1)}°C,
            Min -{parseFloat(main.temp_min - kelvin, 10).toFixed(1)}°C
            </h2>

          </div>
        </div>

        <div className="o-izq">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Clima;
