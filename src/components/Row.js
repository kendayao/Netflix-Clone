import React, { useState, useEffect } from 'react'
import './Row.css'

const Row=({title, fetch})=>{

    const [movies, setMovies]=useState([]);

    useEffect(()=>{
        fetch().then((res)=>{
            setMovies(res.data.results)})
          
    },[fetch])

    const base_url='https://image.tmdb.org/t/p/original'
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie=>(
                    <img className="row_poster" key={movie.id} src={base_url+movie.poster_path} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row