import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // Импортируйте свой Redux-стор
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Оберните ваш компонент App в Provider */}
    <App />
  </Provider>
);
