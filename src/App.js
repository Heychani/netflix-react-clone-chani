import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone front-end</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Airing Today on Netflix" fetchUrl={requests.fetchAiringToday} />
    </div>
  );
}

export default App;
