import React, {useState, useEffect} from 'react'
import './Banner.css'
import API from '../../API'

function Banner(){

    const [movie, setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            API.fetchNetflixOriginals().then(res=>{
                setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
            })
        }
        fetchData();
    },[])

    
    function truncate(str, n){
        return str?.length>n?str.substr(0, n-1) + "...": str;
    }
    return(
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: 'center'
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 250)}</h1>
            </div>
            <div className="banner--fadeBottom">
            
            </div>
        </header>
      
    )
}

export default Banner