/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles/order.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Records from "./items.json";

function Order() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3">Home {">"} Order</p>
      </div>
      <div className="bg-darkgreen flex items-center text-white p-10 pl-24 pr-0">
        <PersonPinCircleIcon />
        <input
          type="text"
          className="outline-none border-b border-lightgreen bg-darkgreen ml-2 mr-2 p-2"
          placeholder="Enter your location"
        />
        <AccessTimeRoundedIcon />
        <p className="text-s2 ml-1">10 minutes</p>
      </div>
      <div className="category flex items-center pl-24 pr-24 pt-6 pb-6 bg-lightcream gap-4">
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Bestseller
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Drinks
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Food
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Merchandise
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Coffee At Home
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-3 pr-3 font-medium hover:cursor-pointer"
        >
          Ready to Eat
        </a>
      </div>
      <div className="mt-4 pl-24">
        <p className="font-semibold text-s4">Bestseller</p>
        <p className="font-thin text-s3 text-fadeblack text-opacity-70">
          Everyone's favorite Starbucks put together in a specially curated
          collection.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-12 mb-12 pl-14 pr-14 ">
        {Records.map((record) => {
          return (
            <div className="self-center justify-self-center">
              <Card
                id={record.id}
                photoUrl={record.photoUrl}
                vg={record.vg}
                nvg={record.nvg}
                name={record.name}
                price={record.price}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Order;
