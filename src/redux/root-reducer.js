import {combineReducers} from 'redux'
import movieReducer from './movie/movie.reducer'

const rootReducer=combineReducers({
    movie: movieReducer
})

export default rootReducer