import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./router";
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
