export const addMovieToList=(listItems, listItemToAdd)=>{
    const existingItem=listItems.find(listItem=>listItem.id===listItemToAdd.id)

    if(existingItem){
        return listItems.map(listItem=>
            listItem.id===listItemToAdd.id?{...listItem, inList:true}: listItem)
    }

    return [...listItems, {...listItemToAdd, inList: true}]
}

export const removeMovieFromList=(listItems, itemToRemove)=>{
    return listItems.filter(listItem=>listItem.id!==itemToRemove.id)
}