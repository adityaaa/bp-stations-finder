import React from "react";

function StationList({ stations }) {
  return (
    <div className="station-list">
      <h3>Station List</h3>
      {stations.length === 0 ? (
        <p>No stations match the selected filters.</p>
      ) : (
        <ul>
          {stations.map((station) => (
            <li key={station.id}>
              <b>{station.name}</b> - {station.address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StationList;
