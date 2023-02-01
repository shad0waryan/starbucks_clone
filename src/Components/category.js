import { Avatar } from "@mui/material";
import React from "react";
import "./styles/catergory.css";
function category({ name, photoUrl }) {
  return (
    <div className=" flex flex-col justify-center items-center w-[108px] h-[158px]">
      <div className="category__border__div">
        <Avatar
          src={photoUrl}
          className="catergory__image"
          sx={{ width: 108, height: 108 }}
        />
      </div>
      <p className="text-s3 font-semibold text-newblack text-opacity-80 mt-2 ">{name}</p>
    </div>
  );
}

export default category;
