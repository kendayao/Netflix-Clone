const INITIAL_STATE={
    alert: false
}

const alertReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_ALERT':
            return{
                ...state,
                alertState: action.payload
            }
            default:
                return state;
    }
}

export default alertReducer