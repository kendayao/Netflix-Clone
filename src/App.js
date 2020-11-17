import React from 'react'
import './App.css';
import Row from './components/row/Row'
import API from './API'
import Banner from './components/banner/Banner'
import Nav from './components/navbar/Nav'
import{connect} from 'react-redux'

function App({myList}) {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="My List" fetch={API.fetchComedyMovies} isLargeRow isMyList/>
      <Row title="NETFLIX ORIGINALS" fetch={API.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetch={API.fetchTrending} isLargeRow  />
      <Row title="Top Rated" fetch={API.fetchTopRated} isLargeRow />
      <Row title="Action Movies" fetch={API.fetchActionMovies} isLargeRow  />
      <Row title="Comedy Movies" fetch={API.fetchComedyMovies} isLargeRow  />
      <Row title="Horror Movies" fetch={API.fetchHorrorMovies} isLargeRow  />
      <Row title="Romance Movies" fetch={API.fetchRomanceMovies} isLargeRow  />
      <Row title="Documentaries" fetch={API.fetchDocumentaries} isLargeRow  />
    </div>
  );
}

const mapStateToProps=state=>({
  myList: state.myList.myCurrentList
})

export default connect(mapStateToProps)(App)
