// InteractiveMap.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const InteractiveMap = ({ data }) => {
  const [weatherData, setWeatherData] = useState(data || {});

  // Check if data is defined
  if (!weatherData || !weatherData.coord) {
    return null; // or handle it accordingly
  }

  // Extracting latitude and longitude from weather data
  const { coord } = weatherData;
  const position = [coord.lat || 0, coord.lon || 0];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default InteractiveMap;
