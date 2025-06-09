import React from 'react';
import Classcounter from './components/Classcounter';
import Functioncounter from './components/Functioncounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counters-row">
        <div className="counter-box">
          <Classcounter />
        </div>
        <div className="counter-box">
          <Functioncounter />
        </div>
      </div>
    </div>
  );
}

export default App;
