import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  username: "",
  userId: "",
  email: "",
  login: (token, username, userId, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUsername = localStorage.getItemn("username");
  const initialUserId = localStorage.getItem("userId");
  const initialEmail = localStorage.getItem("email");

  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialUsername);
  const [userId, setUserId] = useState(initialUserId);
  const [email, setEmail] = useState(initialEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, username, userId, email) => {
    setToken(token);
    setUsername(username);
    setUserId(userId);
    setEmail(email);

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", userId);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setUsername("");
    setUserId("");
    setEmail("");

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    email,
    username,
    userId,
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
