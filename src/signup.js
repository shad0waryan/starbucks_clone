import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Mycartcontext } from "./context";
import { useContext } from "react";
function Signup() {
  const a = useContext(Mycartcontext);
  const { regEmail, setRegEmail, regPassword, setRegPassword, register } = a;

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
              Register user
            </h1>
            <label htmlFor="username">Create Username  (Or press skip)</label>
            <input
              id="username"
              type="text"
              onChange={(event) => {
                setRegEmail(event.target.value);
              }}
              value={regEmail}
              className="input__field mb-2"
              placeholder="Enter Email Id "
            />
            <label htmlFor="password">Create a new Password </label>
            <input
              id="password"
              type="password"
              onChange={(event) => {
                setRegPassword(event.target.value);
              }}
              value={regPassword}
              className="input__field mb-2"
              placeholder="Enter Password"
            />
            <span className="flex items-center mt-2">
              <p className="text-s2 font-normal">Already have an account?</p>
              <Link to="/">
                <p className="text-s2 text-lightgreen font-medium pl-1 underline hover:cursor-pointer">
                  Log In
                </p>
              </Link>
            </span>
            <div className="login__button__div ">
              {(regPassword.length >= 8 && (
                <p className="text-lightgreen">
                  ✓ Password should be of at least 8 characters
                </p>
              )) || (
                <p className="text-red">
                  X Password should be of at least 8 characters
                </p>
              )}
              <button
                disabled={regEmail === "" || regPassword.length < 8}
                onClick={register}
                className="login__button mt-4 bg-lightgreen hover:bg-darkgreen  disabled:opacity-60 disabled: scale-100"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
