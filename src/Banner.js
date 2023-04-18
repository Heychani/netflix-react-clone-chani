import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]
            );
         return request;//grabbing a random number from the array and adding - 1 so that it doesn't go over
        }
        fetchData()
    }, []);

    console.log(movie);

  return (
    
  );
}


export default Banner;