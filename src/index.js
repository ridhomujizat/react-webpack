import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ChateState from "./context/ChatState";

ReactDOM.render(
  <ChateState>
    <App />
  </ChateState>,
  document.getElementById("wgChat")
);
