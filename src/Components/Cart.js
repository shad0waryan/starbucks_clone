import React from "react";
import Navbar from "./Navbar";
import { Mycartcontext } from "../context";
import { useContext } from "react";
import veg from "../assets/veg-icon.png";
import nonveg from "../assets/non-veg-icon.png";
import { Link } from "react-router-dom";

function Cart() {
  const a = useContext(Mycartcontext);
  const { cart, setCart, subTotal, setSubTotal } = a;
  const taxes = (subTotal * 18) / 100;
  const removeFromCart = (itemid, price) => {
    setCart(cart.filter((obj) => obj.id !== itemid));
    setSubTotal(subTotal - price);
  };
  return (
    <div className="flex-col">
      <Navbar />
      <div>
        <p className="p-4 pl-24 text-s3 ">
          Home {">"} Orders {">"} Your Cart
        </p>
      </div>
      <div>
        <p className="p-4 pl-24 mb-4 text-s4 font-semibold ">
          MOBILE ORDER AND PAY
        </p>
      </div>
      <div className="mb-12">
        {cart.map((item) => {
          const { id, photoUrl, name, vg, nvg, price } = item;
          return (
            <div className="flex-col items-center">
              <div className=" flex items-center justify-between pl-24 pr-24">
                <div className="flex">
                  <img
                    src={photoUrl}
                    className="w-[80px] h-[80px] rounded-md"
                    alt=""
                  />
                  <div className="flex-col gap-3 ml-6 mt-2">
                    {vg && (
                      <img src={veg} width={"16px"} height={"16px"} alt="" />
                    )}
                    {nvg && (
                      <img src={nonveg} width={"16px"} height={"16px"} alt="" />
                    )}
                    <p className="text-s4 font-semibold mt-2"> {name}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-col text-right">
                    <p className="font-semibold text-s3">₹ {price}</p>
                    <p className="text-s3 underline text-lightgreen hover:cursor-pointer">
                      Customise
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        removeFromCart(id, price);
                      }}
                      className="ml-12 hover:scale-105 bg-red pl-3 pr-3 pt-2 pb-2 rounded-3xl text-white hover:bg-darkred"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <hr className="w-auto border-t border-lightgrey mt-8 mb-12 mr-24 ml-24" />
            </div>
          );
        })}
      </div>
      <div className="pl-24 pr-24  pb-12 self-center ">
        <Link to="/order">
          <p className="text-s3 underline text-lightgreen">Add more items +</p>
        </Link>
      </div>
      <div className="flex-col bg-lightcream pt-10 pb-16 pl-24 pr-24">
        <div>
          <p className="test-s4 font-semibold mb-4">BILLING DETAILS</p>
        </div>
        <span className="flex justify-between pt-2 pb-2">
          <p className="text-opacity-10 text-s4 text-darkgrey">Item Total:</p>
          <p className="text-s4 text-darkgrey">
            ₹ {parseFloat(subTotal).toFixed(2)}
          </p>
        </span>
        <span className="flex justify-between pt-2 pb-2">
          <p className="text-s4 text-darkgrey">Discount:</p>
          <p className="text-s4 text-lightgreen">-₹ 0.00</p>
        </span>
        <span className="flex justify-between pt-2 pb-2">
          <p className="text-s4 text-darkgrey">Service Charge:</p>
          <p className="text-s4 text-darkgrey">₹ 0.00</p>
        </span>
        <span className="flex justify-between pt-2 pb-2 ">
          <p className="text-s4 text-darkgrey">Taxes:</p>
          <p className="text-s4 text-darkgrey">
            {" "}
            ₹ {parseFloat(taxes).toFixed(2)}
          </p>
        </span>
        <hr className="mt-4 border-t border-lightgrey " />
        <span className="flex justify-between pt-3 pb-2 ">
          <p className="text-s5 font-bold text-darkgrey">GRAND TOTAL:</p>
          <p className="text-s4 font-semibold text-darkgrey">
            {" "}
            ₹ {parseFloat(subTotal + taxes).toFixed(2)}
          </p>
        </span>
      </div>
      <div className=" bg-transparent sticky bottom-0 ">
        <div className="bg-lightgreen rounded-t-2xl pt-6"></div>
        <div className="bg-lightgreen text-white  flex items-center justify-between pl-24 pr-24">
          {cart.length === 1 && (
            <p className="text-white font-semibold text-s5">
              {cart.length} item in cart
            </p>
          )}
          {cart.length > 1 && (
            <p className="text-white font-semibold text-s5">
              {cart.length} items in cart
            </p>
          )}
          {subTotal > 0 && <p>₹ {parseFloat(subTotal + taxes).toFixed(2)}</p>}
          {subTotal <= 0 && <p className="pb-2"> Please add items in cart</p>}
        </div>
        <div className="bg-darkishgreen pb-10 pl-24 pr-24 pt-4  flex justify-end">
          <Link to="/pay">
            <button
              disabled={subTotal <= 0}
              className="bg-white opacity-100 font-semibold pl-4 pr-4 pt-2 pb-2 rounded-3xl disabled:opacity-60 disabled:text-newblack hover:scale-110 hover:duration-200"
            >
              Pay for Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
