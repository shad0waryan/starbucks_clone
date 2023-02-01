import React from "react";
import "./styles/login.css";
import { Link } from "react-router-dom";
const login = () => {
  return (
    <div className="bg-newblack">
      <div className="login__page flex flex-col items-center">
        <div className="login mt-[15vh]">
          <form className="login__form mt-6 font-thin">
            <Link to="/" className="self-end">
              <p className="text-lightgreen font-bold text-s2">SKIP</p>
            </Link>
            <h1 className="login__heading text-s6 font-bold self-start">
              Login
            </h1>
            <label htmlFor="">USERNAME</label>
            <input
              type="text"
              className="input__field"
              placeholder="Enter Email ID or Mobile Number"
            />
            <label htmlFor="">Password</label>
            <input
              type="text"
              className="input__field"
              placeholder="Enter Password"
            />
            <span className="flex items-center mt-2">
              <p className="text-s2 font-normal">Don't Have an account?</p>
              <p className="text-s2 text-lightgreen font-medium pl-1 underline hover:cursor-pointer">
                Sign Up
              </p>
            </span>
            <Link to="/" className="login__button__div ">
              <button className="login__button  bg-lightgreen hover:bg-darkgreen ">
                Login
              </button>
            </Link>
            <span className="flex items-center mt-2 self-center ">
              <p className="text-s2 font-normal">Facing trouble logging in?</p>
              <p className="text-s2 text-lightgreen font-medium pl-1 underline hover:cursor-pointer">
                Get help
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
