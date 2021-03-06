import React, {useEffect} from 'react'
import './Banner.css'
import API from '../../API'
import{connect} from 'react-redux'
import {setMovie} from '../../redux/movie/movie.action'
import {addToList} from '../../redux/myList/myList.action'
import {removeFromList} from '../../redux/myList/myList.action'
import {setTrailerUrl} from '../../redux/trailer/trailer.action'
import {setAlert} from '../../redux/alert/alert.action'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Banner({setMovie, movie, addToList, myList, removeFromList, trailerUrl, setTrailerUrl, alert, setAlert}){

    useEffect(()=>{
        function fetchData(){
            API.fetchNetflixOriginals().then(res=>{
                setMovie(res.data.results[Math.floor(Math.random()*res.data.results.length)])
            })
        }
        fetchData();
    },[setMovie])

    function truncate(str, n){
        return str?.length>n?str.substr(0, n-1) + "...": str;
    }
    
    const opts={
        height: "430",
        width: "40%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || movie.title || movie?.original_name || "").then(url=>{
                const urlParams=new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>
             setAlert(true))
             setTimeout(()=>{
                setAlert(false);
              }, 4000);
        }
    }

    return(
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundPosition: 'center center fixed'
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>
                <div className="banner_buttons">
                    {trailerUrl?<button onClick={()=>handleClick(movie)} className="banner_button">Stop Trailer</button>:
                    <button onClick={()=>handleClick(movie)} className="banner_button">Play Trailer</button>}
                    {myList.some(listItem=>listItem.id===movie.id)?
                    <button onClick={()=>removeFromList(movie)}className="banner_button">Remove From My List</button>:
                    <button onClick={()=>addToList(movie)} className="banner_button">Add To My List</button>}
                </div>
                <div class={alert?"trailer_alert": "trailer_alert_hide"}>
                    <i class="fas fa-exclamation-circle"></i> Sorry, No Trailer Available
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 250)}</h1>
            </div>
            <div className="banner--fadeBottom">
            
            </div>
            {trailerUrl&&<YouTube className="trailer_container" videoId={trailerUrl} opts={opts}/>}
        </header>
        
      
    )
}

const mapDispatchToProps=dispatch=>({
    setMovie: movie=>dispatch(setMovie(movie)),
    addToList: movie=>dispatch(addToList(movie)),
    removeFromList: movie=>dispatch(removeFromList(movie)),
    setTrailerUrl: url=>dispatch(setTrailerUrl(url)),
    setAlert: alert=>dispatch(setAlert(alert))
})

const mapStateToProps=state=>({
    movie: state.movie.currentMovie,
    myList: state.myList.myCurrentList,
    trailerUrl: state.trailerUrl.currentTrailerUrl,
    alert: state.alert.alertState
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner)