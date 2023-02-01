/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles/order.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

function order() {
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
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://b.zmtcdn.com/data/pictures/chains/8/18630948/149f4d2fc28da147452d5db105d17905.png"
            }
            vg={"a"}
            name={"Java Chip Frappuccino"}
            price={"364.50"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://thewoodenskillet.com/wp-content/uploads/2021/07/vanilla-sweet-cream-cold-brew-1.jpg"
            }
            vg={"a"}
            name={"Vanilla Sweet Cream Cold Brew"}
            price={"338.25"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHc-rVOpr-908_Et4HyS835uWPdVwXExqZ-qzhKOTfclcqYQFZQiVC3Bh8JKfZGNyGkA&usqp=CAU"
            }
            vg={"a"}
            name={"Signature Hot Chocolate"}
            price={"237.00"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://drivemehungry.com/wp-content/uploads/2022/07/new-york-cheesecake-7.jpg"
            }
            nvg={"a"}
            name={"New York Cheesecake"}
            price={"259.25"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://media-cdn.tripadvisor.com/media/photo-s/07/83/a3/d4/latte.jpg"
            }
            vg={"a"}
            name={"Caffe Latte"}
            price={"275.25"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://us2guntur.com/images//10071img/EggNChkCroissant_B_251020.jpg"
            }
            nvg={"a"}
            name={"Egg White and Chicken In Multigrain Croiss"}
            price={"346.50"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://static01.nyt.com/images/2016/02/24/dining/24FASTMUFFIN/24FASTMUFFIN-square640.jpg"
            }
            nvg={"a"}
            name={"Blueberry Muffin"}
            price={"394.40"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://healthyfitnessmeals.com/wp-content/uploads/2022/06/Chicken-Salad-Sandwich-8.jpg"
            }
            nvg={"a"}
            name={"Chicken Salad Sandwich"}
            price={"241.71"}
          />
        </div>
        <div className="self-center justify-self-center">
          <Card
            photoUrl={
              "https://b.zmtcdn.com/data/pictures/chains/8/18630948/149f4d2fc28da147452d5db105d17905.png"
            }
            vg={"a"}
            name={"Cappuccino"}
            price={"447.38"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default order;
