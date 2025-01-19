import React, { useState } from "react";
import Filters from "./components/Filters";
import MapView from "./components/MapView";
import StationList from "./components/StationList";
import stations from "./data/mockStations.json";

function App() {
  const [filters, setFilters] = useState({
    isOpen24Hours: false,
    hasStore: false,
    servesHotFood: false,
    acceptsFuelCards: false,
  });

  const applyFilters = () => {
    return stations.filter((station) => {
      return (
        (!filters.isOpen24Hours || station.isOpen24Hours) &&
        (!filters.hasStore || station.hasStore) &&
        (!filters.servesHotFood || station.servesHotFood) &&
        (!filters.acceptsFuelCards || station.acceptsFuelCards)
      );
    });
  };

  const filteredStations = applyFilters();

  return (
    <div className="app-container">
      <h1>BP Stations Finder</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="content">
        <MapView stations={filteredStations} />
        <StationList stations={filteredStations} />
      </div>
    </div>
  );
}

export default App;
