import React, { useEffect, useState } from 'react';
import {NavLogo,NavContainer, NavAvatar} from './Nav.styled-components'

function Nav(){

    const[show, handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{
                if(window.scrollY>100){
                    handleShow(true)
                }else handleShow(false)
        })}
    }, [])

    return(
        <NavContainer show={show}>
            <NavLogo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
            <NavAvatar className="nav_avatar" src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt="Profile Logo"/>
        </NavContainer>
    )
}

export default Nav;