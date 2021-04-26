import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeUser from './Pages/HomeUser/HomeUser';
import HomeGuest from './Pages/HomeGuest/HomeGuest';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Watchlist from './Pages/Watchlist/Watchlist';
import Seenlist from './Pages/Seenlist/Seenlist';
import Details from './Pages/Details/Details'

const App = (props) => {
  const user = true;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {user ? <HomeUser /> : <HomeGuest/>}
        </Route>

        <Route path="/login" exact>
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>

        <Route path="/register" exact>
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>

        <Route path="/details/:movieID" exact>
          {user ? <Details /> : <Redirect to="/" />}
        </Route>

        <Route path="/watchlist" exact>
          {user ? <Watchlist /> : <Redirect to="/" />}
        </Route>

        <Route path="/seenlist" exact>
          {user ? <Seenlist /> : <Redirect to="/" />}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
