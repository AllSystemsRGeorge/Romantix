
import React from 'react';
import './App.css';
import Row from './Row'

function App() {
  return (
    <div className="App">
      <h1>Front-end Movies</h1>
      <Row netflix originals/>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default App;
