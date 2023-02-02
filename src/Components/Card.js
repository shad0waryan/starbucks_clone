import React from "react";
import "./styles/card.css";
import veg from "../assets/veg-icon.png";
import nonveg from "../assets/non-veg-icon.png";
import { Mycartcontext } from "../context";
import { useContext } from "react";

function Card({ id, photoUrl, name, vg, nvg, price }) {
  const a = useContext(Mycartcontext);
  const { cart, setCart, subTotal, setSubTotal } = a;

  const addToCart = (id, photoUrl, name, vg, nvg, price) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    newCart = { id, photoUrl, name, vg, nvg, price };
    setCart([...cart, newCart]);
    setSubTotal(subTotal + price);
  };
  return (
    <div className="item__card  bg-[white] rounded-lg p-[20px] mb-2">
      <div className="item__info flex gap-4 ">
        <img src={photoUrl} className="w-[80px] h-[80px] rounded-md" alt="" />
        <div className="item__title flex-col gap-3 mt-2 ">
          {vg && <img src={veg} width={"16px"} height={"16px"} alt="" />}
          {nvg && <img src={nonveg} width={"16px"} height={"16px"} alt="" />}
          <p className="text-s3 font-semibold mt-2"> {name}</p>
        </div>
      </div>
      <div className="item__price flex items-center mt-4 justify-between ">
        <p className="font-medium text-s3">₹ {price}</p>
        <div className="flex w-max justify-center">
          <button
            className="add__item__button "
            onClick={() => {
              addToCart(id, photoUrl, name, vg, nvg, price);
            }}
          >
            Add item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
