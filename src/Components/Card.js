import React from "react";
import "./styles/card.css";
import veg from "../assets/veg-icon.png";
import nonveg from "../assets/non-veg-icon.png";
function Card({ photoUrl, name, price, vg, nvg }) {
  return (
    <div className="item__card  bg-[white] rounded-lg p-[20px] mb-2">
      <div className="item__info flex gap-4 pr-28">
        <img src={photoUrl} className="w-[80px] h-[80px] rounded-md" alt="" />
        <div className="item__title flex-col gap-3 mt-2 ">
          {vg && <img src={veg} width={"16px"} height={"16px"} alt="" />}
          {nvg && <img src={nonveg} width={"16px"} height={"16px"} alt="" />}
          <p className="text-s3 font-semibold mt-2"> {name}</p>
        </div>
      </div>
      <div className="item__price flex items-center mt-4 justify-between ">
        <p className="font-medium text-s3">₹ {price}</p>
        <button className="login__button  bg-lightgreen hover:bg-darkgreen w-2 p-2">
          Add item
        </button>
      </div>
    </div>
  );
}

export default Card;
