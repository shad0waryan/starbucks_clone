import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import map from "../assets/map.jpg";

function Store() {
  return (
    <div>
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">Home {">"} Store</p>
      </div>
      <div className="ml-24 mr-24 flex bg-lightcream p-4 mt-4">
        <div className=" flex-col w-1/3 h-min">
          <div className="bg-darkgreen flex items-center justify-center p-10 rounded-md">
            <div className=" pt-1 pb-1 pr-2 pl-2 bg-white rounded-3xl w-full">
              <SearchOutlinedIcon style={{ color: "#6b6b6b" }} />
              <input
                type="text"
                className="pt-1 pl-2 pb-1 outline-none text-s3 w-11/12 pr-2"
                placeholder="Find a Store"
              />
            </div>
          </div>
          <div className="bg-white pb-20 flex flex-col text-center justify-center items-center h-full">
            <div className="flex justify-center p-8 rounded-full bg-lightcream w-fit self-center mt-16">
              <img
                src={map}
                alt=""
                className="rounded-full shadow-newgrey shadow-md drop-shadow-lg"
                width={"150px"}
                height={"200px"}
              />
            </div>
            <p className="mt-4 text-s4 font-semibold text-lightgreen">
              Enter Location mannually
            </p>
            <div className=" pt-1 pb-1 pr-2 pl-2 bg-lightgreen rounded-3xl w-fit mt-4">
              <SearchOutlinedIcon style={{ color: "#ffffff" }} />
              <input
                type="text"
                className="pt-1 pl-2 pb-1 outline-none text-s3 w-auto pr-2 text-white bg-lightgreen"
                placeholder="Search for city "
              />
            </div>
          </div>
        </div>
        <div className="w-2/3 ml-2">
          <div className=" w-full h-full bg-white rounded-md"></div>
        </div>
      </div>
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
}

export default Store;
