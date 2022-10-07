import axios from "axios";

//based url to make request to the movie database

const instance = axios.create ({
    baseURL:"https://api.themoviedb.org/3/movie/550?api_key=adfb7694dc9bcc9569475e7d499a9197",
})

export default instance;