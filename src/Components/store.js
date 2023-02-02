import React from "react";
import "./styles/store.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Store() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">Home {">"} Store</p>
      </div>
      <Footer />
    </div>
  );
}

export default Store;
