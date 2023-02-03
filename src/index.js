import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Mycart } from "./App";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import Gift from "./Components/gift";
import Login from "./Login";
import Store from "./Components/store";
import Pay from "./Components/pay";
import Order from "./Components/order";
import Cart from "./Components/Cart";
import Signup from "./signup";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Mycart>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/Home" element={<App />} />
          <Route path="/store" element={<Store />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Mycart>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
