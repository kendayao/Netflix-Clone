
const INITIAL_STATE={
    currentMovie: {}
}


const movieReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_MOVIE':
            return{
                ...state,
                currentMovie: action.payload
            }
            default:
                return state;

            
    }
}

export default movieReducer