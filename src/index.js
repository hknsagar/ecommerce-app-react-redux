import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <App />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
