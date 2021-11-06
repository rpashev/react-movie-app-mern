import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AuthContext from "./Context/user-context";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Watchlist from "./Pages/Watchlist/Watchlist";
import Seenlist from "./Pages/Seenlist/Seenlist";
import Details from "./Pages/Details/Details";
import Layout from "./Components/Layout/Layout";
import Logout from "./Components/Logout/Logout";

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
            {isLoggedIn ? <Details /> : <Redirect to="/" />}
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

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
