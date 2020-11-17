const INITIAL_STATE={
    currentTrailerUrl: ""
}

const trailerUrlReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_TRAILER_URL':
            return{
                ...state,
                currentTrailerUrl: action.payload
            }
        default:
            return state
    }
}

export default trailerUrlReducer