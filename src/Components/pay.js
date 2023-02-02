import React, { useState } from "react";
import "./styles/pay.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import barcode from "../assets/barcode.png";
function Pay() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">Home {">"} Starbucks Pay</p>
      </div>
      <div className="bg-smokewhite flex justify-between items-center">
        <p className="p-4 pl-24 text-s4 font-semibold ">My Starbucks Cards</p>
        <div className="flex items-center pr-24">
          <p className="p-4 pl-24 text-s3 font-semibold text-lightgreen ">
            My Starbucks Cards
          </p>
          <button className="bg-lightgreen text-white pl-3 pr-3 rounded-2xl pt-1 pb-1">
            Add Card
          </button>
        </div>
      </div>
      <div className="bg-darkgreen p-16">
        <div className="add__card block rounded-lg p-12 pt-20 pb-20 bg-white opacity-90 w-fit hover:cursor-pointer hover:opacity-100">
          <div className="flex flex-col justify-center items-center z-10 ">
            <p className="text-s6">Add new Starbucks card</p>
            <button className="bg-newblack text-white text-s2 mt-4 pl-4 pr-4 rounded-3xl pt-2 pb-2 flex items-center gap-1">
              <AddCircleOutlineRoundedIcon />
              Add card
            </button>
          </div>
        </div>
      </div>
      <div className="pt-3 bg-darkgreen">
        <div className="bg-white rounded-t-3xl pt-6"></div>
        <div className="bg-white pt-8 pb-12 flex flex-col gap-4 items-center">
          <p className="text-s4 font-semibold">
            Scan the Barcode and Pay at the Store
          </p>
          <img src={barcode} alt="" width={"400px"} height={"240px"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pay;
