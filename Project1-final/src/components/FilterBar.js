import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const handleFilter = () => {
    onFilter({ search, location });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search jobs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
