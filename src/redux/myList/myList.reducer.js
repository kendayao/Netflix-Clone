import{addMovieToList} from './myList.utils'
import{removeMovieFromList} from './myList.utils'

const INITAL_STATE={
    myCurrentList: []
}

const myListReducer=(state=INITAL_STATE, action)=>{
    switch(action.type){
        case 'SET_MYLIST':
            return{
                ...state,
                myCurrentList: [{...action.payload, inList:true}]
            }
            case 'ADD_TO_LIST':
                return{
                    ...state,
                    myCurrentList: addMovieToList(state.myCurrentList, action.payload)
                }
            case 'REMOVE_FROM_LIST':
                return{
                    ...state,
                    myCurrentList: removeMovieFromList(state.myCurrentList, action.payload)
                }
            default:
                return state
    }
}

export default myListReducer