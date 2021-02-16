import styled, { css } from 'styled-components'

export const NavLogo=styled.img`
    width: 80px;
    object-fit: contain;
`

export const NavAvatar=styled.img`
    position: fixed;
    right: 20px;
    width: 30px;
    object-fit: contain;
`

const getNavBarStyles=props=>{
    if(props.show){
        return NavBlack
    }
}

export const NavContainer=styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    height: 30px;
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 0.5s;

    ${getNavBarStyles}
`

export const NavBlack=css`
    background-color: #111; 
`