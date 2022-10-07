import React, { useInsertionEffect, useState } from 'react'
import axios from 'axios';

function Row({ title }) {
  //Array of movies
  const [movies, setMovies] = useState([]);

  // this is a piece of the code that will run based on specific condition/variable. It will pull the information from
  // an specific row. (the image that we need to display)
  // if [] empty, run once when the row load and dont run again.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {/* container-->posters*/}

    </div>
  )
}

export default Row