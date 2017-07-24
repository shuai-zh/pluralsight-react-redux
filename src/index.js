/* eslint-disable import/default */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./components/App";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
