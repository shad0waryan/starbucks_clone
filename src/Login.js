import React from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { Mycartcontext } from "./context";
import { useContext } from "react";
function Login() {
  const a = useContext(Mycartcontext);
  const { logEmail, setLogEmail, logPassword, setLogPassword, login, logged } =
    a;
  return (
    <div className="bg-newblack">
      <div className="login__page flex flex-col items-center">
        <div className="login mt-[15vh]">
          <div className="login__form mt-6 font-thin">
            <Link to="/Home" className="self-end">
              <p className="text-lightgreen font-bold text-s2 p-2 hover:scale-125">
                SKIP
              </p>
            </Link>
            <h1 className="login__heading text-s6 font-bold self-start mb-4">
              Login
            </h1>
            <label htmlFor="username">Username (Or click on skip)</label>
            <input
              id="username"
              type="text"
              onChange={(event) => {
                setLogEmail(event.target.value);
              }}
              value={logEmail}
              className="input__field mb-2"
              placeholder="Enter Email ID or Mobile Number"
            />
            <label htmlFor="password">Password </label>
            <input
              id="password"
              type="password"
              onChange={(event) => {
                setLogPassword(event.target.value);
              }}
              value={logPassword}
              className="input__field mb-2"
              placeholder="Enter Password"
            />
            <span className="flex items-center mt-2">
              <p className="text-s2 font-normal">Don't Have an account?</p>
              <Link to="/signup">
                <p className="text-s2 text-lightgreen font-medium pl-1 underline hover:cursor-pointer">
                  Sign Up
                </p>
              </Link>
            </span>
            <div className="login__button__div ">
              <button
                disabled={logEmail === "" || logPassword.length < 8}
                className="login__button mt-4 bg-lightgreen hover:bg-darkgreen  disabled:opacity-60 disabled: scale-100"
                onClick={login}
              >
                Login
              </button>
              {logged && <Navigate to="/Home" />}
            </div>
            <span className="flex items-center mt-2 self-center ">
              <p className="text-s2 font-normal">Facing trouble logging in?</p>
              <p className="text-s2 text-lightgreen font-medium pl-1 underline hover:cursor-pointer">
                Get help
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
