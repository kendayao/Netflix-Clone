import React, { useState, useEffect } from 'react'
import {RowContainer, RowPosters, RowPoster, RowPosterMyList, RowTitle, RowTitleMyList} from './Row.styled-components'

import {setTrailerUrl} from '../../redux/trailer/trailer.action'
import {setMovie} from '../../redux/movie/movie.action'
import {setMyList} from '../../redux/myList/myList.action'
import {setAlert} from '../../redux/alert/alert.action'
import {connect} from 'react-redux'


const Row=({title, fetch, isMyList, setMovie, myList, setMyList, setTrailerUrl, setAlert})=>{
    
    const [movies, setMovies]=useState([]);
    
    useEffect(()=>{
        isMyList? fetch().then((res)=>{
            setMyList(res.data.results[Math.floor(Math.random()*res.data.results.length)])}):
        fetch().then((res)=>{
            setMovies(res.data.results)})
          
    },[fetch,setMyList, isMyList])

    const base_url='https://image.tmdb.org/t/p/original'

    const handleClick=(movie)=>{
        setMovie(movie)
        setAlert(false)
        setTrailerUrl("")
        window.scrollTo(0,0)
    }
    
    return(
        
        <RowContainer>
            {isMyList?
            <RowTitleMyList myListLength={myList.length}>{title}</RowTitleMyList>:
            <RowTitle >{title}</RowTitle>}
            <RowPosters>
                {isMyList?myList.map((movie)=>(
                    <RowPosterMyList onClick={()=>handleClick(movie)} key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                )):
                movies.map((movie)=>(
                    <RowPoster onClick={()=>handleClick(movie)} key={movie.id} src={base_url+movie?.poster_path} alt={movie.name} />
                ))}
            </RowPosters>
            
        </RowContainer>  
    )
}

const mapDispatchToProps=dispatch=>({
    setMovie: movie=>dispatch(setMovie(movie)),
    setMyList: movies=>dispatch(setMyList(movies)),
    setTrailerUrl: url=>dispatch(setTrailerUrl(url)),
    setAlert: alert=>dispatch(setAlert(alert))
})

const mapStateToProps=state=>({
    myList: state.myList.myCurrentList
})

export default connect(mapStateToProps, mapDispatchToProps)(Row)