import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { AuthContextProvider } from "./Context/user-context";
import App from "./App";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
