import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MoviesContext from "./context";

ReactDOM.render(
  <React.StrictMode>
    <MoviesContext>
      <App />
    </MoviesContext>
  </React.StrictMode>,
  document.getElementById("root")
);
