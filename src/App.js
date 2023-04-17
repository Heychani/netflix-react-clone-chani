import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone front-end</h1>
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="example" fetchUrl={requests.exampleAPI} />
      {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="History" fetchUrl={requests.fetchHistoryMovies}/> */}
    </div>
  );
}

export default App;
