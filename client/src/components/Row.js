
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './row.css'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
    //Array of movies
  const [movies, setMovies] = useState([]);

  // this is a piece of the code that will run based on specific condition/variable. It will pull the information from
  // an specific row. (the image that we need to display)
  // if [] empty, run once when the row load and dont run again.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;

    }
    fetchData();
  }, [fetchUrl]);
  
  console.log(movies);

    return(
        <div className='row'>
          <h2>{ title }</h2>

          <div className='row__posters'>
            {/* several row__poster(s) container*/}
            {movies.map(movie => (
                <img
                key={movie.id} 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}

                alt={movie.name}/>
            ))}
          </div>
          

        </div>
    );
}

export default Row