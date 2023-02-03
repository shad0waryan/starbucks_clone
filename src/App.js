import "./App.css";
import Navbar from "./Components/Navbar";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import star1 from "./assets/star.png";
import star2 from "./assets/star (1).png";
import Category from "./Components/category";
import Card from "./Components/Card";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Records from "./Components/items.json";
import { useContext } from "react";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import { Mycartcontext } from "./context";
import swal from "sweetalert";
export const Mycart = (props) => {
  const [regEmail, setRegEmail] = useState("");

  const [regPassword, setRegPassword] = useState("");

  const [logEmail, setLogEmail] = useState("");

  const [logPassword, setLogPassword] = useState("");

  const [curUser, setCurUser] = useState({});

  const [cart, setCart] = useState([]);

  const [subTotal, setSubTotal] = useState(0);

  const [logged, setLogged] = useState(false);

  const register = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
      swal({
        title: "Registered",
        text: "You can now Login",
        icon: "success",
        button: "OK",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const login = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await signInWithEmailAndPassword(
        auth,
        logEmail,
        logPassword
      );
      setLogged(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setLogged(false);
  };

  return (
    <Mycartcontext.Provider
      value={{
        cart,
        setCart,
        subTotal,
        setSubTotal,
        logged,
        setLogged,
        regEmail,
        setRegEmail,
        regPassword,
        setRegPassword,
        logEmail,
        setLogEmail,
        logPassword,
        setLogPassword,
        register,
        login,
        logout,
        curUser,
        setCurUser,
      }}
    >
      {props.children}
    </Mycartcontext.Provider>
  );
};

function App() {
  const a = useContext(Mycartcontext);
  const { cart } = a;

  return (
    <div className="App">
      <Navbar />
      {/* Welcome bar */}
      <div className="welcome__bar text-[#ffffff] bg-darkgreen h-[80px] hover:cursor-pointer">
        <p className="font-bold text-s4">Welcome Tier Rewards Program</p>
        <span className="flex items-center">
          <img src={star1} alt="" width={"24px"} height={"24px"} />
          <p className="text-s6 ml-2">2</p>
          <p className="text-s4 ml-1 ">/5</p>
          <p className="text-s4 ml-1 ">stars</p>
        </span>
        <span className="flex items-center">
          <img src={star2} alt="" width={"24px"} height={"24px"} />
          <p className="text-s6 ml-2">3</p>
          <p className="text-s4 ml-1 ">Rewards</p>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-s2 ">You are </p>
          <p className="text-s2 font-bold">2 stars</p>
          <p className="text-s2 ">away from another reward.</p>
        </span>
        <ArrowCircleRightIcon
          className="right__arrow"
          style={{ color: "white" }}
        />
      </div>
      {/* Balance */}
      <div className="balance__bar h-[32px] bg-darkcream p-2">
        <p className="text-center text-s2 ">Total card Balance: Rs. 1730.58</p>
      </div>

      {/* Categories */}
      <div className="categories flex-col m-[10px] pt-16 pb-16 ">
        <p className="text-s6 font-extrabold text-darkgreen pl-28">
          Handcrafted Curations
        </p>
        <div className="categories__list flex  justify-evenly mt-5">
          <Category
            photoUrl={
              "https://hips.hearstapps.com/del.h-cdn.co/assets/17/51/1513892402-starbucks-black-and-white-mocha-2.jpg"
            }
            name={"Bestseller"}
          />
          <Category
            photoUrl={
              "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/182191ab163770437b62861a6f987709"
            }
            name={"Drinks"}
          />
          <Category
            photoUrl={
              "https://www.foodbusinessnews.net/-/media/8C28927BD2844918A2CBC7810086146A.ashx?h=300&w=432"
            }
            name={"Food"}
          />
          <Category
            photoUrl={
              "https://cdn.shopify.com/s/files/1/0256/8024/8929/products/76df240c-ec5c-4636-81cc-9a8a32c26f9d1649064010201BarandDrinkware1.webp?v=1656499764&width=1445"
            }
            name={"Merchandise"}
          />
          <Category
            photoUrl={
              "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg"
            }
            name={"Coffee At Home"}
          />
          <Category
            photoUrl={
              "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg"
            }
            name={"Ready to Eat"}
          />
        </div>
      </div>

      {/* Recommendations */}

      <div className="categories flex-col p-[25px] bg-darkcream pl-28 pr-28">
        <p className="text-s6 font-bold text-darkgreen mb-8">
          Barista Recommends
        </p>
        <p className="text-s3 font-bold text-lightgreen self-center text-center">
          <ArrowBackIcon />
          Scroll
          <ArrowForwardIcon />
        </p>
        <Swiper spaceBetween={40} slidesPerView={3} className="mt-4 mb-11 z-0">
          {/* <div className="cards__div flex overflow-x-scroll gap-10 p-10 overscroll-contain no-scrollbar"> */}
          {Records.map((record) => {
            return (
              <SwiperSlide>
                <Card
                  id={record.id}
                  photoUrl={record.photoUrl}
                  vg={record.vg}
                  nvg={record.nvg}
                  name={record.name}
                  price={record.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Footer />
      {cart.length > 0 && (
        <div className=" bg-transparent sticky bottom-0 z-50">
          <div className="bg-lightgreen rounded-t-2xl pt-6 pl-24 pr-24 pb-6 flex justify-between">
            {cart.length === 1 && (
              <p className="text-white font-semibold text-s5">
                {cart.length} item in cart
              </p>
            )}
            {cart.length > 1 && (
              <p className="text-white font-semibold text-s5">
                {cart.length} items in cart
              </p>
            )}
            <div className="bg-lightgren ">
              <Link to="/cart">
                <button className="bg-white opacity-100 font-semibold pl-4 pr-4 pt-2 pb-2 rounded-3xl ">
                  Go To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
