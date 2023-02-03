/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <div className="bg-newgreen pl-24 pr-24 pt-16 pb-16">
        <div className="bg-newpink pl-16 pr-16 pt-12 pb-12 flex items-center justify-between rounded-lg text-white">
          <div className="flex flex-col  justify-between">
            <div className="pt-4 pb-4">
              <p>Order Today!</p>
            </div>
            <div className="pt-4 pb-4">
              <p className="text-s6 font-bold">The cozy Rabbit Series</p>
              <p className="text-s4 font-medium">
                Celebrate the New Year with our new cozy rabbit mug. Great for
                you or as a gift.
              </p>
            </div>
            <div className="pt-4 ">
              <p className="text-s3">For</p>
              <p className="text-s2">₹ 2200</p>
            </div>
          </div>
          <div className="flex-col  ">
            <button className="bg-white text-newblack pt-2 pb-2 pl-6 pr-6 rounded-3xl shadow-md shadow-newgrey ">
              Order now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-neworange pl-24 pr-24 pt-16 pb-16 mt-4">
        <div className="bg-whitegreen pl-16 pr-16 pt-12 pb-12 flex items-center justify-between rounded-lg text-lightgreen">
          <div className="flex flex-col  justify-between">
            <div className="pt-4 pb-4">
              <p>It's Back in Town!</p>
            </div>
            <div className="pt-4 pb-4">
              <p className="text-s6 font-bold">Starbucks Bearista</p>
              <p className="text-s4 font-medium">
                Celebrate the New Year with our new cozy rabbit mug. Great for
                you or as a gift.
              </p>
            </div>
            <div className="pt-4 ">
              <p className="text-s3">For</p>
              <p className="text-s2">₹ 2200</p>
            </div>
          </div>
          <div className="flex-col  ">
            <button className="bg-lightgreen text-white pt-2 pb-2 pl-6 pr-6 rounded-3xl shadow-md shadow-newgrey ">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <div className="category flex items-center pl-24 pr-24 pt-6 pb-12 bg-lightcream gap-4 ">
        <a
          href="#"
          className=" text-s3 pl-6 pr-6 font-medium hover:cursor-pointer"
        >
          FEATURED
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-6 pr-6 font-medium hover:cursor-pointer"
        >
          ANYTIME
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-6 pr-6 font-medium hover:cursor-pointer"
        >
          CONGRATULATIONS
        </a>
        <p className="text-newgrey text-opacity-25">|</p>
        <a
          href="#"
          className=" text-s3 pl-6 pr-6 font-medium hover:cursor-pointer"
        >
          THANK YOU
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Gift;
