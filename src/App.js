import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <body>
    <h1>NETFLIX</h1>
    <div className="App">

  <Banner/> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}
      isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Airing Today on Netflix" fetchUrl={requests.fetchAiringToday} />
      </div>
    </body>
  );
}

export default App;
