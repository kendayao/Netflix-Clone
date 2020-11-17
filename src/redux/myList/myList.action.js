export const setMyList=movies=>({
    type: 'SET_MYLIST',
    payload: movies

})

export const addToList=movie=>({
    type: 'ADD_TO_LIST',
    payload: movie

})

export const removeFromList=movie=>({
    type: 'REMOVE_FROM_LIST',
    payload: movie

})