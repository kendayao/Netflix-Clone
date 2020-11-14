import React from 'react'
import './App.css';
import Row from './components/Row'
import API from './API'

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetch={API.fetchNetflixOriginals} />
      <Row title="Trending Now" fetch={API.fetchTrending} />
      <Row title="Top Rated" fetch={API.fetchTopRated} />
      <Row title="Action Movies" fetch={API.fetchActionMovies} />
      <Row title="Comedy Movies" fetch={API.fetchComedyMovies} />
      <Row title="Horror Movies" fetch={API.fetchHorrorMovies} />
      <Row title="Romance Movies" fetch={API.fetchRomanceMovies} />
      <Row title="Documentaries" fetch={API.fetchDocumentaries} />
    </div>
  );
}

export default App;
