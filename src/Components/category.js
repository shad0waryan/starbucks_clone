import { Avatar } from "@mui/material";
import React from "react";
import "./styles/catergory.css";
import { Link } from "react-router-dom";

function Category({ name, photoUrl }) {
  return (
    <div className=" flex flex-col justify-center items-center w-[108px] h-[158px]">
      <Link to="/order">
        <div className="category__border__div">
          <Avatar
            src={photoUrl}
            className="catergory__image"
            sx={{ width: 108, height: 108 }}
          />
        </div>
      </Link>
      <p className="text-s3 font-semibold text-newblack text-opacity-80 mt-2 ">
        {name}
      </p>
    </div>
  );
}

export default Category;
