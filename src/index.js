// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import store from "./app/store.js";
import { Provider } from "react-redux";

// Main App
import App from "./App.js";

// Main Styles
import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
);
