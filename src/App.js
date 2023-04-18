import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <body>
    <h1>NETFLIX</h1>
    <div className="App">
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
      <Row title="Airing Today on Netflix" fetchUrl={requests.fetchAiringToday} />
      </div>
    </body>
  );
}

export default App;
