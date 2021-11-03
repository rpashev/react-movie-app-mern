import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import userContext from "./Context/user-context";
import App from "./App";

const user = false;
ReactDOM.render(
  <userContext.Provider value={{ user }}>
    <App />
  </userContext.Provider>,
  document.getElementById("root")
);
