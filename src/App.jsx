import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Landing } from "./pages/landing";
import { Home } from "./pages/home";
import { Watchlist } from "./pages/watchlist";

const App = () => {
  const [user, setUser] = useState();

  return (
    <AppContainer>
      {user ? <Redirect to='/home'/> : <Redirect to='/'/>}
      <Route exact path='/'>
        <Landing user={user} setUser={setUser}/>
      </Route>
      <Route path='/home'>
        <Home user={user}/>
      </Route>
      <Route path='/watchlist'>
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
