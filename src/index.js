// React
import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";

// Redux
import store from "./app/store.js";
import { Provider } from "react-redux";

// Main App
import App from "./App.js";

// Main Styles
import "./index.scss";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
  , document.getElementById("root")
);
