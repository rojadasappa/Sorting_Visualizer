// Importing React and Redux
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Main component and Redux store
import Main from "./components/Main/MainContainer.js";
import store from "./store";

// Render the app into the #app element
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
