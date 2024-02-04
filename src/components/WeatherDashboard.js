
import React, { useEffect, useState } from 'react';
import InteractiveMap from './InteractiveMap';


import clear from "../Assets/clear.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import rain from "../Assets/rain.png";
import search from "../Assets/search.png";
import snow from "../Assets/snow.png";
import wind from "../Assets/wind.png";

import { TbWind } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import TravelPlanner from './TravelPlanner';

const WeatherDashboard = () => {
  const apikey = "bd30dc48fa3635cae7aa2958cba82e3b";
  const [city, setCity] = useState("");
  const [weatherdata, setWeatherdata] = useState("");
  const [imges, setImages] = useState(clear);

  const citychangeHandler = (e) => {
    setCity(e.target.value);
  };
console.log(weatherdata)
  const submitHandler = () => {
    if (!city) return; // Add a check for city input

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherdata(data);

        if (data?.weather && data.weather.length > 0) {
          const icon = data.weather[0].icon;
          if (icon === "01d" || icon === "01n") {
            setImages(clear);
          } else if (icon === "02d" || icon === "02n") {
            setImages(cloud);
          } else if (
            icon === "03d" ||
            icon === "03n" ||
            icon === "04d" ||
            icon === "04n"
          ) {
            setImages(drizzle);
          } else if (icon === "09d" || icon === "09n") {
            setImages(rain);
          } else if (icon === "10d" || icon === "10n") {
            setImages(snow);
          } else {
            setImages(snow);
          }
        }
      });
  };
  useEffect(() => {
    submitHandler();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <h4 className="card_heading">Weather Dashboard</h4>

        <div className="inputfild">
          <input
            type="text"
            placeholder="Enter city Name"
            onChange={citychangeHandler}
          />
          <img src={search} onClick={() => submitHandler()} />
        </div>
      </div>
      <div><TravelPlanner data = {weatherdata}/></div>
      <div className="card-body">
        <div className="imgpng">
          <img src={imges} />
        </div>


        <div className="weather-data">
          
         
          <h3>{weatherdata?.name}</h3>
            <h4> {weatherdata?.main?.temp} </h4>
            {/* <h3>{weatherdata?.coord?.lat}</h3> */}
          
        </div>
      </div>

      <div className="temp">
        <div>
          {" "}
          <WiHumidity /> <sapn>{weatherdata?.main?.humidity} %  <div>Humidity</div></sapn>
        
        </div>
        <div >
          {" "}
          <TbWind />
          <sapn > {weatherdata?.wind?.speed} km/h  <div className="windspeed">Wind</div></sapn>
         
        </div>
      </div>
      {/* <InteractiveMap data = {weatherdata}/> */}
    </div>
  );
};

export default WeatherDashboard;
