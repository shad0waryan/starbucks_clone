import React from "react";
import "./styles/Navbar.css";
import logo from "../assets/starbucks.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Mycartcontext } from "../context";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
function Navbar() {
  const a = useContext(Mycartcontext);
  const { logged, logout } = a;

  return (
    <div className="navbar pl-24 pr-24">
      <div className="navbar__menu text-s4">
        <Link to="/Home" className="p-5">
          <div className="navbar__logo  ">
            <img
              src={logo}
              alt=""
              className="logo w-[40px] h-[40px] hover:scale-105"
            />
          </div>
        </Link>
        <Link to="/Home">
          <div className="home pl-2 pr-2 hover:cursor-pointer pt-2 pb-2 hover:scale-110">
            Home
          </div>
        </Link>
        <Link to="/gift">
          <div className="gift pl-2 pr-2 hover:cursor-pointer pt-2 pb-2 hover:scale-110">
            Gift
          </div>
        </Link>
        <Link to="/order">
          <div className="order pl-2 pr-2 hover:cursor-pointer pt-2 pb-2 hover:scale-110">
            Order
          </div>
        </Link>
        <Link to="/pay">
          <div className="pay pl-2 pr-2 hover:cursor-pointer pt-2 pb-2 hover:scale-110">
            Pay
          </div>
        </Link>
        <Link to="/store">
          <div className="store pl-2 pr-2 hover:cursor-pointer pt-2 pb-2 hover:scale-110">
            Store
          </div>
        </Link>
      </div>
      <div className="flex ml-10 gap-4">
        <div className="navbar__search mr-10 pt-1 pb-1 pr-2 pl-2">
          <SearchOutlinedIcon style={{ color: "#6b6b6b" }} />
          <input
            type="text"
            className="search__input pt-1 pb-1"
            placeholder="Looking for something specific?"
          />
        </div>
        <div className="navbar__cart flex self-center">
          <Link to="/cart">
            <div className="account__icon__div">
              <ShoppingCartOutlinedIcon className="account__icon" />
              <p className="cart__name text-s4 font-semibold">Cart</p>
            </div>
          </Link>
        </div>
        {!logged && (
          <div className="navbar__account self-center flex items-center">
            <Link to="/">
              <div className="account__icon__div">
                <AccountCircleOutlinedIcon className="account__icon" />
                <p className="cart__name text-s4 font-semibold">Login</p>
              </div>
            </Link>
          </div>
        )}
        {logged && (
          <div className="navbar__account self-center flex items-center">
            <p className="cart__name text-s4 font-semibold mr-4">
              Welcome User
            </p>
            <button className="account__icon__div">
              <AccountCircleOutlinedIcon className="account__icon" />
              <button
                onClick={logout}
                className="cart__name text-s4 font-semibold"
              >
                Logout
              </button>
              {!logged && <Navigate to="/" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
