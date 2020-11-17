import {combineReducers} from 'redux'
import movieReducer from './movie/movie.reducer'
import myListReducer from './myList/myList.reducer'

const rootReducer=combineReducers({
    movie: movieReducer,
    myList: myListReducer
})

export default rootReducer