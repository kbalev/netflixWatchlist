// import{ NavbarContainer}  from '../../styledComponents';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";


export const Navbar = ({setUser}) => {

  const logOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem('MyToken')
    setUser();
  }
    return (
        // <NavbarContainer> 
 <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/home"><FontAwesomeIcon icon={faHome} /> HomePage </Link>
          </li>
          <li>
            <Link to="/myMovieList"><FontAwesomeIcon icon={faFilm} /> My Movie List! </Link>
          </li>
          <li>
            <Link to="/profile"><FontAwesomeIcon icon={faUserCircle} /> Account Details </Link>
          </li>
          
          <li>
            <button className="btn-logout" onClick={(e) =>logOutHandler(e)}>Logout</button>
            {/* don't forget to pass the 'e' along the whole way for the re-renders to work as intended */}
          </li>
        </ul>
      </nav>
     
//     //   </NavbarContainer>
    );
  
};