import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles/cart.css";
function Cart() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">
          Home {">"} Orders {">"} Your Cart
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
