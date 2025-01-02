/*import logo from './logo.svg';

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

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobList from './components/JobList';
import './styles.css';

const App = () => (
  <>
    <Header />
    <JobList />
    <Footer />
  </>
);

//export default App;


export default App;
