import React, { useEffect } from 'react'
import axios from './axios';
import requests from '../request';
import './Banner.css'

function Banner() {
    //responsible for whatever random movie gets selected at the top
const [Movie, setMovie] = useState([])

useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchRomanceMovies);
        setMovie(
        request.data.results[
            Math.floor(Math.random() * request.data.length -1)
        ]
        );
        return request;
    }
    fetchData();
}, []);
//console.log(movie);

//n is a number
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

  return (
     <header className='banner'
     style={{
        backgroundSize: "cover",
        brangoundImage: `url(
           "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" 
        )`,
        backgroundPosition: "center center",
     }}
     > 
        <div className="banner__contents">
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name} </h1>
        
       
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My list</button>
        </div>
       <h1 className="banner__description">
        {truncate(movie?.overview, 150)}
       </h1>
        </div>
     </header>
  )
}

export default Banner