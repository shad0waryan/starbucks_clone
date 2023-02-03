import React from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { Mycartcontext } from "./context";
import { useContext } from "react";
function Signup() {
  const validUser = "admin";
  const validPass = "123";
  const a = useContext(Mycartcontext);
  const { logged, setLogged } = a;
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (submit) => {
    submit.preventDefault();
    if (user === validUser && pass === validPass) {
      setLogged(true);
    } else if (user === "" || pass === "") {
      alert("Please enter both username and password!");
    } else {
      alert("Wrong Credentials!");
    }
  };
  return (
    <div className="bg-newblack">
      <div className="login__page flex flex-col items-center">
        <div className="login mt-[15vh]">
          <form className="login__form mt-6 font-thin" onSubmit={handleSubmit}>
            <Link to="/Home" className="self-end">
              <p className="text-lightgreen font-bold text-s2 p-2 hover:scale-125">
                SKIP
              </p>
            </Link>
            <h1 className="login__heading text-s6 font-bold self-start mb-4">
              Register user
            </h1>
            <label htmlFor="username">Create Username</label>
            <input
              id="username"
              type="text"
              onChange={(event) => {
                setUser(event.target.value);
              }}
              value={user}
              className="input__field mb-2"
              placeholder="Enter Email ID or Mobile Number"
            />
            <label htmlFor="password">Create a new Password </label>
            <input
              id="password"
              type="password"
              onChange={(event) => {
                setPass(event.target.value);
              }}
              value={pass}
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
              <button
                disabled={user === "" || pass === ""}
                className="login__button  bg-lightgreen hover:bg-darkgreen  disabled:opacity-60 disabled: scale-100"
              >
                Register
              </button>
              {logged && <Navigate to="/Home" />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
