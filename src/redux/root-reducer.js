import {combineReducers} from 'redux'
import movieReducer from './movie/movie.reducer'
import myListReducer from './myList/myList.reducer'
import trailerUrlReducer from './trailer/trailer.reducer'

const rootReducer=combineReducers({
    movie: movieReducer,
    myList: myListReducer,
    trailerUrl: trailerUrlReducer
})

export default rootReducer