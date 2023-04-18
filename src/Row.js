import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
// import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]); //reactHook
    //snippet of code that runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, doesn't run again 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //pulls through the url
            // console.log(request.data.results); - Testing if the database is showing up and working
            setMovies(request.data.results);
            return request;
        }
        fetchData(); //calling the function
    }, [fetchUrl]); //adding the array

    console.log(movies);

    return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
        {movies && movies.map(movie => (
            <img className='row__poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
    ))}
        </div>
    </div>
  )
}

export default Row