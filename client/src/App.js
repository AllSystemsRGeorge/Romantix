
import React from 'react';
import './App.css';
import Row from './Row'
import requests from './request';


function App() {
  return (
    <div className="App">
      <h1>Front-end Movies</h1>
      <Row netflix originals fetchUrl={requests.fetchNetflixOriginals} />
      <Row TopRated fetchUrl={requests.fetchTopRated} />
      <Row ActionMovies fetchUrl={requests.fetchTopRated} />
      <Row ComedyMovies fetchUrl={requests.ComedyMovies} />
      <Row HorrorMovies fetchUrl={requests.HorrorMovies} />
      <Row RomanceMovies fetchUrl={requests.RomanceMovies} />
      <Row Documantaries fetchUrl={requests.Documantaries} />
     
    </div>
  );
}

export default App;

