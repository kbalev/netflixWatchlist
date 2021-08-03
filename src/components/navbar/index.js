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


export const Navbar = () => {
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
            <Link to="/landing"><FontAwesomeIcon icon={faUser} /> LogIn And SignUp Page  </Link>
          </li>
        </ul>
      </nav>
     
//     //   </NavbarContainer>
    );
  
};
