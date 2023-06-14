import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import App from "./App";




ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);