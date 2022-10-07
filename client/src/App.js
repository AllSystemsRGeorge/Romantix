
import React from 'react';
import './App.css';
import Row from './Row'
import requests from './request';


function App() {
  return (
    <div className="App">
      <h1>Front-end Movies</h1>
      <Row title="netflix originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow//is true by default.
      />
      <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;

