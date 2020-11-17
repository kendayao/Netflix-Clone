import React, {useEffect} from 'react'
import './Banner.css'
import API from '../../API'
import{connect} from 'react-redux'
import {setMovie} from '../../redux/movie/movie.action'

function Banner({setMovie, movie}){

    
    // const [myList, setMyList]=useState([])

    useEffect(()=>{
        async function fetchData(){
            API.fetchNetflixOriginals().then(res=>{
                setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
            })
        }
        fetchData();
    },[setMovie])

    
    function truncate(str, n){
        return str?.length>n?str.substr(0, n-1) + "...": str;
    }
    

    return(
        
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: 'center center fixed'
        }}>
            <div className='nav'>
                <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
                <img className="nav_avatar" src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt="Profile Logo"/>
            </div>
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

const mapDispatchToProps=dispatch=>({
    setMovie: movie=>dispatch(setMovie(movie))
})

const mapStateToProps=state=>({
    movie: state.movie.currentMovie
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)