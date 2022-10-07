import React, { useEffect } from 'react'
import axios from './axios';
import requests from '../request';

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

  return (
     <header className='banner'
     style={{
        backgroundSize: "cover",
        brangoundImage: `url(
           '" 
        )`
     }}
     > 
        <div classname="banner__contents">

        </div>
        <h1></h1>
        {/* <<<< Backgroung Image*/}
        {/*title*/}
        {/*div with two buttons */}
        {/*description*/}
     </header>
  )
}

export default Banner