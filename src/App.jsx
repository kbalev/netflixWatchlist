import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import styled from 'styled-components';
import { Landing } from './pages/landing';
import { Home } from './pages/home';
import { Navbar } from "./components/navbar";
import { Profile } from "./pages/profile";



const App = () =>  {
const[user, setUser] =useState();


  return (
    <AppContainer>
      <Navbar/>
      
    
      {user ? <Redirect to= '/home'/> : <Redirect to = '/'/>}
      <Route exact path= '/'>
        <Landing setUser ={setUser}/>
      </Route>
      <Route path='/home'>
      <Home/>
     <Profile/>
     
      </Route>
    
    </AppContainer>
    
  );
};
const AppContainer = styled(Router)`
width: 100vw;
height:100vh;
`


export default App;
