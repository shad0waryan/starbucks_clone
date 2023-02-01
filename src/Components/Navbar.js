import React from "react";
import "./styles/Navbar.css";
import logo from "../assets/starbucks.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo p-5">
        <Link to="/">
          <img src={logo} alt="" className="logo w-[40px] h-[40px]" />
        </Link>
      </div>
      <div className="navbar__menu text-s4 mr-24">
        <Link to="/">
          <div className="home pl-2 pr-2 hover:cursor-pointer pt-2 pb-2">
            Home
          </div>
        </Link>
        <Link to="/gift">
          <div className="gift pl-2 pr-2 hover:cursor-pointer pt-2 pb-2">
            Gift
          </div>
        </Link>
        <Link to="/order">
          <div className="order pl-2 pr-2 hover:cursor-pointer pt-2 pb-2">
            Order
          </div>
        </Link>
        <Link to="/pay">
          <div className="pay pl-2 pr-2 hover:cursor-pointer pt-2 pb-2">
            Pay
          </div>
        </Link>
        <Link to="/store">
          <div className="store pl-2 pr-2 hover:cursor-pointer pt-2 pb-2">
            Store
          </div>
        </Link>
      </div>
      <div className="navbar__search ">
        <SearchOutlinedIcon style={{ color: "#6b6b6b" }} />
        <input
          type="text"
          className="search__input"
          placeholder="Looking for something specific?"
        />
      </div>
      <div className="navbar__cart">
        <Link to="/cart">
          <div className="account__icon__div">
            <ShoppingCartOutlinedIcon className="account__icon" />
          </div>
        </Link>
      </div>
      <div className="navbar__account">
        <Link to="/login">
          <div className="account__icon__div">
            <AccountCircleOutlinedIcon className="account__icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
