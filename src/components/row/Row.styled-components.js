import styled, {css} from 'styled-components';

export const RowContainer=styled.div`
    margin-left: 20px;
    color: white;
`

export const RowPosters=styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    
    &::-webkit-scrollbar {
        display: none;
      }
`

export const RowPoster=styled.img`
    object-fit: contain;
    width: 100%;
    border-radius: 7px;
    margin-right: 10px;
    max-height: 250px;
    transition: transform 450ms;

    &:hover{
        transform: scale(1.09);
    }
`

export const RowPosterMyList=styled.img`
    object-fit: contain;
    border-radius: 5px;
    max-height: 250px;
    margin-right: 10px;
    transition: transform 450ms;

    &:hover{
        transform: scale(1.09);
    }
`

const getRowTitleStyles=(props)=>{
    if(!props.myListLength){
        return RowHide
    }

    return RowTitle
}

export const RowTitle=styled.h2`
    margin-left: 18px;

`

export const RowTitleMyList=styled.h2`
    margin-left: 18px;
    ${getRowTitleStyles}
`


export const RowHide=css`
    display: none;
`