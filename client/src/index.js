import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import "./index.css"
import { Provider } from "react-redux";
import store from "./store/ReduxStore.js";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="1060586963739-f087hbr9o7tq6oan9hmfdqurrcn1c7hv.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);