import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthContext from "./context/user-context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Watchlist from "./pages/Watchlist/Watchlist";
import Seenlist from "./pages/Seenlist/Seenlist";
import Details from "./pages/Details/Details";
import Layout from "./components/layout/Layout";
import Logout from "./components/Logout/Logout";
import Database from "./pages/Database/Database";
import ExplorePage from "./pages/Explore/Explore";
import UserProfile from "./pages/Profile/UserProfile";

const App = (props) => {
  const context = useContext(AuthContext);
  const { isLoggedIn } = context;

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={!isLoggedIn ? <Home /> : <Navigate to="/watchlist" />} />

          <Route
            path="/login"
            element={!isLoggedIn ? <Login /> : <Navigate replace to="/watchlist" />}
          />

          <Route
            path="/register"
            element={!isLoggedIn ? <Register /> : <Navigate replace to="/watchlist" />}
          />

          <Route path="/logout" element={isLoggedIn ? <Logout /> : <Navigate replace to="/" />} />

          <Route
            path="/details/:movieID"
            element={isLoggedIn ? <Details /> : <Navigate replace to="/" />}
          />

          <Route
            path="/watchlist"
            element={isLoggedIn ? <Watchlist /> : <Navigate replace to="/" />}
          />

          <Route
            path="/seenlist"
            element={isLoggedIn ? <Seenlist /> : <Navigate replace to="/" />}
          />

          <Route
            path="/seenlist"
            element={isLoggedIn ? <Seenlist /> : <Navigate replace to="/" />}
          />

          <Route
            path="/database"
            element={isLoggedIn ? <Database /> : <Navigate replace to="/" />}
          />

          <Route
            path="/explore"
            element={isLoggedIn ? <ExplorePage /> : <Navigate replace to="/" />}
          ></Route>

          <Route
            path="/profile"
            element={isLoggedIn ? <UserProfile /> : <Navigate replace to="/" />}
          ></Route>

          <Route
            path="*"
            element={isLoggedIn ? <Navigate to="/watchlist" /> : <Navigate to="/" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
