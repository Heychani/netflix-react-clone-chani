import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1) //grabbing a random number from the array and adding - 1 so that it doesn't go over
                ]
            );
         return request;
        }
        fetchData();
    }, []);

    console.log(movie);
//Still working on the banner, the path is not working. Will figure this one out after work
  return (
    <header className="banner"
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
        backgroundPosition: "center center",
    }}
    >
    <div className="banner__contents">
    <h1 className='movie_title'>
    {movie.title || movie.name || movie.original_name}
    </h1>
    <div className="movie_desc">
    {movie.overview}
    </div>
    <div className='banner__buttons'>
    <button className='banner__button'>Play</button>
    <button className='banner__button'>My List</button>
    </div>
    </div>
    </header>
  );
};


export default Banner;