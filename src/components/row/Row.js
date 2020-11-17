import React, { useState, useEffect } from 'react'
import './Row.css'


import {setMovie} from '../../redux/movie/movie.action'
import {setMyList} from '../../redux/myList/myList.action'
import {connect} from 'react-redux'


const Row=({title, fetch, isMyList, setMovie, myList, setMyList})=>{
    
    const [movies, setMovies]=useState([]);
    

    useEffect(()=>{
        isMyList? fetch().then((res)=>{
            setMyList(res.data.results[5])}):
        fetch().then((res)=>{
            setMovies(res.data.results)})
          
    },[])

    const base_url='https://image.tmdb.org/t/p/original'

    
    
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
        window.scrollTo(0,0)
    }
    
    return(
        
        <div className="row">
            {isMyList?
            <h2 className={`${myList.length!==0?'row_title': 'row_test'}`}>{title}</h2>:
            <h2 className='row_title'>{title}</h2>}
            <div className='row_posters'>
                {isMyList?myList.map((movie)=>(
                    <img onClick={()=>handleClick(movie)} className="row_poster_mylist " key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                )):
                movies.map((movie)=>(
                    <img onClick={()=>handleClick(movie)} className="row_poster" key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                ))}
            </div>
            
        </div>
    
        
    )
}

const mapDispatchToProps=dispatch=>({
    setMovie: movie=>dispatch(setMovie(movie)),
    setMyList: movies=>dispatch(setMyList(movies))
})

const mapStateToProps=state=>({
    myList: state.myList.myCurrentList
})

export default connect(mapStateToProps, mapDispatchToProps)(Row)