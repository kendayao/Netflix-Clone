import React from 'react'
import './App.css';
import Row from './components/row/Row'
import API from './API'
import Banner from './components/banner/Banner'
import Nav from './components/navbar/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetch={API.fetchNetflixOriginals} isLargeRow />
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
