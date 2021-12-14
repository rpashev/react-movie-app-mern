import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  username: "",
  userId: "",
  email: "",
  watchlist: [],
  seenlist: [],
  image: "",
  login: (token, username, userId, email) => {},
  logout: () => {},
  addToUserList: (movieId, list) => {},
  removeFromUserList: (movieId, list) => {},
  updateImage: (imageUrl) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUsername = localStorage.getItem("username");
  const initialUserId = localStorage.getItem("userId");
  const initialEmail = localStorage.getItem("email");
  const initialWatchlist = JSON.parse(localStorage.getItem("watchlist"));
  const initialSeenlist = JSON.parse(localStorage.getItem("seenlist"));
  const initialImage = localStorage.getItem("image");

  const [token, setToken] = useState(initialToken);
  const [username, setUsername] = useState(initialUsername);
  const [userId, setUserId] = useState(initialUserId);
  const [email, setEmail] = useState(initialEmail);
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [seenlist, setSeenlist] = useState(initialSeenlist);
  const [image, setImage] = useState(initialImage);

  const userIsLoggedIn = !!token;

  const loginHandler = (
    token,
    username,
    userId,
    email,
    watchlist,
    seenlist,
    image
  ) => {
    setToken(token);
    setUsername(username);
    setUserId(userId);
    setEmail(email);
    setWatchlist(watchlist);
    setSeenlist(seenlist);
    setImage(image);

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("userId", userId);
    localStorage.setItem("email", email);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    localStorage.setItem("seenlist", JSON.stringify(seenlist));
    localStorage.setItem("image", image);
  };

  const logoutHandler = () => {
    setToken(null);
    setUsername("");
    setUserId("");
    setEmail("");
    setWatchlist(null);
    setSeenlist(null);
    setImage(null);

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("watchlist");
    localStorage.removeItem("seenlist");
    localStorage.removeItem("image");
  };

  const addToUserListHandler = (movieId, list) => {
    let updatedList;

    if (list === "watchlist") {
      updatedList = watchlist.slice();
      updatedList.push(movieId);
      setWatchlist(updatedList);
    } else if (list === "seenlist") {
      updatedList = seenlist.slice();
      updatedList.push(movieId);
      setSeenlist(updatedList);
    }

    localStorage.setItem([list], JSON.stringify(updatedList));
  };

  const removeFromUserListHandler = (movieId, list) => {
    let updatedList;

    if (list === "watchlist") {
      updatedList = watchlist.filter((id) => movieId !== id);
      console.log(updatedList);
      setWatchlist(updatedList);
    } else if (list === "seenlist") {
      updatedList = seenlist.filter((id) => movieId !== id);
      setSeenlist(updatedList);
    }

    localStorage.setItem([list], JSON.stringify(updatedList));
  };

  const updateImageHandler = (imageUrl) => {
    setImage(imageUrl);
  };

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    email,
    username,
    userId,
    watchlist,
    seenlist,
    image,
    login: loginHandler,
    logout: logoutHandler,
    addToList: addToUserListHandler,
    removeFromList: removeFromUserListHandler,
    updateImage: updateImageHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
