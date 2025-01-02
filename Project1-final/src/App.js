/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilterBar from './components/FilterBar';
import JobList from './components/JobList';
import './styles.css';

const App = () => {
  const [filters, setFilters] = useState({ search: '', location: '' });

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Header />
      <FilterBar onFilter={handleFilter} />
      <JobList filters={filters} />
      <Footer />
    </>
  );
};

export default App;
