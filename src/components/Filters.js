import React from "react";

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: checked }));
  };

  return (
    <div className="filters">
      <h3>Filters</h3>
      <label>
        <input
          type="checkbox"
          name="isOpen24Hours"
          checked={filters.isOpen24Hours}
          onChange={handleChange}
        />
        Open 24 Hours
      </label>
      <label>
        <input
          type="checkbox"
          name="hasStore"
          checked={filters.hasStore}
          onChange={handleChange}
        />
        Has Convenience Store
      </label>
      <label>
        <input
          type="checkbox"
          name="servesHotFood"
          checked={filters.servesHotFood}
          onChange={handleChange}
        />
        Serves Hot Food
      </label>
      <label>
        <input
          type="checkbox"
          name="acceptsFuelCards"
          checked={filters.acceptsFuelCards}
          onChange={handleChange}
        />
        Accepts BP Fuel Cards
      </label>
    </div>
  );
}

export default Filters;
