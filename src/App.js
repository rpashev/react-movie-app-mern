import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./context/user-context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Watchlist from "./pages/Watchlist/Watchlist";
import Seenlist from "./pages/Seenlist/Seenlist";
import Details from "./pages/Details/Details";
import Layout from "./components/layout/Layout";
import Logout from "./components/Logout/Logout";
import Database from "./pages/Database/Database";

const App = (props) => {
  const context = useContext(AuthContext);
  const { isLoggedIn } = context;

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login" exact>
            {!isLoggedIn ? <Login /> : <Redirect to="/" />}
          </Route>

          <Route path="/register" exact>
            {!isLoggedIn ? <Register /> : <Redirect to="/" />}
          </Route>
          <Route path="/logout" exact>
            {isLoggedIn ? <Logout /> : <Redirect to="/" />}
          </Route>

          <Route path="/details/:movieID" exact>
            <Details />
          </Route>

          <Route path="/watchlist" exact>
            {isLoggedIn ? <Watchlist /> : <Redirect to="/" />}
          </Route>

          <Route path="/seenlist" exact>
            {isLoggedIn ? <Seenlist /> : <Redirect to="/" />}
          </Route>
          <Route path="/seenlist" exact>
            {isLoggedIn ? <Seenlist /> : <Redirect to="/" />}
          </Route>
          <Route path="/database" exact>
            {isLoggedIn ? <Database /> : <Redirect to="/" />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
