import React, { useState, useEffect } from 'react';
import axios from './axios';
// import requests from './requests';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]); //reactHook
    //snippet of code that runs based on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, doesn't run again 
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //pulls through the url
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, []);

    return (
    <div>
        <h2>{title}</h2>

        {/* container -> posters */}
    </div>
  )
}

export default Row