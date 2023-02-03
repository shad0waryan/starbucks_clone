import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Mycartcontext } from "./context";
import { useContext } from "react";

function Logout() {
  const a = useContext(Mycartcontext);
  const { logged, setLogged } = a;
  return (
    <div className="bg-newblack">
      <div className="login__page flex flex-col items-center">
        <div className="login mt-[15vh]">
          <div className="flex flex-col items-center gap-6 mt-12 mb-12 text-center">
            {logged && <button onClick={setLogged(false)}>Yes, Log out</button>}
            <div>
              <p className="text-s5 font-bold">
                You are successfully logged out!
              </p>
              <p className="text-s4 font-semibold mt-4">
                Click Login to login to your account again
              </p>
            </div>
            {!logged && (
              <Link to="/">
                <button className=" bg-lightgreen hover:bg-darkgreen  disabled:opacity-60 disabled: scale-100 pt-6 pb-6 pl-14 pr-14 text-white rounded-full">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
