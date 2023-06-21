import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import "./index.css"
import { Provider } from "react-redux";
import store from "./store/ReduxStore.js";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);