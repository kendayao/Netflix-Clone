import React, { useState, useEffect } from 'react'
import './Row.css'

const Row=({title, fetch, isLargeRow})=>{

    const [movies, setMovies]=useState([]);

    useEffect(()=>{
        fetch().then((res)=>{
            setMovies(res.data.results)})
          
    },[fetch])

    const base_url='https://image.tmdb.org/t/p/original'
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map(movie=>(
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={isLargeRow?base_url+movie.poster_path:base_url+movie.backdrop_path} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row