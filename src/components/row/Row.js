import React, { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import {setMovie} from '../../redux/movie/movie.action'
import {connect} from 'react-redux'

const Row=({title, fetch, isMyList, setMovie})=>{

    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl]=useState("")

    useEffect(()=>{
        fetch().then((res)=>{
            setMovies(res.data.results)})
          
    },[fetch])

    const base_url='https://image.tmdb.org/t/p/original'

    const opts={
        height: "390",
        width: "100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    
    // const handleClick=(movie)=>{
    //     if(trailerUrl){
    //         setTrailerUrl('');
    //     }else{
    //         movieTrailer(movie?.name || movie.title || movie?.original_name || "").then(url=>{
    //             const urlParams=new URLSearchParams(new URL(url).search)
    //             setTrailerUrl(urlParams.get('v'))
    //         }).catch((error)=>console.log(error))
    //     }
    // }

    const handleClick=(movie)=>{
        setMovie(movie)
    }

    return(
        <div className="row">
            <h2 className='row_title'>{title}</h2>
            <div className='row_posters'>
                {isMyList?movies.filter((movie, index)=>index<3).map((movie)=>(
                    <img onClick={()=>handleClick(movie)} className="row_poster_mylist " key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                )):
                movies.map((movie)=>(
                    <img onClick={()=>handleClick(movie)} className="row_poster" key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                ))}
            </div>
            {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    
        
    )
}



const mapDispatchToProps=dispatch=>({
    setMovie: movie=>dispatch(setMovie(movie))
})

export default connect(null, mapDispatchToProps)(Row)