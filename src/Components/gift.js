import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Gift() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">Home {">"} Gift</p>
      </div>
      <Footer />
    </div>
  );
}

export default Gift;
