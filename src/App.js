import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import styled from 'styled-components';
import { Landing } from './pages/landing';
import { Home } from './pages/home';
import { Navbar } from "./components/navbar";
import { Profile } from "./pages/profile";
import { Watchlist } from "./pages/watchlist";
import { authUser } from "./utils/index";


const App = () =>  {
const[user, setUser] =useState();

useEffect(()=>{
  authUser(setUser)
}, [user])

  return (
    <AppContainer>
      <Navbar setUser={setUser}/>
      
    
      {user ? <Redirect to= '/home'/> : <Redirect to = '/'/>}
      <Route exact path= '/'>
        <Landing setUser ={setUser}/>
      </Route>
      <Route path='/profile'>
        <Profile setUser={setUser} user={user}/>
      </Route>
      <Route path='/home'>
        <Home user={user}/>
      </Route>
      <Route path='/myMovieList'>
        <Watchlist user={user}/>
      </Route>
    
    </AppContainer>
    
  );
};
const AppContainer = styled(Router)`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export default App;
