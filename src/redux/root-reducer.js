import {combineReducers} from 'redux'
import movieReducer from './movie/movie.reducer'
import myListReducer from './myList/myList.reducer'
import trailerUrlReducer from './trailer/trailer.reducer'
import alertReducer from './alert/alert.reducer'

const rootReducer=combineReducers({
    movie: movieReducer,
    myList: myListReducer,
    trailerUrl: trailerUrlReducer,
    alert: alertReducer
})

export default rootReducer