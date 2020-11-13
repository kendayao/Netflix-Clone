import React from 'react'
import './App.css';
import Row from './components/Row'
import API from './API'

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetch={API.fetchNetflixOriginals} />
      <Row title="Trending Now" fetch={API.fetchTrending} />
    </div>
  );
}

export default App;
