import React from 'react';
import './App.css';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone front-end</h1>
      <Row title="NETFLIX ORIGINALS" />
      <Row title="Trending Now" />
      <Row title="Comedy" />
      <Row title="Horrors" />
    </div>
  );
}

export default App;
