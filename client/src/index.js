import React, { StrictMode } from "react";
import {render} from "react-dom";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/ReduxStore.js";
import App from "./App";




render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
      </Provider>,      
  document.getElementById("root")
);