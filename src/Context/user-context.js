import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  username: "",
  userId: "",
  email: "",
  watchlist: null,
  seenlist: null,
  login: (token, username, userId, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUsername = localStorage.getItem("username");
  const initialUserId = localStorage.getItem("userId");
  const initialEmail = localStorage.getItem("email");
  const initialWatchlist = localStorage.getItem("watchlist");
  const initialSeenlist = localStorage.getItem("seenlist");

  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialUsername);
  const [userId, setUserId] = useState(initialUserId);
  const [email, setEmail] = useState(initialEmail);
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [seenlist, setSeenlist] = useState(initialSeenlist);

  const userIsLoggedIn = !!token;

  const loginHandler = (
    token,
    username,
    userId,
    email,
    watchlist,
    seenlist
  ) => {
    setToken(token);
    setUsername(username);
    setUserId(userId);
    setEmail(email);
    setWatchlist(watchlist);
    setSeenlist(seenlist);

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", userId);
    localStorage.setItem("email", email);
    localStorage.setItem("watchlist", watchlist);
    localStorage.setItem("seenlist", seenlist);
  };

  const logoutHandler = () => {
    setToken(null);
    setUsername("");
    setUserId("");
    setEmail("");
    setWatchlist(null);
    setSeenlist(null);

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("watchlist");
    localStorage.removeItem("seenlist");

  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    email,
    username,
    userId,
    watchlist,
    seenlist,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
